
//LOOT//
LootJS.modifiers((event) => {

//Resetting default drops
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

event.addLootTypeModifier(LootType.ENTITY)
    .removeLoot("endrem:witch_pupil")
    .removeLoot("endrem:undead_soul")

//Custom Drops
  //Wither Eye (Bez Zmian)

  //Guardian Eye (Bez Zmian)

  //Undead soul
event.addEntityLootModifier("majruszsdifficulty:cerberus")
    .randomChance(0.3)
    .addLoot("endrem:undead_soul")
  //Old Eye
event.addEntityLootModifier("cataclysm:ancient_remnant")
    .addLoot("endrem:old_eye")
  //Black Eye
event.addLootTableModifier("aquamirae:chests/frozen_chest")
    .addLoot("endrem:black_eye");
  //Rogue Eye
event.addLootTableModifier("dungeonnowloading:entities/fairkeeper_serpent_caller/common")
    .addLoot("endrem:rogue_eye");

});

//PRZEPISY//
ServerEvents.recipes(event => {
  //Cryptic Eye
event.custom(
  {
	"type": "apotheosis:enchanting",
	"conditions": [{
		"type": "apotheosis:module",
		"module": "enchantment"
	}],
	"input": {
		"item": "minecraft:ender_eye"
	},
	"requirements": {
		"eterna": 37.5,
		"quanta": 50,
		"arcana": 90
	},
	"max_requirements": {
		"eterna": 40,
		"quanta": 75,
		"arcana": 100
	},
	"result": {
		"item": "endrem:cryptic_eye",
		"count": 1
	}
})

});