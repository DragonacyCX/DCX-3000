//TIERY
  //MIEDZIANY TIER
ItemEvents.toolTierRegistry(event => {
  event.add('copper', tier => {
    tier.uses = 3191
    tier.speed = 5
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 13
    tier.repairIngredient = '#forge:ingots/copper'
  })
})

  //SREBRNY TIER
ItemEvents.toolTierRegistry(event => {
  event.add('silver', tier => {
    tier.uses = 157
    tier.speed = 9
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 18
    tier.repairIngredient = '#forge:ingots/silver'
  })
})

  //STALOWY TIER
ItemEvents.toolTierRegistry(event => {
  event.add('steel', tier => {
    tier.uses = 500
    tier.speed = 7
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:ingots/steel'
  })
})

//TWORZENIE BRONI
StartupEvents.registry('item', event => {

  //SPEAR
event.create('copper_spear', 'sword')
    .tier('copper')
    .displayName("Copper Spear")
    .attackDamageBaseline(3)
    .attackDamageBonus(1)
    .speedBaseline(-2.7)
    .texture('kubejs:item/copper_spear_held')

  //HAMMER
event.create('copper_hammer', 'sword')
    .tier('copper')
    .displayName("Copper Hammer")
    .attackDamageBaseline(6)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/copper_hammer')

event.create('steel_hammer', 'sword')
    .tier('steel')
    .displayName("Steel Hammer")
    .attackDamageBaseline(9)
    .attackDamageBonus(1)
    .speedBaseline(-3.5)
    .texture('kubejs:item/steel_hammer')

  //DAGGER
event.create('copper_dagger', 'sword')
    .tier('copper')
    .displayName("Copper Dagger")
    .attackDamageBaseline(1)
    .attackDamageBonus(1)
    .speedBaseline(-2.0)
    .texture('kubejs:item/copper_dagger')

event.create('steel_dagger', 'sword')
    .tier('steel')
    .displayName("Steel Dagger")
    .attackDamageBaseline(3)
    .attackDamageBonus(1)
    .speedBaseline(-2.0)
    .texture('kubejs:item/steel_dagger')

  //CLUB
event.create('copper_club', 'sword')
    .tier('copper')
    .displayName("Copper Club")
    .attackDamageBaseline(5)
    .attackDamageBonus(1)
    .speedBaseline(-3.0)
    .texture('kubejs:item/copper_club')

event.create('steel_club', 'sword')
    .tier('steel')
    .displayName("Steel Club")
    .attackDamageBaseline(7)
    .attackDamageBonus(1)
    .speedBaseline(-3.0)
    .texture('kubejs:item/steel_club')

  //QUARTERSTAFF
event.create('copper_quarterstaff', 'sword')
    .tier('copper')
    .displayName("Copper Quarterstaff")
    .attackDamageBaseline(1)
    .attackDamageBonus(1)
    .speedBaseline(-2.3)
    .texture('kubejs:item/copper_quarterstaff_held')

event.create('steel_quarterstaff', 'sword')
    .tier('steel')
    .displayName("steel Quarterstaff")
    .attackDamageBaseline(3)
    .attackDamageBonus(1)
    .speedBaseline(-2.3)
    .texture('kubejs:item/steel_quarterstaff_held')

  //KANABO
event.create('wooden_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Wooden Kanabo")
    .maxDamage(59)
    .attackDamageBaseline(5)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/wooden_kanabo')

event.create('golden_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Golden Kanabo")
    .maxDamage(32)
    .attackDamageBaseline(5)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/golden_kanabo')

event.create('stone_kanabo', 'sword')
    .maxStackSize(1)
    .maxDamage(131)
    .displayName("Stone Kanabo")
    .attackDamageBaseline(6)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/stone_kanabo')

event.create('copper_kanabo', 'sword')
    .tier('copper')
    .displayName("Copper Kanabo")
    .attackDamageBaseline(6)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/copper_kanabo')

event.create('silver_kanabo', 'sword')
    .tier('silver')
    .displayName("Silver Kanabo")
    .attackDamageBaseline(5)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/silver_kanabo')

event.create('iron_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Iron Kanabo")
    .maxDamage(250)
    .attackDamageBaseline(7)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/iron_kanabo')
    
event.create('steel_kanabo', 'sword')
    .tier('steel')
    .displayName("Steel Kanabo")
    .attackDamageBaseline(8)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/steel_kanabo')

event.create('diamond_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Diamond Kanabo")
    .maxDamage(1561)
    .attackDamageBaseline(8)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/diamond_kanabo')

event.create('electrum_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Electrum Kanabo")
    .maxDamage(1561)
    .attackDamageBaseline(9)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/electrum_kanabo')

event.create('netherite_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Netherite Kanabo")
    .maxDamage(2031)
    .attackDamageBaseline(9)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/netherite_kanabo')

event.create('necromium_kanabo', 'sword')
    .maxStackSize(1)
    .displayName("Necromium Kanabo")
    .maxDamage(2031)
    .attackDamageBaseline(9)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/necromium_kanabo')

})