LootJS.modifiers((event) => {

//Maggoty zamiast Corpse Maggotów
    event.addEntityLootModifier("born_in_chaos_v1:maggot").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);
    // or .replaceLoot("minecraft:flint", "minecraft:diamond", true) if you want to preserve the stack size
    event.addEntityLootModifier("born_in_chaos_v1:corpse_fly").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);
    event.addEntityLootModifier("born_in_chaos_v1:bloody_gadfly").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);
    event.addEntityLootModifier("born_in_chaos_v1:swarmer").replaceLoot("born_in_chaos_v1:corpse_maggot", "alexsmobs:maggot", true);

//Dark Metal zamiast Forgotten Steela
event.addEntityLootModifier("warriorsofpastepoch:skeleton_musketeer").replaceLoot("warriorsofpastepoch:forgotten_steel_nugget", "born_in_chaos_v1:pieceofdarkmetal", true);

//Batwing
event.addEntityLootModifier("minecraft:bat").replaceLoot("miners_delight:bat_wing", "warriorsofpastepoch:batwing", true);

//End Remaster
event.addLootTypeModifier(LootType.ENTITY)
    .removeLoot("endrem:witch_pupil")
    .removeLoot("endrem:undead_soul")
});