LootJS.modifiers((event) => {

//Maggoty zamiast Corpse Maggotów
    event.addEntityLootModifier("born_in_chaos_v1:maggot").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);
    // or .replaceLoot("minecraft:flint", "minecraft:diamond", true) if you want to preserve the stack size
    event.addEntityLootModifier("born_in_chaos_v1:corpse_fly").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);
    event.addEntityLootModifier("born_in_chaos_v1:bloody_gadfly").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);
    event.addEntityLootModifier("born_in_chaos_v1:swarmer").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);

//Diamond Termite
    //event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").replaceLoot("born_in_chaos_v1:diamond_termite_shard", "spelunkery:rough_diamond_shard", true);
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").removeLoot("born_in_chaos_v1:diamond_termite_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("aether:gravitite_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("aether:gravitite_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("aether:valkyrie_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("aether:valkyrie_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("aquaculture:neptunium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("aquaculture:neptunium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("cataclysm:black_steel_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("cataclysm:black_steel_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("caverns_and_chasms:necromium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("caverns_and_chasms:necromium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("deep_aether:stratus_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("deep_aether:stratus_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("dungeonnowloading:mendstone_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("dungeonnowloading:mendstone_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("lost_aether_content:phoenix_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("lost_aether_content:phoenix_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("majruszsdifficulty:enderium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("majruszsdifficulty:enderium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("minecraft:diamond_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("minecraft:diamond_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("minecraft:netherite_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("minecraft:netherite_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("oreganized:electrum_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("oreganized:electrum_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("overgeared:steel_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("overgeared:steel_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("twilightforest:fiery_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("twilightforest:fiery_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("undergarden:forgotten_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("undergarden:forgotten_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("undergarden:froststeel_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("undergarden:froststeel_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

//Dark Metal zamiast Forgotten Steela
event.addEntityLootModifier("warriorsofpastepoch:skeleton_musketeer").replaceLoot("warriorsofpastepoch:forgotten_steel_nugget", "born_in_chaos_v1:pieceofdarkmetal", true);

//Batwing
event.addEntityLootModifier("minecraft:bat").replaceLoot("miners_delight:bat_wing", "warriorsofpastepoch:batwing", true);

});