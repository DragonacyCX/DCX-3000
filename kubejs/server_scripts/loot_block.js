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
event.addBlockLootModifier("spelunkery:granite_redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);
event.addBlockLootModifier("spelunkery:andesite_redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);
event.addBlockLootModifier("spelunkery:diorite_redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);
event.addBlockLootModifier("spelunkery:tuff_redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);
event.addBlockLootModifier("spelunkery:calcite_redstone_ore").replaceLoot("minecraft:redstone", "kubejs:rough_cinnabar", true);

event.addBlockLootModifier("minecraft:diamond_ore").replaceLoot("minecraft:diamond", "kubejs:rough_diamond", true);
event.addBlockLootModifier("minecraft:deepslate_diamond_ore").replaceLoot("minecraft:diamond", "kubejs:rough_diamond", true);
event.addBlockLootModifier("spelunkery:granite_diamond_ore").replaceLoot("spelunkery:rough_diamond", "kubejs:rough_diamond", true);
event.addBlockLootModifier("spelunkery:andesite_diamond_ore").replaceLoot("spelunkery:rough_diamond", "kubejs:rough_diamond", true);
event.addBlockLootModifier("spelunkery:diorite_diamond_ore").replaceLoot("spelunkery:rough_diamond", "kubejs:rough_diamond", true);
event.addBlockLootModifier("spelunkery:tuff_diamond_ore").replaceLoot("spelunkery:rough_diamond", "kubejs:rough_diamond", true);

event.addBlockLootModifier("minecraft:emerald_ore").replaceLoot("minecraft:emerald", "kubejs:rough_emerald", true);
event.addBlockLootModifier("minecraft:deepslate_emerald_ore").replaceLoot("minecraft:emerald", "kubejs:rough_emerald", true);
event.addBlockLootModifier("spelunkery:granite_emerald_ore").replaceLoot("spelunkery:rough_emerald", "kubejs:rough_emerald", true);
event.addBlockLootModifier("spelunkery:andesite_emerald_ore").replaceLoot("spelunkery:rough_emerald", "kubejs:rough_emerald", true);
event.addBlockLootModifier("spelunkery:diorite_emerald_ore").replaceLoot("spelunkery:rough_emerald", "kubejs:rough_emerald", true);
event.addBlockLootModifier("spelunkery:tuff_emerald_ore").replaceLoot("spelunkery:rough_emerald", "kubejs:rough_emerald", true);

event.addBlockLootModifier("minecraft:lapis_ore").replaceLoot("minecraft:lapis_lazuli", "kubejs:rough_lazurite", true);
event.addBlockLootModifier("minecraft:deepslate_lapis_ore").replaceLoot("minecraft:lapis_lazuli", "kubejs:rough_lazurite", true);
event.addBlockLootModifier("spelunkery:granite_lapis_ore").replaceLoot("spelunkery:rough_lapis", "kubejs:rough_lapis", true);
event.addBlockLootModifier("spelunkery:andesite_lapis_ore").replaceLoot("spelunkery:rough_lapis", "kubejs:rough_lapis", true);
event.addBlockLootModifier("spelunkery:diorite_lapis_ore").replaceLoot("spelunkery:rough_lapis", "kubejs:rough_lapis", true);
event.addBlockLootModifier("spelunkery:tuff_lapis_ore").replaceLoot("spelunkery:rough_lapis", "kubejs:rough_lapis", true);

event.addBlockLootModifier("caverns_and_chasms:spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);
event.addBlockLootModifier("caverns_and_chasms:deepslate_spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);
event.addBlockLootModifier("st_gsoc:granite_spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);
event.addBlockLootModifier("st_gsoc:andesite_spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);
event.addBlockLootModifier("st_gsoc:diorite_spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);
event.addBlockLootModifier("st_gsoc:tuff_spinel_ore").replaceLoot("st_gsoc:rough_spinel", "kubejs:rough_spinel", true);

event.addBlockLootModifier("sullysmod:jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);
event.addBlockLootModifier("sullysmod:deepslate_jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);
event.addBlockLootModifier("spelunkery:granite_jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);
event.addBlockLootModifier("spelunkery:andesite_jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);
event.addBlockLootModifier("spelunkery:diorite_jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);
event.addBlockLootModifier("spelunkery:tuff_jade_ore").replaceLoot("sullysmod:rough_jade", "kubejs:rough_jade", true);

//Turquoise from modded copper ores
event.addBlockLootModifier("spelunkery:andesite_copper_ore").randomChance(0.005).addLoot("caverns_and_chasms:turquoise");
event.addBlockLootModifier("spelunkery:diorite_copper_ore").randomChance(0.005).addLoot("caverns_and_chasms:turquoise");
event.addBlockLootModifier("spelunkery:granite_copper_ore").randomChance(0.007).addLoot("caverns_and_chasms:turquoise");
event.addBlockLootModifier("spelunkery:tuff_copper_ore").randomChance(0.005).addLoot("caverns_and_chasms:turquoise");

});