EntityEvents.spawned(event => {
  let entity = event.entity;
  if (!entity.isPlayer()) return;

  let maxMana = entity.getAttribute("irons_spellbooks:max_mana");

  if (maxMana && maxMana.baseValue > 25) {
    maxMana.baseValue = 25;
  }
  if (maxMana && maxMana.baseValue < 25) {
    maxMana.baseValue = 25;
  }
});

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return

  event.server.gameRules.set("reducedDebugInfo", true)
  event.server.gameRules.set("artifacts.runningShoes.speedBonus", 20)
  event.server.gameRules.set("artifacts.bunnyHoppers.jumpBoostLevel", 0)
  event.server.gameRules.set("artifacts.bunnyHoppers.doCancelFallDamage", false)
  event.server.gameRules.set("artifacts.eternalSteak.enabled", false)
  event.server.gameRules.set("artifacts.everlastingBeef.enabled", false)
  event.server.gameRules.set("artifacts.powerGlove.attackDamageBonus", 2)
  event.server.gameRules.set("mobExplosionDropDecay", false)
  event.server.gameRules.set("multiplayerspawners", toggle_break_message)
  event.server.persistentData.gameRules = true
});
