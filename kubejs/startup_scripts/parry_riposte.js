// requires: swordblockingmechanics
// startup_scripts

// Immediately Invoked Function Expression to prevent polluting the global namespace
(() => {
	// --- CONFIGURATION ---
	const PARRY_RUSH_DURATION = 25; // Ticks (20 ticks = 1 second)
	// 0.5 = +50% Attack Speed. 1.0 = +100% (Double Speed).
	const ATTACK_SPEED_MULTIPLIER = 0.6;

	const $EventResult = Java.loadClass("fuzs.puzzleslib.api.event.v1.core.EventResult");
	const $SwordBlockingHandler = Java.loadClass("fuzs.swordblockingmechanics.handler.SwordBlockingHandler");

	StartupEvents.registry("mob_effect", (event) => {
		event
			.create("parry_rush")
			.beneficial()
			.color(0xffd27f)
			.displayName(Component.translatable("Parry Rush"))
			.modifyAttribute(
				"minecraft:generic.attack_speed",
				"2f379f52-e225-416a-94f0-48849a294e2f",
				ATTACK_SPEED_MULTIPLIER,
				"multiply_total",
			);
	});

	ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingAttackEvent", (event) => {
		(() => {
			let entity = event.entity;
			if (!entity || !entity.player || entity.level.isClientSide()) return;
			let result = $SwordBlockingHandler.onLivingAttack(entity, event.source, event.amount);
			if (result.equals($EventResult.INTERRUPT)) {
				entity.potionEffects.add("kubejs:parry_rush", PARRY_RUSH_DURATION, 0, false, false);
				// console.log("--- PARRY RUSH ---");
			}
		})();
	});
	// Thanks andrezinh0 (329752967408386049) for base
})();

// Coded by eyeseyes_real (EyesEyes, 714208315911045202)
