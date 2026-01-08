LootJS.modifiers((event) => {
    
//Kasowanie Wildberry
    event.addBlockLootModifier("minecraft:grass").removeLoot("cosmopolitan:wildberry");
    event.addBlockLootModifier("minecraft:tall_grass").removeLoot("cosmopolitan:wildberry");

//Kowadła
event.addBlockLootModifier("overgeared:stone_anvil").replaceLoot("minecraft:cobblestone", "overgeared:stone_anvil");

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

//No Diamonds from Lucky Rock
event.addLootTableModifier("majruszsaccessories:gameplay/lucky_rock_default").removeLoot("minecraft:diamond");

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

//No Netherite ingots in bastions (except scraps)

//End Remastered
event.removeGlobalModifier("endrem:abandoned_mineshaft");
event.removeGlobalModifier("endrem:buried_treasure");

event.removeGlobalModifier("endrem:igloo_chest");
event.removeGlobalModifier("endrem:jungle_temple");
event.removeGlobalModifier("endrem:nether_bridge");
event.removeGlobalModifier("endrem:pillager_outpost");
event.removeGlobalModifier("endrem:shipwreck_treasure");
event.removeGlobalModifier("endrem:simple_dungeon");

event.removeGlobalModifier("endrem:evoker");
event.removeGlobalModifier("endrem:skeleton_horse");
event.removeGlobalModifier("endrem:witch");

event.addLootTypeModifier(LootType.CHEST)
    .removeLoot("endrem:black_eye")
    .removeLoot("endrem:magical_eye")
    .removeLoot("endrem:old_eye")
    .removeLoot("endrem:lost_eye")
    .removeLoot("endrem:cold_eye")
    .removeLoot("endrem:rogue_eye")
    .removeLoot("endrem:nether_eye")
    .removeLoot("endrem:corrupted_eye")

//Rough Gems
event.addBlockLootModifier("minecraft:redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);
event.addBlockLootModifier("minecraft:deepslate_redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);

event.addBlockLootModifier("minecraft:diamond_ore").replaceLoot("minecraft:diamond", "kubejs:rough_diamond", true);
event.addBlockLootModifier("minecraft:deepslate_diamond_ore").replaceLoot("minecraft:diamond", "kubejs:rough_diamond", true);

event.addBlockLootModifier("minecraft:emerald_ore").replaceLoot("minecraft:emerald", "kubejs:rough_emerald", true);
event.addBlockLootModifier("minecraft:deepslate_emerald_ore").replaceLoot("minecraft:emerald", "kubejs:rough_emerald", true);

event.addBlockLootModifier("minecraft:lapis_ore").replaceLoot("minecraft:lapis_lazuli", "kubejs:rough_lazurite", true);
event.addBlockLootModifier("minecraft:deepslate_lapis_ore").replaceLoot("minecraft:lapis_lazuli", "kubejs:rough_lazurite", true);

event.addBlockLootModifier("caverns_and_chasms:spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);
event.addBlockLootModifier("caverns_and_chasms:deepslate_spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);

event.addBlockLootModifier("sullysmod:jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);
event.addBlockLootModifier("sullysmod:deepslate_jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);

});