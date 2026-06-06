ServerEvents.recipes(event => {
//Apotheosis rozdymka
event.remove({ id: 'apotheosis:pufferfish' })

//Chleb
event.remove({ id: 'quark:tweaks/crafting/utility/bent/bread' })
event.remove({ id: 'vintagedelight:oat_bread' })
event.remove({ id: 'minecraft:bread' })

//Ciasto pszenne
event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
event.remove({ id: 'create_central_kitchen:crafting/dough_1' })
event.remove({ id: 'create_central_kitchen:crafting/dough_2' })
event.remove({ id: 'create_central_kitchen:crafting/dough_3' })
event.remove({ id: 'create_central_kitchen:crafting/dough_4' })
event.shapeless(Item.of('farmersdelight:wheat_dough', 3), [
  '3x #forge:flour',
  'minecraft:water_bucket'
]).replaceIngredient('minecraft:water_bucket', 'minecraft:water_bucket')
event.shapeless(Item.of('farmersdelight:wheat_dough', 3), [
  '3x minecraft:wheat',
  'minecraft:water_bucket'
]).replaceIngredient('minecraft:water_bucket', 'minecraft:water_bucket')
event.remove({ id: 'vintagedelight:oat_dough_from_water' })
event.shapeless(Item.of('vintagedelight:oat_dough', 3), [
  '3x vintagedelight:raw_oats',
  'minecraft:water_bucket'
]).replaceIngredient('minecraft:water_bucket', 'minecraft:water_bucket')

//Gotowane jajko
event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 0.0,
    "ingredients": [
      {
        "item": "minecraft:egg"
      }
    ],
    "recipe_book_tab": "misc",
    "result": {
      "item": "mynethersdelight:boiled_egg",
      "count": 1
    }
  });

//Karmelowa papryka
  event.shapeless(
    Item.of('born_in_chaos_v1:caramel_pepper', 1), // Output
    [
        'alexscaves:caramel',
        'vintagedelight:ghost_pepper'
       ], 
).id('dcx:caramelpepper');

//Kasowanie Wildberry
event.remove({ id: 'cosmopolitan:wildberries_basket' })

//Duplikaty Basketów
event.remove({ id: 'quark:potato_crate' })
event.remove({ id: 'quark:carrot_crate' })
event.remove({ id: 'quark:beetroot_crate' })
event.remove({ id: 'fruitsdelight:apple_crate' })

//Unifikacja batwingów
event.replaceInput(
  { input: 'miners_delight:bat_wing' }, // Arg 1: the filter
  'miners_delight:bat_wing',            // Arg 2: the item to replace
  'warriorsofpastepoch:batwing')        // Arg 3: the item to replace it with

//Unifikacja maggotów
event.replaceInput(
  { input: 'born_in_chaos_v1:corpse_maggot' }, // Arg 1: the filter
  'born_in_chaos_v1:corpse_maggot',            // Arg 2: the item to replace
  'alexsmobs:maggot'         // Arg 3: the item to replace it with
)
// event.shapeless(
//     Item.of('alexsdelight:maggot_salad', 1), // Output
//     [
//         'farmersdelight:mixed_salad',
//         'born_in_chaos_v1:fried_maggot'])

//Ser w ser pleśniowy
event.custom({
  "type": "vintagedelight:fermenting",
  "processingTime": 6000,
  "ingredients": [
    {"item": "#brewinandchewin:cheese_wedges"},
    {"item": "alexsmobs:maggot"},
    {"tag": "forge:mushrooms"},
    {"tag": "forge:mushrooms"}
  ],
  "output": {
    "count": 1,
    "item": "warriorsofpastepoch:moldy_cheese"
  }
})

//Unifikacja Sera
event.remove({ id: 'vintagedelight:cheese_wheel_from_slices' })
event.remove({ id: 'vintagedelight:cutting/cheese_wheel_from_cutting' })
event.remove({ id: 'vintagedelight:cheese_mold' })
event.remove({ id: 'vintagedelight:cooking/cheese_curds' })
event.remove({ id: 'brewinandchewin:fermenting/flaxen_cheese_from_milk' })
event.custom({
"type": "brewinandchewin:fermenting",
  "basefluid": {
    "count": 1000,
    "fluid": "minecraft:milk"
  },
  "experience": 1.0,
  "fermentingtime": 9600,
  "ingredients": [
    {
      "item": "minecraft:brown_mushroom"
    },
    {
      "item": "minecraft:pumpkin_seeds"
    },
    {
      "item": "vintagedelight:salt_dust"
    },
    {
      "item": "vintagedelight:vinegar_bottle"
    }
  ],
  "recipe_book_tab": "meals",
  "result": {
    "count": 1000,
    "fluid": "brewinandchewin:flaxen_cheese"
  },
  "temperature": 4
})
event.remove({ id: 'brewinandchewin:fermenting/scarlet_cheese_from_milk' })
event.custom({
"type": "brewinandchewin:fermenting",
  "basefluid": {
    "count": 1000,
    "fluid": "minecraft:milk"
  },
  "experience": 1.0,
  "fermentingtime": 9600,
  "ingredients": [
    {
      "item": "minecraft:crimson_fungus"
    },
    {
      "item": "minecraft:nether_wart"
    },
    {
      "item": "vintagedelight:salt_dust"
    },
    {
      "item": "vintagedelight:vinegar_bottle"
    }
  ],
  "recipe_book_tab": "meals",
  "result": {
    "count": 1000,
    "fluid": "brewinandchewin:scarlet_cheese"
  },
  "temperature": 5
})

//Unifikacja mięty
 event.replaceInput(
  { input: 'neapolitan:mint_leaves' },
  'neapolitan:mint_leaves',
  '#forge:mint')
event.replaceInput(
  { input: 'born_in_chaos_v1:river_mint' },
  'born_in_chaos_v1:river_mint',
  '#forge:mint')

//Coconut husk w miskę
event.remove({ input: 'ecologics:coconut_husk' })
event.shapeless(
    Item.of('minecraft:bowl', 1),
    ['ecologics:coconut_husk'],)

});