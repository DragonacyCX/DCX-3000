// startup_scripts

// --- CONFIGURATION ---
let impactRecoil = true; // Push player (Recoil)
let impactEnemy = true; // Push enemies with swing
let moveAttack = false; // Lunge forward on attack

if (Platform.isClientEnvironment()) {
	ClientEvents.init((event) => {
		let $BetterCombatClientEvents = Java.loadClass("net.bettercombat.api.client.BetterCombatClientEvents");
		let $PlayerAttackStart = Java.loadClass("net.bettercombat.api.client.BetterCombatClientEvents$PlayerAttackStart");
		let $PlayerAttackHit = Java.loadClass("net.bettercombat.api.client.BetterCombatClientEvents$PlayerAttackHit");

		// 1. Register ATTACK_START (Lunge)
		$BetterCombatClientEvents.ATTACK_START.register(
			new JavaAdapter($PlayerAttackStart, {
				onPlayerAttackStart: function (player, attackHand) {
					global.playerAttackStartLunge(player, attackHand);
				},
			}),
		);
		// Thank you squoshi. (Wayfarer, 539958518204203013) for base

		// 2. Register ATTACK_HIT (Recoil & Impact)
		$BetterCombatClientEvents.ATTACK_HIT.register(
			new JavaAdapter($PlayerAttackHit, {
				onPlayerAttackStart: function (player, attackHand, targets, cursorTarget) {
					global.playerAttackHitImpact(player, attackHand, targets, cursorTarget);
				},
			}),
		);
	});

	/**
	 * Handles Forward Lunge on Attack Start
	 * @param {Internal.LocalPlayer} player
	 * @param {Internal.AttackHand_} attackHand
	 */
	global.playerAttackStartLunge = (player, attackHand) => {
		// console.log("--- ATTACK START ---");
		if (!moveAttack) return;

		let $Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");

		try {
			let velocity = player.getDeltaMovement();

			let look = player.getViewVector(1.0).normalize();
			let weightedLook = look.multiply(new $Vec3(2 * player.getDefaultMovementSpeed(), 1, 2 * player.getDefaultMovementSpeed()));
			let lookScaledByVel = look.scale(player.getDeltaMovement().length());

			// Compare lengths
			// Logic: If target lunge is faster than current velocity, use target.
			// Otherwise, cap it at current velocity magnitude (prevents super-lunging while falling/flying fast).
			let base = weightedLook.length() > lookScaledByVel.length() ? lookScaledByVel : weightedLook;

			// Attack Speed Scaling
			let attackSpeed = player.getAttributeValue("minecraft:generic.attack_speed");
			let force = 1.6 / attackSpeed;

			let vec = base.multiply(new $Vec3(4.0, 0, 4.0)).multiply(new $Vec3(force, 0, force));

			let attack = attackHand.attack();
			let hitboxName = attack.hitbox().toString();
			let animName = attack.animation().toString();

			// Basic Skill Sets uses inverted logic for ATTACK_START vs ATTACK_HIT
			// Lunge: Horizontal uses -1 for Right/MainHand
			let isExplicitLeft = animName.includes("left") || animName.includes("lr");
			let isRight = !attackHand.isOffHand() && !isExplicitLeft;

			let dirFactor = hitboxName.equals("HORIZONTAL_PLANE") ? (isRight ? -1 : 1) : 0;
			let vertFactor = hitboxName.equals("VERTICAL_PLANE") ? -1 : 0;

			let vecCross = vec.cross(new $Vec3(0, dirFactor, 0)).add(0, vertFactor, 0);
			let vecMoveEnemy = vec.add(vecCross.scale(0.25));

			let vecMoveVelocity = velocity.scale(2.0);

			// Clamp: If current momentum > 2x Speed, scale it down.
			if (vecMoveVelocity.length() > player.getDefaultMovementSpeed() * 2) {
				vecMoveVelocity = vecMoveVelocity.normalize().scale(player.getDefaultMovementSpeed() * 2);
			}

			vecMoveEnemy = vecMoveEnemy.add(vecMoveVelocity.scale(1.6));

			player.sendData("bc_impact_mechanics", {
				x: NBT.doubleTag(vecMoveEnemy.x()),
				y: NBT.doubleTag(vecMoveEnemy.y()),
				z: NBT.doubleTag(vecMoveEnemy.z()),
				doLunge: NBT.byteTag(+moveAttack),
			});
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * Handles Recoil and Enemy Impact on Attack Hit
	 * @param {Internal.LocalPlayer} player
	 * @param {Internal.AttackHand_} attackHand
	 * @param {Internal.List<Internal.Entity>} targets
	 * @param {Internal.Entity} cursorTarget
	 */
	global.playerAttackHitImpact = (player, attackHand, targets, cursorTarget) => {
		// console.log("--- ATTACK HIT ---");
		if (targets.isEmpty()) return;
		if (!impactRecoil && !impactEnemy) return;

		let $Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");
		let $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
		let $ListTag = Java.loadClass("net.minecraft.nbt.ListTag");

		try {
			let attack = attackHand.attack();
			let hitboxName = attack.hitbox().toString();
			let animName = attack.animation().toString();

			let isExplicitLeft = animName.includes("left") || animName.includes("lr");
			let isRight = !attackHand.isOffHand() && !isExplicitLeft;

			// Apply only if Horizontal Plane
			let dirFactor = hitboxName.equals("HORIZONTAL_PLANE") ? (isRight ? 1 : -1) : 0;
			// Apply only if Vertical Plane
			let vertFactor = hitboxName.equals("VERTICAL_PLANE") ? 1 : 0;

			let attackSpeed = player.getAttributeValue("minecraft:generic.attack_speed");
			let force = 0.2 * Math.max(0.5, 1.6 / attackSpeed);

			let vecMove = player
				.getViewVector(1.0)
				.cross(new $Vec3(0, dirFactor, 0)) // Calculate sideways vector
				.add(0, vertFactor, 0) // Add vertical chop
				.normalize() // Fix vector length to 1
				.scale(force); // Apply force magnitude

			let targetList = new $ListTag();
			for (let i = 0; i < targets.size(); i++) {
				let entity = targets.get(i);
				let tag = new $CompoundTag();
				tag.putUUID("uuid", entity.getUuid());
				targetList.add(tag);
			}

			// console.log(attack.animation());
			// console.log(attackHand.itemStack().getItem().getId());

			player.sendData("bc_impact_mechanics", {
				x: NBT.doubleTag(vecMove.x()),
				y: NBT.doubleTag(vecMove.y()),
				z: NBT.doubleTag(vecMove.z()),
				targets: targetList, // Already a ListTag
				doRecoil: NBT.byteTag(+impactRecoil),
				doImpact: NBT.byteTag(+impactEnemy),
				itemId: NBT.stringTag(attackHand.itemStack().getItem().getId()),
			});
			// Thank you konsola5 (1083438156667424768) for base
		} catch (error) {
			console.log(error);
		}
	};
}
// Thank you roost_er (Forg, 141674073892716544) for making Basic Skill Sets and Combat Tweaks mod and being open source
// Coded by eyeseyes_real (EyesEyes, 714208315911045202)
