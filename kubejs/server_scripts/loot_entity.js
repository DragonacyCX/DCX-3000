LootJS.modifiers((event) => {
//NETHEROWE MOBY W OVERWORLDZIE
event.addEntityLootModifier("minecraft:hoglin").anyDimension("minecraft:overworld").removeLoot("fleshz:hide");
event.addEntityLootModifier("minecraft:hoglin").anyDimension("minecraft:overworld").removeLoot("irons_spellbooks:hogskin");
event.addEntityLootModifier("minecraft:hoglin").anyDimension("minecraft:overworld").removeLoot("mynethersdelight:hoglin_loin");

event.addEntityLootModifier("minecraft:wither_skeleton").anyDimension("minecraft:overworld").removeLoot("minecraft:wither_skeleton_skull");

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

//event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchMainHand(Item.of("aquaculture:neptunium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");
//event.addEntityLootModifier("born_in_chaos_v1:diamond_termite").matchOffHand(Item.of("aquaculture:neptunium_pickaxe").ignoreNBT()).addLoot("spelunkery:rough_diamond_shard");

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

//Zirconia z mima (i mimika)
event.addEntityLootModifier("artifacts:mimic").randomChance(0.5).addLoot("caverns_and_chasms:zirconia");
event.addEntityLootModifier("caverns_and_chasms:mime").randomChance(0.5).addLoot("caverns_and_chasms:zirconia");

//Templejty
event.addEntityLootModifier("aether:slider").addLoot("kubejs:iron_template");
event.addEntityLootModifier("aquamirae:captain_cornelia").addLoot("kubejs:gold_template");
event.addEntityLootModifier("alexscaves:forsaken").addLoot("kubejs:gold_template");
event.addEntityLootModifier("alexsmobs:warped_mosco").addLoot("kubejs:gold_template");
event.addEntityLootModifier("alexscaves:hullbreaker").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("alexscaves:luxtructosaurus").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("alexsmobs:void_worm").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("born_in_chaos_v1:dire_hound_leader").addLoot("luckys_armory:smithing_template_leather_upgrade");
event.addEntityLootModifier("born_in_chaos_v1:lifestealer_true_form").addLoot("kubejs:iron_template");
event.addEntityLootModifier("born_in_chaos_v1:lord_the_headless").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("born_in_chaos_v1:nightmare_stalker").addLoot("luckys_armory:smithing_template_leather_upgrade");
event.addEntityLootModifier("born_in_chaos_v1:supreme_bonescaller_stage_2").addLoot("kubejs:iron_template");
event.addEntityLootModifier("born_in_chaos_v1:missioner").addLoot("kubejs:iron_template");
event.addEntityLootModifier("born_in_chaos_v1:mother_spider").addLoot("kubejs:iron_template");
event.addEntityLootModifier("born_in_chaos_v1:sir_the_headless").addLoot("kubejs:gold_template");
event.addEntityLootModifier("born_in_chaos_v1:krampus").addLoot("kubejs:gold_template");
event.addEntityLootModifier("cataclysm:ancient_remnant").addLoot("kubejs:gold_template");
event.addEntityLootModifier("cataclysm:ender_golem").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("cataclysm:ignis").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("cataclysm:the_harbinger").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("cataclysm:the_leviathan").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("cataclysm:netherite_monstrosity").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("cataclysm:old_netherite_monstrosity").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("dungeonnowloading:chaos_spawner").addLoot("kubejs:gold_template");
event.addEntityLootModifier("galosphere:preserved").addLoot("kubejs:iron_template");
event.addEntityLootModifier("graveyard:lich").addLoot("kubejs:iron_template");
event.addEntityLootModifier("illagerinvasion:invoker").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("irons_spellbooks:dead_king").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("majruszsdifficulty:giant").addLoot("kubejs:iron_template");
event.addEntityLootModifier("majruszsdifficulty:cerberus").addLoot("kubejs:iron_template");
event.addEntityLootModifier("majruszsdifficulty:tank").addLoot("luckys_armory:smithing_template_leather_upgrade");
event.addEntityLootModifier("minecraft:elder_guardian").addLoot("kubejs:gold_template");
event.addEntityLootModifier("minecraft:ender_dragon").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("minecraft:warden").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("minecraft:wither").addLoot("kubejs:diamond_template");
event.addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut").addLoot("kubejs:iron_template");
event.addEntityLootModifier("mowziesmobs:frostmaw").addLoot("kubejs:iron_template");
event.addEntityLootModifier("mowziesmobs:umvuthi").addLoot("kubejs:iron_template");
event.addEntityLootModifier("mutantmonsters:mutant_creeper").addLoot("kubejs:iron_template");
event.addEntityLootModifier("mutantmonsters:mutant_enderman").addLoot("kubejs:gold_template");
event.addEntityLootModifier("mutantmonsters:mutant_skeleton").addLoot("kubejs:iron_template");
event.addEntityLootModifier("mutantmonsters:mutant_zombie").addLoot("kubejs:iron_template");
event.addEntityLootModifier("twilightforest:alpha_yeti").addLoot("kubejs:iron_template");
event.addEntityLootModifier("twilightforest:minoshroom").addLoot("kubejs:gold_template");
event.addEntityLootModifier("traveloptics:enraged_dead_king").addLoot("kubejs:netherite_template");
event.addEntityLootModifier("twilightforest:hydra").addLoot("kubejs:iron_template");
event.addEntityLootModifier("twilightforest:naga").addLoot("kubejs:iron_template");
event.addEntityLootModifier("twilightforest:snow_queen").addLoot("kubejs:gold_template");
});