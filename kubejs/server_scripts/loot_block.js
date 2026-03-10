LootJS.modifiers((event) => {

//Kasowanie Wildberry
    //event.addBlockLootModifier("minecraft:grass").removeLoot("cosmopolitan:wildberry");
    //event.addBlockLootModifier("minecraft:tall_grass").removeLoot("cosmopolitan:wildberry");

//Kowadła
event.addBlockLootModifier("overgeared:stone_anvil").replaceLoot("minecraft:cobblestone", "overgeared:stone_anvil");

//No Diamonds from Lucky Rock
event.addLootTableModifier("majruszsaccessories:gameplay/lucky_rock_default").removeLoot("minecraft:diamond");

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