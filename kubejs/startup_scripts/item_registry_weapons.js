//MIEDZIANY TIER
ItemEvents.toolTierRegistry(event => {
  event.add('copper', tier => {
    tier.uses = 3191
    tier.speed = 5
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 13
    tier.repairIngredient = 'minecraft:copper_block'
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

//MIEDZIANE BRONIE
StartupEvents.registry('item', event => {
event.create('copper_hammer', 'sword')
    .tier('copper')
    .displayName("Copper Hammer")
    .attackDamageBaseline(6)
    .attackDamageBonus(1)
    .speedBaseline(-3.3)
    .texture('kubejs:item/copper_hammer')

event.create('copper_dagger', 'sword')
    .tier('copper')
    .displayName("Copper Dagger")
    .attackDamageBaseline(1)
    .attackDamageBonus(1)
    .speedBaseline(-2.0)
    .texture('kubejs:item/copper_dagger')

event.create('copper_club', 'sword')
    .tier('copper')
    .displayName("Copper Club")
    .attackDamageBaseline(5)
    .attackDamageBonus(1)
    .speedBaseline(-3.0)
    .texture('kubejs:item/copper_club')

event.create('copper_spear', 'sword')
    .tier('copper')
    .displayName("Copper Spear")
    .attackDamageBaseline(3)
    .attackDamageBonus(1)
    .speedBaseline(-2.7)
    .texture('kubejs:item/copper_spear_held')

event.create('copper_quarterstaff', 'sword')
    .tier('copper')
    .displayName("Copper Quarterstaff")
    .attackDamageBaseline(1)
    .attackDamageBonus(1)
    .speedBaseline(-2.3)
    .texture('kubejs:item/copper_quarterstaff_held')

//STALOWE BRONIE
event.create('steel_hammer', 'sword')
    .maxStackSize(1)
    .displayName("Steel Hammer")
    .maxDamage(500)
    .attackDamageBaseline(9)
    .attackDamageBonus(1)
    .speedBaseline(-3.5)
    .texture('kubejs:item/steel_hammer')

event.create('steel_dagger', 'sword')
    .maxStackSize(1)
    .displayName("Steel Dagger")
    .maxDamage(500)
    .attackDamageBaseline(3)
    .attackDamageBonus(1)
    .speedBaseline(-2.0)
    .texture('kubejs:item/steel_dagger')

event.create('steel_club', 'sword')
    .maxStackSize(1)
    .displayName("Steel Club")
    .maxDamage(500)
    .attackDamageBaseline(7)
    .attackDamageBonus(1)
    .speedBaseline(-3.0)
    .texture('kubejs:item/steel_club')

event.create('steel_quarterstaff', 'sword')
    .maxStackSize(1)
    .displayName("steel Quarterstaff")
    .maxDamage(500)
    .attackDamageBaseline(3)
    .attackDamageBonus(1)
    .speedBaseline(-2.3)
    .texture('kubejs:item/steel_quarterstaff_held')

})