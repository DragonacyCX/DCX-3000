// requires: swordblockingmechanics
// startup_scripts

// Immediately Invoked Function Expression to prevent polluting the global namespace
(() => {
    // --- CONFIGURATION ---
    const PARRY_STUN_DURATION = 20; // Ticks (20 ticks = 1 second)

    const $EventResult = Java.loadClass("fuzs.puzzleslib.api.event.v1.core.EventResult");
    const $SwordBlockingHandler = Java.loadClass("fuzs.swordblockingmechanics.handler.SwordBlockingHandler");

    ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingAttackEvent", (event) => {
        (() => {
            let entity = event.source.actual;
            if (!entity || entity.level.isClientSide()) return;
            let result = $SwordBlockingHandler.onLivingAttack(entity, event.source, event.amount);
            if (result.equals($EventResult.INTERRUPT)) {
                entity.potionEffects.add("cataclysm:stun", PARRY_STUN_DURATION, 0, false, false);
                // console.log("--- PARRY RUSH ---");
            }
        })();
    });
    // Thanks andrezinh0 (329752967408386049) for base
})();
// Coded by eyeseyes_real (EyesEyes, 714208315911045202)