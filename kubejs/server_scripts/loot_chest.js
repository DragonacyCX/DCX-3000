LootJS.modifiers((event) => {

//Overgeared Diamond Template GTFO
//event.addLootTableModifier("minecraft:chests/jungle_temple").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/desert_piramid").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/simple_dungeon").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/woodland_mansion").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/shipwreck_treasure").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/stronghold_library").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/stronghold_corridor").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/stronghold_crossing").removeLoot("overgeared:diamond_upgrade_smithing_template");
//event.addLootTableModifier("minecraft:chests/abandoned_mineshaft").removeLoot("overgeared:diamond_upgrade_smithing_template");

//No farmer rope in minecarts
event.addLootTableModifier("minecraft:chests/abandoned_mineshaft").removeLoot("farmersdelight:rope");

//Medieval Buildings
event.addLootTableModifier("medieval_buildings:chests/tiny_shack").replaceLoot("minecraft:diamond_pickaxe", "overgeared:copper_pickaxe");
event.addLootTableModifier("medieval_buildings:chests/tiny_shack").replaceLoot("minecraft:diamond_axe", "overgeared:copper_axe");
event.addLootTableModifier("medieval_buildings:chests/tiny_shack").replaceLoot("minecraft:diamond_hoe", "overgeared:copper_hoe");
event.addLootTableModifier("medieval_buildings:chests/tiny_shack").replaceLoot("minecraft:diamond_shovel", "overgeared:copper_shovel");

event.addLootTableModifier("medieval_buildings:chests/medium_shack_house").replaceLoot("minecraft:diamond", "overgeared:steel_ingot");

event.addLootTableModifier("medieval_buildings:chests/tower").replaceLoot("minecraft:diamond", "overgeared:steel_ingot");
event.addLootTableModifier("medieval_buildings:chests/tower").replaceLoot("minecraft:stone_sword", "overgeared:copper_sword");
event.addLootTableModifier("medieval_buildings:chests/tower").replaceLoot("minecraft:diamond_sword", "overgeared:steel_sword");
event.addLootTableModifier("medieval_buildings:chests/tower").replaceLoot("minecraft:totem_of_undying", "caverns_and_chasms:bejeweled_apple");
event.addLootTableModifier("medieval_buildings:chests/tower").replaceLoot("minecraft:netherite_scrap", "irons_spellbooks:magic_cloth");

event.addLootTableModifier("medieval_buildings:chests/town_inside").replaceLoot("minecraft:diamond", "overgeared:steel_ingot");
event.addLootTableModifier("medieval_buildings:chests/town_inside").replaceLoot("minecraft:stone_sword", "overgeared:copper_sword");
event.addLootTableModifier("medieval_buildings:chests/town_inside").replaceLoot("minecraft:diamond_sword", "overgeared:steel_sword");
event.addLootTableModifier("medieval_buildings:chests/town_inside").replaceLoot("minecraft:totem_of_undying", "caverns_and_chasms:bejeweled_apple");
event.addLootTableModifier("medieval_buildings:chests/town_inside").replaceLoot("minecraft:netherite_scrap", "irons_spellbooks:magic_cloth");
event.addLootTableModifier("medieval_buildings:chests/town_inside").replaceLoot("minecraft:trident", "born_in_chaos_v1:trident_hayfork");

//Underground Campsite Diamond > Steel
event.addLootTableModifier("artifacts:chests/campsite_chest").replaceLoot("minecraft:diamond_pickaxe", "overgeared:steel_pickaxe");
event.addLootTableModifier("artifacts:chests/campsite_chest").replaceLoot("minecraft:diamond_axe", "overgeared:steel_axe");
event.addLootTableModifier("artifacts:chests/campsite_chest").replaceLoot("minecraft:diamond_shovel", "overgeared:steel_shovel");
event.addLootTableModifier("artifacts:chests/campsite_chest").replaceLoot("minecraft:diamond", "overgeared:steel_ingot");

//No OP rings in chests
event.addLootTypeModifier(LootType.CHEST)
    .removeLoot("irons_spellbooks:mana_ring")
    .removeLoot("irons_spellbooks:emerald_stoneplate_ring")
    .removeLoot("irons_spellbooks:fireward_ring")
    .removeLoot("irons_spellbooks:frostward_ring")
    .removeLoot("irons_spellbooks:poisonward_ring")
    .removeLoot("irons_spellbooks:concentration_amulet")

//No extra SimplyMore
    .removeLoot("simplymore:stasis")
    .removeLoot("simplymore:iron_backhand_blade")
    .removeLoot("simplymore:gold_backhand_blade")
    .removeLoot("simplymore:diamond_backhand_blade")
    .removeLoot("simplymore:netherite_backhand_blade")
    .removeLoot("simplymore:iron_dagger")
    .removeLoot("simplymore:gold_dagger")
    .removeLoot("simplymore:diamond_dagger")
    .removeLoot("simplymore:netherite_dagger")
    .removeLoot("simplymore:runic_dagger")

//No basicweapons
    .removeLoot("basicweapons:iron_spear")
    .removeLoot("basicweapons:golden_spear")
    .removeLoot("basicweapons:diamond_spear")
    .removeLoot("basicweapons:netherite_spear")
    .removeLoot("basicweapons:wooden_glaive")
    .removeLoot("basicweapons:stone_glaive")
    .removeLoot("basicweapons:iron_glaive")
    .removeLoot("basicweapons:golden_glaive")
    .removeLoot("basicweapons:diamond_glaive")
    .removeLoot("basicweapons:netherite_glaive");

//Steel instead of diamond SimplySwords
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_longsword").replaceLoot("simplyswords:diamond_longsword", "integrated_simply_swords:born_in_chaos/dark_metal/longsword");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_twinblade").replaceLoot("simplyswords:diamond_twinblade", "integrated_simply_swords:born_in_chaos/dark_metal/twinblade");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_rapier").replaceLoot("simplyswords:diamond_rapier", "integrated_simply_swords:born_in_chaos/dark_metal/rapier");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_katana").replaceLoot("simplyswords:diamond_katana", "integrated_simply_swords:born_in_chaos/dark_metal/katana");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_sai").replaceLoot("simplyswords:diamond_sai", "integrated_simply_swords:born_in_chaos/dark_metal/sai");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_spear").replaceLoot("simplyswords:diamond_spear", "integrated_simply_swords:born_in_chaos/dark_metal/spear");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_glaive").replaceLoot("simplyswords:diamond_glaive", "integrated_simply_swords:born_in_chaos/dark_metal/glaive");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_warglaive").replaceLoot("simplyswords:diamond_warglaive", "integrated_simply_swords:born_in_chaos/dark_metal/warglaive");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_cutlass").replaceLoot("simplyswords:diamond_cutlass", "integrated_simply_swords:born_in_chaos/dark_metal/cutlass");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_claymore").replaceLoot("simplyswords:diamond_claymore", "integrated_simply_swords:born_in_chaos/dark_metal/claymore");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_greataxe").replaceLoot("simplyswords:diamond_greataxe", "integrated_simply_swords:born_in_chaos/dark_metal/greataxe");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_chakram").replaceLoot("simplyswords:diamond_chakram", "integrated_simply_swords:born_in_chaos/dark_metal/chakram");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_scythe").replaceLoot("simplyswords:diamond_scythe", "integrated_simply_swords:born_in_chaos/dark_metal/scythe");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_halberd").replaceLoot("simplyswords:diamond_halberd", "integrated_simply_swords:born_in_chaos/dark_metal/halberd");
  event.addLootTypeModifier(LootType.CHEST).matchLoot("simplyswords:diamond_greathammer").replaceLoot("simplyswords:diamond_greathammer", "integrated_simply_swords:born_in_chaos/dark_metal/greathammer");

  //No Netherite ingots in bastions (except scraps)



});