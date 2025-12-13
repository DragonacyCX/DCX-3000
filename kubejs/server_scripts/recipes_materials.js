ServerEvents.recipes(event => {

    //Zamiana i kasowanie różnych przepisów
    event.remove({ id: 'create:haunting/lapis_recycling' })
    event.remove({ id: 'born_in_chaos_v1:bundleof_bones_l' })
    event.remove({ id: 'born_in_chaos_v1:bundleof_bones_k' })

//Węgiel
event.shapeless(
        Item.of('spelunkery:charcoal_lump', 6), // arg 1: output
        [
          'vintagedelight:ghost_charcoal'
        ])

//METALE
  //Miedź
event.replaceOutput(
  { output: 'overgeared:heated_copper_ingot' },
  'overgeared:heated_copper_ingot',
  'minecraft:copper_ingot')
event.remove({ id: 'overgeared:heated_copper_ingot_from_blasting_copper_ingot' })
event.remove({ id: 'overgeared:heated_copper_ingot_from_smelting_copper_ingot' })
event.smelting('overgeared:heated_copper_ingot', 'minecraft:copper_ingot', 0.0, 140)
event.blasting('overgeared:heated_copper_ingot', 'minecraft:copper_ingot', 0.0, 60)

event.remove({ id: 'overgeared:copper_plate' })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "create:copper_sheet"
    },
    "show_notification": true
  });
event.smelting('minecraft:copper_ingot', 'create:copper_sheet', 0.0, 200)
event.blasting('minecraft:copper_ingot', 'create:copper_sheet', 0.0, 100)

event.shaped(
    Item.of('minecraft:copper_ingot', 1), // Output
    [
        'BBB',
        'BBB',
        'BBB'
    ], 
    {
        B: 'create:copper_nugget'
    }
).id('dcx:copper_ingot_from_nuggets');
event.shapeless(
    Item.of('create:copper_nugget', 9), // arg 1: output
    [
      'minecraft:copper_ingot'
    ]
).id('dcx:copper_nuggets_from_ingot');

  //Srebro
event.remove({ id: 'overgeared:copper_plate' })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:silver_sheet"
    },
    "show_notification": true
  });
  event.smelting('oreganized:silver_ingot', 'vintage:silver_sheet', 0.0, 200)
  event.blasting('oreganized:silver_ingot', 'vintage:silver_sheet', 0.0, 100)

  //Cynk
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:zinc_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:zinc_sheet"
    },
    "show_notification": true
  });
  event.smelting('create:zinc_ingot', 'vintage:zinc_sheet', 0.0, 200)
  event.blasting('create:zinc_ingot', 'vintage:zinc_sheet', 0.0, 100)

  //Stop Andezytu
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:andesite_alloy"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:andesite_sheet"
    },
    "show_notification": true
  });
  event.smelting('create:andesite_alloy', 'vintage:andesite_sheet', 0.0, 200)
  event.blasting('create:andesite_alloy', 'vintage:andesite_sheet', 0.0, 100)

  //Żelazo
event.replaceOutput(
  { output: 'overgeared:heated_iron_ingot' },
  'overgeared:heated_iron_ingot',
  'minecraft:iron_ingot')
event.remove({ id: 'overgeared:heated_iron_ingot_from_blasting_iron_ingot' })
event.blasting('overgeared:heated_iron_ingot', 'minecraft:iron_ingot', 0.0, 100)
event.remove({ id: 'overgeared:iron_plate' })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "create:iron_sheet"
    },
    "show_notification": true
  });
  event.smelting('minecraft:iron_ingot', 'create:iron_sheet', 0.0, 200)
  event.blasting('minecraft:iron_ingot', 'create:iron_sheet', 0.0, 100)

  //Mroczne Żelazo (Dark Iron)
event.remove({ id: 'graveyard:dark_iron_ingot' })
event.shaped(
    Item.of('graveyard:dark_iron_ingot', 1), // Output
    [
        ' C ',
        'CBC',
        ' C '
    ], 
    {
        B: 'minecraft:iron_ingot',
        C: 'graveyard:corruption'
    })

  //Ołów
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:lead_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:lead_sheet"
    },
    "show_notification": true
  });
  event.smelting('oreganized:lead_ingot', 'vintage:lead_sheet', 0.0, 200)
  event.blasting('oreganized:lead_ingot', 'vintage:lead_sheet', 0.0, 100)

  //Stal
event.remove({ id: 'overgeared:crude_steel' })
event.remove({ id: 'overgeared:heated_steel_ingot' })
event.recipes.create.mixing('overgeared:crude_steel', ['4x minecraft:iron_ingot', 'minecraft:coal']).heated()
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_crude_steel"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "overgeared:steel_ingot"
    },
    "show_notification": true
  });
event.remove({ id: 'overgeared:steel_plate' })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_steel_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "overgeared:steel_plate"
    },
    "show_notification": true
  });
  event.smelting('overgeared:steel_ingot', 'overgeared:steel_plate', 0.0, 200)
  event.blasting('overgeared:steel_ingot', 'overgeared:steel_plate', 0.0, 100)

  //Czarna Stal (Black Steel)
event.recipes.create.mixing('cataclysm:black_steel_ingot', ['4x graveyard:dark_iron_ingot', 'minecraft:coal']).heated()

  //Mosiądz
event.smelting('create:brass_ingot', 'create:brass_sheet', 0.0, 200)
event.blasting('create:brass_ingot', 'create:brass_sheet', 0.0, 100)

  //Złoto
event.remove({ id: 'overgeared:steel_plate' })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "create:golden_sheet"
    },
    "show_notification": true
  });
  event.smelting('minecraft:gold_ingot', 'create:golden_sheet', 0.0, 200)
  event.blasting('minecraft:gold_ingot', 'create:golden_sheet', 0.0, 100)

  //Netherite i Necromium
event.remove({ id: 'minecraft:netherite_ingot' })
event.remove({ id: 'caverns_and_chasms:necromium_ingot' })
event.remove({ id: 'st_gsoc:crafting/necromium_ingot' })
event.recipes.create.mixing('minecraft:netherite_ingot', ['4x minecraft:netherite_scrap', '4x minecraft:gold_ingot']).superheated()
event.recipes.create.mixing('caverns_and_chasms:necromium_ingot', ['4x minecraft:netherite_scrap', '4x oreganized:silver_ingot']).superheated()
event.smelting('minecraft:netherite_ingot', 'vintage:netherite_sheet', 0.0, 200)
event.blasting('minecraft:netherite_ingot', 'vintage:netherite_sheet', 0.0, 100)

  //Arcane Ingot
event.replaceInput(
  { output: 'irons_spellbooks:arcane_ingot' },
  '#irons_spellbooks:arcane_ingot_base',
  'oreganized:silver_ingot')

  //Living Flesh
event.remove({ id: 'caverns_and_chasms:living_flesh' })
event.recipes.create.mixing('2x ', ['2x #dungeonsdelight:fleshes', 'irons_spellbooks:blood_vial', '2x oreganized:silver_ingot', '2x minecraft:ghast_tear'])
  
  //Platinum Sheet
event.remove({ id: 'illagerinvasion:platinum_sheet' })
event.shaped(
    Item.of('illagerinvasion:platinum_sheet', 1), // Output
    [
        'BBB',
        'BBB',
        'BBB'
    ], 
    {
        B: 'illagerinvasion:platinum_chunk'
    }
).id('dcx:platinum_sheet');

//Ironwood
event.shaped(
    Item.of('twilightforest:raw_ironwood', 8), // Output
    [
        'BBB',
        'BTB',
        'BBB'
    ], 
    {
        B: '#biomeswevegone:ironwood_logs',
        T: 'twilightforest:transformation_powder'
    })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "twilightforest:ironwood_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:ironwood_sheet"
    },
    "show_notification": true
  });
  event.smelting('twilightforest:ironwood_ingot', 'vintage:ironwood_sheet', 0.0, 200)
  event.blasting('twilightforest:ironwood_ingot', 'vintage:ironwood_sheet', 0.0, 100)

  //Knightmetal
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "twilightforest:knightmetal_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:knightmetal_sheet"
    },
    "show_notification": true
  });
event.smelting('twilightforest:knightmetal_ingot', 'vintage:knightmetal_sheet', 0.0, 200)
event.blasting('twilightforest:knightmetal_ingot', 'vintage:knightmetal_sheet', 0.0, 100)

  //Firemetal
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 5,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "twilightforest:fiery_ingot"
      }
    },
    "pattern": [
      "C  ",
      "   ",
      "   "
    ],
    "result": {
      "item": "vintage:fiery_sheet"
    },
    "show_notification": true
  });
event.smelting('twilightforest:fiery_ingot', 'vintage:fiery_sheet', 0.0, 200)
event.blasting('twilightforest:fiery_ingot', 'vintage:fiery_sheet', 0.0, 100)

//Polerowanie Kamieni Szlachetnych (Rough Gems)
event.remove({ id: 'st_gsoc:sandpaper_polishing/spinel' })
event.remove({ id: 'spelunkery:sandpaper_polishing/cinnabar' })
event.remove({ id: 'spelunkery:sandpaper_polishing/diamond' })
event.remove({ id: 'spelunkery:sandpaper_polishing/emerald' })
event.remove({ id: 'spelunkery:sandpaper_polishing/lapis' })
event.recipes.create.sandpaper_polishing('spelunkery:cinnabar', 'kubejs:rough_cinnabar')
event.recipes.create.sandpaper_polishing('minecraft:redstone', 'spelunkery:cinnabar')
event.recipes.create.sandpaper_polishing('minecraft:diamond', 'kubejs:rough_diamond')
event.recipes.create.sandpaper_polishing('minecraft:lapis_lazuli', 'kubejs:rough_lazurite')
event.recipes.create.sandpaper_polishing('caverns_and_chasms:spinel', 'kubejs:rough_spinel')
event.recipes.create.sandpaper_polishing('minecraft:emerald', 'kubejs:rough_emerald')
event.recipes.create.sandpaper_polishing('sullysmod:jade', 'kubejs:rough_jade')
event.replaceOutput(
  { output: 'spelunkery:rough_cinnabar' },
  'spelunkery:rough_cinnabar',
  'kubejs:rough_cinnabar')
event.replaceInput(
  { input: 'spelunkery:rough_cinnabar' },
  'spelunkery:rough_cinnabar',
  'kubejs:rough_cinnabar')

event.replaceOutput(
  { output: 'spelunkery:rough_diamond' },
  'spelunkery:rough_diamond',
  'kubejs:rough_diamond')
event.replaceInput(
  { input: 'spelunkery:rough_diamond' },
  'spelunkery:rough_diamond',
  'kubejs:rough_diamond')

event.replaceOutput(
  { output: 'spelunkery:rough_lazurite' },
  'spelunkery:rough_lazurite',
  'kubejs:rough_lazurite')
event.replaceInput(
  { input: 'spelunkery:rough_lazurite' },
  'spelunkery:rough_lazurite',
  'kubejs:rough_lazurite')

event.replaceOutput(
  { output: 'spelunkery:rough_emerald' },
  'spelunkery:rough_emerald',
  'kubejs:rough_emerald')
event.replaceInput(
  { input: 'spelunkery:rough_emerald' },
  'spelunkery:rough_emerald',
  'kubejs:rough_emerald')

event.replaceOutput(
  { output: 'st_gsoc:rough_spinel' },
  'st_gsoc:rough_spinel',
  'kubejs:rough_spinel')
event.replaceInput(
  { input: 'st_gsoc:rough_spinel' },
  'st_gsoc:rough_spinel',
  'kubejs:rough_spinel')

event.replaceOutput(
  { output: 'sullysmod:rough_jade' },
  'sullysmod:rough_jade',
  'kubejs:rough_jade')
event.replaceInput(
  { input: 'sullysmod:rough_jade' },
  'sullysmod:rough_jade',
  'kubejs:rough_jade')

//Płótno
event.remove({ id: 'farmersdelight:canvas' })
event.shaped(
    Item.of('farmersdelight:canvas', 1),
    [
        'BC ',
        'CB ',
        '   '
    ], 
    {
        B: 'supplementaries:flax',
        C: 'farmersdelight:straw'
    })
event.shaped(
    Item.of('farmersdelight:canvas', 9),
    [
        'BC ',
        'CB ',
        '   '
    ], 
    {
        B: 'supplementaries:flax_block',
        C: 'farmersdelight:straw_bale'
    })

//WARRIORS OF PAST EPOCH
//Forgotten Steel na Dark Metal
event.replaceInput(
  { input: 'warriorsofpastepoch:forgotten_steel_ingot' }, // Arg 1: the filter
  'warriorsofpastepoch:forgotten_steel_ingot',            // Arg 2: the item to replace
  'overgeared:steel_ingot')        // Arg 3: the item to replace it with
event.replaceInput(
  { input: 'warriorsofpastepoch:forgotten_steel_nugget' },
  'warriorsofpastepoch:forgotten_steel_nugget',
  'overgeared:steel_nugget')
event.remove({ output: 'warriorsofpastepoch:block_of_forgotten_steel' })
event.remove({ output: 'warriorsofpastepoch:forgotten_steel_ingot' })
event.remove({ output: 'warriorsofpastepoch:forgotten_steel_nugget' })
event.remove({ output: 'warriorsofpastepoch:forgotten_steel' })
//Azure Fabric
event.remove({ id: 'warriorsofpastepoch:azure_fabric_craft' })
event.shaped(
    Item.of('warriorsofpastepoch:azure_fabric', 4), // Output
    [
        ' TT',
        'TTL',
        'LLL'
    ], 
    {
        T: 'majruszsdifficulty:cloth',
        L: 'minecraft:lapis_lazuli'})
//Sterile Tissue
event.remove({ id: 'warriorsofpastepoch:sterile_tissue_craft' })
event.shaped(
    Item.of('warriorsofpastepoch:sterile_tissue', 4), // Output
    [
        ' TT',
        'TTL',
        'LLL'
    ], 
    {
        T: 'majruszsdifficulty:cloth',
        L: 'minecraft:coal'})
//Thickened Skin
event.shaped(
    Item.of('warriorsofpastepoch:thickened_skin', 3), // Output
    [
        'NNN',
        'LLL',
        '   '
    ], 
    {
        N: 'overgeared:steel_nugget',
        L: 'born_in_chaos_v1:monster_skin'})

//Leather Scraps
event.shapeless(
    Item.of('dolt_mod_how:leather_scraps', 2), // Output
    [
        'minecraft:leather'
       ], 
)
//dolt_mod_how:leather_scraps!

//Polimer
event.replaceInput(
  { output: 'alexscaves:polymer_plate' },
  'minecraft:iron_ingot',
  'vintage:lead_sheet')

//Blok Kości
    event.shaped(
        Item.of('born_in_chaos_v1:bundle_of_bones', 1), // Output
        [
            'BBB',
            'BBB',
            'BBB'
        ], 
        {
            B: 'minecraft:bone'
        }
    ).id('custom:bundleofbones_block');

    event.shapeless(
        Item.of('minecraft:bone', 9), // arg 1: output
        [
          'born_in_chaos_v1:bundle_of_bones'
        ])

    //Arcane Cloth
event.remove({ id: 'irons_spellbooks:magic_cloth' })
event.shaped(
    Item.of('irons_spellbooks:magic_cloth', 1), // Output
    [
        'AAA',
        'ACA',
        'AAA'
    ], 
    {
        A: 'irons_spellbooks:arcane_essence',
        C: 'majruszsdifficulty:cloth'
    }
).id('dcx:crafting_arcane_cloth');
        
    //TEMPLEJTY (TEMPLATE kopiowanie)
    event.remove({ id: 'elwmety:iron_template_recipe' })
    event.remove({ id: 'elwmety:gold_template_recipe' })
    event.remove({ id: 'elwmety:diamond_template_recipe' })
    event.remove({ id: 'elwmety:netherite_template_recipe' })
    
    //Leather
    event.shaped(
        Item.of('luckys_armory:smithing_template_leather_upgrade', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'skyarena:oak_trophy',
            Y: 'luckys_armory:smithing_template_leather_upgrade',
            B: 'quark:stick_block'
        })

        event.shaped(
        Item.of('luckys_armory:smithing_template_leather_upgrade', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'skyarena:stone_trophy',
            Y: 'luckys_armory:smithing_template_leather_upgrade',
            B: 'minecraft:stone'
        })

    //Iron
    event.shaped(
        Item.of('elwmety:iron_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'luckys_armory:smithing_template_leather_upgrade',
            Y: 'elwmety:iron_template',
            B: 'minecraft:iron_block'
        }
    ).id('custom:irontemplate');

    event.shaped(
        Item.of('elwmety:iron_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'skyarena:iron_trophy',
            Y: 'elwmety:iron_template',
            B: 'minecraft:iron_block'
        })

    //Gold
    event.shaped(
        Item.of('elwmety:gold_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'elwmety:iron_template',
            Y: 'elwmety:gold_template',
            B: 'minecraft:gold_block'
        }
    ).id('custom:goldtemplate');

    event.shaped(
        Item.of('elwmety:gold_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'skyarena:gold_trophy',
            Y: 'elwmety:gold_template',
            B: 'minecraft:gold_block'
        })

    //Diamond
    event.shaped(
        Item.of('elwmety:diamond_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'elwmety:gold_template',
            Y: 'elwmety:diamond_template',
            B: 'minecraft:diamond_block'
        }
    ).id('custom:diamondtemplate');

    event.shaped(
        Item.of('elwmety:diamond_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'skyarena:diamond_trophy',
            Y: 'elwmety:diamond_template',
            B: 'minecraft:diamond_block'
        })

    //Netherite
    event.shaped(
        Item.of('elwmety:netherite_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'elwmety:diamond_template',
            Y: 'elwmety:netherite_template',
            B: 'minecraft:netherite_block'
        }
    ).id('custom:netheritetemplate');

    event.shaped(
        Item.of('elwmety:netherite_template', 2), // Output
        [
            'TYT',
            'TBT',
            'TTT'
        ], 
        {
            T: 'skyarena:netherite_trophy',
            Y: 'elwmety:netherite_template',
            B: 'minecraft:netherite_block'
        })

    //XP Tome i zbiornik
    event.remove({ id: 'xpbook:xp_tome' })
    event.shaped(
        Item.of('xpbook:xp_tome', 1), // Output
        [
            'PFP',
            'CBC',
            'PDP'
        ], 
        {
            P: 'minecraft:ender_pearl',
            F: 'spelunkery:nephrite_fountain',
            D: 'spelunkery:nephrite_diode',
            C: 'spelunkery:carved_nephrite',
            B: 'minecraft:book',
        }
    ).id('custom:xptome');

    event.remove({ id: 'sophisticatedbackpacks:tank_upgrade' })
    event.shaped(
        Item.of('sophisticatedbackpacks:tank_upgrade', 1), // Output
        [
            'GXG',
            'GUG',
            'GBG'
        ], 
        {
            X: 'xpbook:xp_tome',
            G: '#forge:glass',
            U: 'sophisticatedbackpacks:upgrade_base',
            B: 'minecraft:bucket',
        }
    ).id('custom:tank');

//END REMASTERED
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
		"eterna": 25,
		"quanta": 20,
		"arcana": 35
	},
	"max_requirements": {
		"eterna": 30,
		"quanta": 50,
		"arcana": -1
	},
	"result": {
		"item": "endrem:cryptic_eye",
		"count": 1
	}
})

})