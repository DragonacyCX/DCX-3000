// server_scripts

// --- DASH PHYSICS CONFIG ---
// 0.6 = snappy braking
// 0.9 = Icy sliding
// 1.0 = Standard Minecraft friction only
let dashDecay = 0.76;
let dashMinSpeed = 0.23; // Speed at which the dash state ends

let $LivingEntity = Java.loadClass("net.minecraft.world.entity.LivingEntity");
NetworkEvents.dataReceived("bc_impact_mechanics", (event) => {
	let { player, level, data } = event;
	if (!player) return;

	const x = data.getDouble("x");
	const y = data.getDouble("y");
	const z = data.getDouble("z");

	const doLunge = data.getBoolean("doLunge");
	const doRecoil = data.getBoolean("doRecoil");
	const doImpact = data.getBoolean("doImpact");

	if (doLunge) {
		let strength = 1.0;
		// player.addMotion(x * strength, y * strength, z * strength);
		player.setMotion(x * strength, y * strength, z * strength);
		player.hasImpulse = true;
		player.hurtMarked = true;
		player.persistentData.putBoolean("bc_dash_active", true);
	}

	// Apply Impact Recoil
	if (doRecoil) {
		// Logic: Apply vector with 0.25 multiplier
		let strength = 0.25;
		player.addMotion(x * strength, y * strength, z * strength);
		player.hasImpulse = true;
		player.hurtMarked = true;
		// console.log(x * strength + ", " + y * strength + ", " + z * strength);
	}

	// Apply Enemy Directional Impact
	if (doImpact && data.contains("targets") && !data.targets.isEmpty()) {
		// Logic: Invert vector (-1). Original multiplier was 0.15
		// Strenth increased to 1.2 to be noticeable
		let strength = 1.2;
		let impactX = -1 * x * strength;
		let impactY = -1 * y * strength;
		let impactZ = -1 * z * strength;

		// Retrieve the NBT List (ID 10 = CompoundTag)
		let targets = data.getList("targets", 10);

		for (let i = 0; i < data.targets.size(); i++) {
			let tag = targets.get(i);
			let uuid = tag.getUUID("uuid");
			let entity = level.getEntity(uuid);

			if (!entity) continue;
			if (!entity.isLiving()) continue;

			if (entity instanceof $LivingEntity) {
				let kbResist = entity.getAttributeValue("minecraft:generic.knockback_resistance");
				// Clamp at 0 to prevent negative math if a mob has >100% resistance
				let kbFactor = Math.max(0, 1 - kbResist);

				entity.addMotion(impactX * kbFactor, impactY * kbFactor, impactZ * kbFactor);
				entity.hasImpulse = true;
				entity.hurtMarked = true;
				// console.log(impactX * kbFactor + ", " + impactY * kbFactor + ", " + impactZ * kbFactor);
			}
		}
	}
});

// This applies the "Purposely Slows Down" effect
PlayerEvents.tick((event) => {
	let { entity } = event;
	if (!entity.isPlayer()) return;

	if (entity.persistentData.getBoolean("bc_dash_active")) {
		let player = event.getPlayer();
		let vel = player.getDeltaMovement();

		// Apply Custom Decay (Braking)
		// We multiply the X and Z velocity by our factor
		// This overrides standard air resistance to force a stop.
		let newX = vel.x() * dashDecay;
		let newZ = vel.z() * dashDecay;

		// Calculate remaining horizontal speed
		let horizontalSpeed = Math.sqrt(newX * newX + newZ * newZ);

		// If we are slow enough, stop the dash logic so normal movement resumes
		if (horizontalSpeed < dashMinSpeed) {
			player.persistentData.bc_dash_active = false;
			return;
		}

		// Apply the decayed velocity
		// We preserve Y so gravity works normally
		player.setMotion(newX, vel.y(), newZ);
		player.hasImpulse = true;
		entity.hurtMarked = true;
	}
});
// Coded by eyeseyes_real (EyesEyes, 714208315911045202)
