ServerEvents.recipes(event => {
//KOWADŁA
event.remove({ output: 'overgeared:copper_smithing_hammer'})
event.remove({ output: 'overgeared:smithing_hammer'})
event.shaped(
        Item.of('overgeared:stone_anvil', 1), // Output
        [
            'BBB',
            ' C ',
            'CCC'
        ], 
        {
            B: '#caverns_and_chasms:cupric_fire_base_blocks',
            C: 'minecraft:copper_ingot'
        })
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 15,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "B": {
        "item": "minecraft:iron_block"
      },
      "L": {
        "item": "minecraft:chain"
      },
      "Z": {
        "item": "overgeared:stone_anvil"
      },
      "C": {
        "item": "overgeared:heated_iron_ingot"
      }
    },
    "pattern": [
      "BBB",
      "LZL",
      "CCC"
    ],
    "result": {
      "item": "overgeared:smithing_anvil"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "misc",
    "requires_blueprint": false,
    "hammering": 30,
    "has_quality": false,
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "Z": {
        "item": "overgeared:smithing_anvil"
      },
      "A": {
        "item": "minecraft:diamond_block"
      },
      "B": {
        "item": "minecraft:emerald_block"
      },
      "C": {
        "item": "spelunkery:cinnabar_block"
      },
      "D": {
        "item": "caverns_and_chasms:spinel_block"
      },
      "E": {
        "item": "minecraft:lapis_block"
      },
      "F": {
        "item": "caverns_and_chasms:amethyst_block"
      },
      "G": {
        "item": "seadwellers:aquamarine_block"
      },
      "H": {
        "item": "sullysmod:jade_block"
      }
    },
    "pattern": [
      "ABC",
      "DZH",
      "EFG"
    ],
    "result": {
      "item": "overgeared:tier_a_smithing_anvil"
    },
    "show_notification": true
  });

//Handle
event.shapeless(
    Item.of('spartanweaponry:simple_handle', 1),
    [
      '#forge:rods/wooden',
      'farmersdelight:straw'
    ])
event.shapeless(
    Item.of('spartanweaponry:simple_handle', 1),
    [
      '#forge:rods/wooden',
      'spelunkery:tangle_roots'
    ])
event.shapeless(
    Item.of('spartanweaponry:simple_handle', 9),
    [
      'farmersdelight:straw_bale',
      'quark:stick_block'
    ])
event.remove({ output: 'spartanweaponry:handle'})
event.shapeless(
    Item.of('spartanweaponry:handle', 1),
    [
      '#forge:rods/wooden',
      'minecraft:leather'
    ])
event.shapeless(
    Item.of('spartanweaponry:handle', 9),
    [
      'quark:bonded_leather',
      'quark:stick_block'
    ])
event.remove({ output: 'spartanweaponry:pole'})
event.shaped(
    Item.of('spartanweaponry:pole', 1), // Output
    [
        ' B ',
        ' L ',
        ' B '
    ], 
    {
        B: '#forge:rods/wooden',
        L: 'spartanweaponry:handle'
    }
)

//NARZĘDZIA
//Drewniane rzeczy
event.replaceInput(
  { output: 'basicweapons:wooden_hammer' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'simplest_hammers:wooden_hammer' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'minecraft:wooden_pickaxe' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'minecraft:wooden_axe' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'minecraft:wooden_shovel' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'minecraft:wooden_hoe' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.remove({ output: 'overgeared:wooden_tongs'})
event.shaped(
        Item.of('overgeared:wooden_tongs', 1), // Output
        [
            ' B ',
            'BCB',
            ' B '
        ], 
        {
            B: 'spartanweaponry:simple_handle',
            C: 'spartanweaponry:handle'
        })

//Kamienne rzeczy
event.remove({ output: 'basicweapons:stone_hammer'})
event.remove({ input: 'overgeared:stone_sword_blade' })
event.remove({ output: 'overgeared:stone_sword_blade' })
event.remove({ input: 'overgeared:stone_pickaxe_head' })
event.remove({ output: 'overgeared:stone_pickaxe_head' })
event.remove({ input: 'overgeared:stone_axe_head' })
event.remove({ output: 'overgeared:stone_axe_head' })
event.remove({ input: 'overgeared:stone_shovel_head' })
event.remove({ output: 'overgeared:stone_shovel_head' })
event.remove({ input: 'overgeared:stone_hoe_head' })
event.remove({ output: 'overgeared:stone_hoe_head' })
event.remove({ output: 'minecraft:stone_pickaxe' })
event.remove({ output: 'minecraft:stone_axe' })
event.remove({ output: 'minecraft:stone_shovel' })
event.remove({ output: 'minecraft:stone_hoe' })
event.remove({ output: 'minecraft:stone_sword' })
event.remove({ id: 'dungeonsdelight:flint_cleaver'})
event.remove({ output: 'simplest_hammers:stone_hammer' })
event.shaped(
        Item.of('minecraft:stone_pickaxe', 1), // Output
        [
            'FSF',
            ' H ',
            ' H '
        ], 
        {
            S: '#minecraft:stone_tool_materials',
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('minecraft:stone_axe', 1), // Output
        [
            'FS ',
            'FH ',
            ' H '
        ], 
        {
            S: '#minecraft:stone_tool_materials',
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('minecraft:stone_shovel', 1), // Output
        [
            ' F ',
            ' H ',
            ' H '
        ], 
        {
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('minecraft:stone_hoe', 1), // Output
        [
            'FS ',
            ' H ',
            ' H '
        ], 
        {
            S: '#minecraft:stone_tool_materials',
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('basicweapons:stone_hammer', 1), // Output
        [
            'SFS',
            'FHF',
            ' H '
        ], 
        {
            F: 'minecraft:flint',
            S: '#minecraft:stone_tool_materials',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('simplest_hammers:stone_hammer', 1), // Output
        [
            'SFS',
            'SHS',
            ' H '
        ], 
        {
            F: 'supplementaries:flint_block',
            S: '#minecraft:stone_tool_materials',
            H: 'spartanweaponry:simple_handle'
        })

//Miedziane rzeczy
event.remove({ input: 'overgeared:copper_sword_blade' })
event.remove({ output: 'overgeared:copper_sword_blade' })
event.remove({ input: 'overgeared:copper_pickaxe_head' })
event.remove({ output: 'overgeared:copper_pickaxe_head' })
event.remove({ input: 'overgeared:copper_axe_head' })
event.remove({ output: 'overgeared:copper_axe_head' })
event.remove({ input: 'overgeared:copper_shovel_head' })
event.remove({ output: 'overgeared:copper_shovel_head' })
event.remove({ input: 'overgeared:copper_hoe_head' })
event.remove({ output: 'overgeared:copper_hoe_head' })
event.remove({ id: 'minecraft:brush' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CCC",
      " H ",
      " H "
    ],
    "result": {
      "item": "overgeared:copper_pickaxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CC ",
      "CH ",
      " H "
    ],
    "result": {
      "item": "overgeared:copper_axe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " H "
    ],
    "result": {
      "item": "overgeared:copper_shovel"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CC ",
      " H ",
      " H "
    ],
    "result": {
      "item": "overgeared:copper_hoe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "kubejs:copper_hammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_copper_ingot"
      },
      "F": {
        "item": "minecraft:feather"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      " F ",
      " C ",
      " H "
    ],
    "result": {
      "item": "minecraft:brush"
    },
    "show_notification": true
  });

//Srebrne Rzeczy
event.remove({ id: 'galospheric_delight:silver_hammer_recipe'})
event.remove({ output: 'caverns_and_chasms:silver_pickaxe'})
event.remove({ output: 'caverns_and_chasms:silver_axe'})
event.remove({ output: 'caverns_and_chasms:silver_shovel'})
event.remove({ output: 'caverns_and_chasms:silver_hoe'})
event.remove({ id: 'abnormals_delight:silver_knife'})
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      "   "
    ],
    "result": {
      "item": "abnormals_delight:silver_knife"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CCC",
      " H ",
      " H "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_pickaxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CC ",
      "CH ",
      " H "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_axe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " H "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_shovel"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CC ",
      " H ",
      " H "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_hoe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:silver_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "galospheric_delight:silver_hammer"
    },
    "show_notification": true
  });

//Żelazne Rzeczy
event.remove({ output: 'basicweapons:iron_hammer'})
event.remove({ input: 'overgeared:iron_sword_blade' })
event.remove({ output: 'overgeared:iron_sword_blade' })
event.remove({ input: 'overgeared:iron_pickaxe_head' })
event.remove({ output: 'overgeared:iron_pickaxe_head' })
event.remove({ input: 'overgeared:iron_axe_head' })
event.remove({ output: 'overgeared:iron_axe_head' })
event.remove({ input: 'overgeared:iron_shovel_head' })
event.remove({ output: 'overgeared:iron_shovel_head' })
event.remove({ input: 'overgeared:iron_hoe_head' })
event.remove({ output: 'overgeared:iron_hoe_head' })
event.remove({ id: 'farmersdelight:iron_knife'})
event.remove({ id: 'dungeonsdelight:iron_cleaver'})
event.remove({ id: 'betterarcheology:iron_brush'})
event.remove({ output: 'simplest_hammers:iron_hammer' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      "   "
    ],
    "result": {
      "item": "farmersdelight:iron_knife"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CCC",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:iron_pickaxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CC ",
      "CH ",
      " H "
    ],
    "result": {
      "item": "minecraft:iron_axe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:iron_shovel"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CC ",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:iron_hoe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "basicweapons:iron_hammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "B": {
        "item": "minecraft:iron_block"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CBC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "simplest_hammers:iron_hammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "F": {
        "item": "minecraft:feather"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " F ",
      " C ",
      " H "
    ],
    "result": {
      "item": "betterarcheology:iron_brush"
    },
    "show_notification": true
  });

//Stalowe Rzeczy
event.remove({ input: 'overgeared:steel_sword_blade' })
event.remove({ output: 'overgeared:steel_sword_blade' })
event.remove({ input: 'overgeared:steel_pickaxe_head' })
event.remove({ output: 'overgeared:steel_pickaxe_head' })
event.remove({ input: 'overgeared:steel_axe_head' })
event.remove({ output: 'overgeared:steel_axe_head' })
event.remove({ input: 'overgeared:steel_shovel_head' })
event.remove({ output: 'overgeared:steel_shovel_head' })
event.remove({ input: 'overgeared:steel_hoe_head' })
event.remove({ output: 'overgeared:steel_hoe_head' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_steel_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CCC",
      " H ",
      " H "
    ],
    "result": {
      "item": "overgeared:steel_pickaxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_steel_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CC ",
      "CH ",
      " H "
    ],
    "result": {
      "item": "overgeared:steel_axe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_steel_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " H "
    ],
    "result": {
      "item": "overgeared:steel_shovel"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_steel_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CC ",
      " H ",
      " H "
    ],
    "result": {
      "item": "overgeared:steel_hoe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_steel_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "kubejs:steel_hammer"
    },
    "show_notification": true
  });

//Złote Rzeczy
event.remove({ output: 'basicweapons:golden_hammer'})
event.remove({ input: 'overgeared:golden_sword_blade' })
event.remove({ output: 'overgeared:golden_sword_blade' })
event.remove({ input: 'overgeared:golden_pickaxe_head' })
event.remove({ output: 'overgeared:golden_pickaxe_head' })
event.remove({ input: 'overgeared:golden_axe_head' })
event.remove({ output: 'overgeared:golden_axe_head' })
event.remove({ input: 'overgeared:golden_shovel_head' })
event.remove({ output: 'overgeared:golden_shovel_head' })
event.remove({ input: 'overgeared:golden_hoe_head' })
event.remove({ output: 'overgeared:golden_hoe_head' })
event.remove({ id: 'farmersdelight:golden_knife'})
event.remove({ id: 'dungeonsdelight:golden_cleaver'})
event.remove({ output: 'simplest_hammers:golden_hammer'})
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      "   "
    ],
    "result": {
      "item": "farmersdelight:golden_knife"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CCC",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:golden_pickaxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CC ",
      "CH ",
      " H "
    ],
    "result": {
      "item": "minecraft:golden_axe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:golden_shovel"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CC ",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:golden_hoe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "basicweapons:golden_hammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "item": "minecraft:gold_block"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      }
    },
    "pattern": [
      "CBC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "simplest_hammers:golden_hammer"
    },
    "show_notification": true
  });

//Diamentowe Rzeczy
event.remove({ output: 'basicweapons:diamond_hammer'})
event.remove({ id: 'farmersdelight:diamond_knife'})
event.remove({ id: 'dungeonsdelight:diamond_cleaver'})
event.remove({ id: 'betterarcheology:iron_brush'})
event.remove({ output: 'simplest_hammers:diamond_hammer'})
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      "   "
    ],
    "result": {
      "item": "farmersdelight:diamond_knife"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CCC",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:diamond_pickaxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CC ",
      "CH ",
      " H "
    ],
    "result": {
      "item": "minecraft:diamond_axe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:diamond_shovel"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CC ",
      " H ",
      " H "
    ],
    "result": {
      "item": "minecraft:diamond_hoe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "basicweapons:diamond_hammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "minecraft:diamond_block"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      "CBC",
      "CHC",
      " H "
    ],
    "result": {
      "item": "simplest_hammers:diamond_hammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "F": {
        "item": "minecraft:feather"
      },
      "H": {
        "item": "spartanweaponry:handle"
      }
    },
    "pattern": [
      " F ",
      " C ",
      " H "
    ],
    "result": {
      "item": "betterarcheology:diamond_brush"
    },
    "show_notification": true
  });

//Netherytowe rzeczy
event.remove({ id: 'dungeonsdelight:netherite_cleaver'})

//==========//

//Pochodnia
event.remove({ id: 'apotheosis:torch' })
event.shaped(
        Item.of('minecraft:torch', 1), // Output
        [
            ' B ',
            ' H ',
            '   '
        ], 
        {
            B: 'spelunkery:coal_lump',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('minecraft:torch', 1), // Output
        [
            ' B ',
            ' H ',
            '   '
        ], 
        {
            B: 'spelunkery:charcoal_lump',
            H: 'spartanweaponry:simple_handle'
        })

//Maszyny
event.remove({ output: 'create:mechanical_press' })
event.shaped(
        Item.of('create:mechanical_press', 1), // Output
        [
            ' S ',
            ' C ',
            'PIP'
        ], 
        {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            I: 'minecraft:iron_block',
            P: 'create:iron_sheet'
        })

//Wiadro (ZMIENIĆ PRZEPIS OVERGEARED NA ŻELAZNĄ PŁYTĘ)
event.remove({ output: 'minecraft:bucket' })
event.shaped(
        Item.of('minecraft:bucket', 1), // Output
        [
            '   ',
            'C C',
            ' C '
        ], 
        {
            C: 'create:iron_sheet'
        })

//Copper Cup
event.replaceInput(
  { output: 'miners_delight:copper_cup' },
  'minecraft:copper_ingot',
  'create:copper_sheet')

//Patelnia i Garnki
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "TOOLS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:heated_iron_ingot"
      },
      "S": {
        "item": "minecraft:brick"
      }
    },
    "pattern": [
      " CC",
      " CC",
      "S  "
    ],
    "result": {
      "item": "farmersdelight:skillet"
    },
    "show_notification": true
  });
event.replaceInput(
  { output: 'miners_delight:copper_pot' },
  'minecraft:copper_ingot',
  'create:copper_sheet')
event.replaceInput(
  { output: 'farmersdelight:cooking_pot' },
  'minecraft:iron_ingot',
  'create:iron_sheet')
event.replaceInput(
  { output: 'twilightdelight:fiery_cooking_pot' },
  'twilightforest:fiery_ingot',
  'vintage:fiery_sheet')

//Sznur i siatka
event.shaped(
    Item.of('spelunkery:rope_ladder', 8),
    [
      'A A',
      'BBB',
      'A A'
    ],
    {
      A: 'supplementaries:rope',
      B: 'minecraft:stick'
    });
event.shaped(
    Item.of('spelunkery:rope_ladder', 8),
    [
      'A A',
      'BBB',
      'A A'
    ],
    {
      A: 'farmersdelight:rope',
      B: 'minecraft:stick'
    });
event.shaped(
    Item.of('farmersdelight:safety_net', 1),
    [
      'AA',
      'AA'
    ],
    {
      A: 'supplementaries:rope'
    });

//Kosz Piknikowy
event.replaceInput(
  { output: 'supplementaries:lunch_basket' },
  '#minecraft:wool_carpets',
  'farmersdelight:basket')

//Sakiewka na nasiona
event.shaped(
    Item.of('quark:seed_pouch', 1),
    [
      " A ",
      "BCB",
      " B "
    ],
    {
      A: 'minecraft:string',
      B: 'farmersdelight:canvas',
      C: '#quark:seed_pouch_holdable'
    }
  );

//Sack
event.remove({ id: 'supplementaries:sack' })
event.shaped(
    Item.of('supplementaries:sack', 1),
    [
      'BAB',
      'B B',
      'BBB'
    ],
    {
      A: 'minecraft:string',
      B: 'farmersdelight:canvas'
    }
  );

//Bedrolle z Upgrade Aquatic
    event.remove({ input: 'upgrade_aquatic:bedroll' })
    event.remove({ output: 'upgrade_aquatic:bedroll' })

    event.remove({ id: 'irons_spellbooks:iron_spell_book' })
    event.shaped(
        Item.of('irons_spellbooks:iron_spell_book', 1), // Output
        [
            'CSS',
            'APP',
            'CSS'
        ], 
        {
            A: 'minecraft:anvil',
            C: 'minecraft:chain',
            S: 'born_in_chaos_v1:monster_skin',
            P: 'minecraft:paper'
        }
    ).id('dcx:heavy_ironbound_tome');

//Ulepszenie Magnesu[  
    event.shaped(
        Item.of('spelunkery:item_magnet', 1), // Output
        [
            'R L',
            'M M',
            'MMM'
        ], 
        {
            R: 'minecraft:redstone',
            L: 'minecraft:lapis_lazuli',
            M: 'spelunkery:raw_magnetite'
        }
    ).id('dcx:spelunkery_magnet');

//Plecaki
event.replaceInput(
  { output: 'sophisticatedbackpacks:backpack' },
  '#forge:chests/wooden',
  'supplementaries:sack')
event.remove({ id: 'sophisticatedbackpacks:copper_backpack' })
event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' })
event.remove({ id: 'sophisticatedbackpacks:iron_backpack' })
event.remove({ id: 'sophisticatedbackpacks:gold_backpack' })
event.remove({ id: 'sophisticatedbackpacks:diamond_backpack' })
event.remove({ id: 'sophisticatedbackpacks:netherite_backpack' })
event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        type: "sophisticatedcore:item_enabled",
        itemRegistryName:   "sophisticatedbackpacks:copper_backpack"
      }
    ],
    key: {
      B: {
        item: "sophisticatedbackpacks:backpack"
      },
      I: {
        item: "luckys_armory:smithing_template_leather_upgrade"
      },
      G: {
        item: "minecraft:copper_block"
      }
    },
    pattern: [
      "GIG",
      "GBG",
      "GGG"
    ],
    result: {
      "item": "sophisticatedbackpacks:copper_backpack"
    }
  })
event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        type: "sophisticatedcore:item_enabled",
        itemRegistryName:   "sophisticatedbackpacks:iron_backpack"
      }
    ],
    key: {
      B: {
        item: "sophisticatedbackpacks:backpack"
      },
      I: {
        item: "elwmety:iron_template"
      },
      G: {
        item: "minecraft:iron_block"
      }
    },
    pattern: [
      "GIG",
      "GBG",
      "GGG"
    ],
    result: {
      "item": "sophisticatedbackpacks:iron_backpack"
    }
  })
event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        type: "sophisticatedcore:item_enabled",
        itemRegistryName:   "sophisticatedbackpacks:iron_backpack"
      }
    ],
    key: {
      B: {
        item: "sophisticatedbackpacks:copper_backpack"
      },
      I: {
        item: "elwmety:iron_template"
      },
      G: {
        item: "minecraft:iron_block"
      },
      D: {
        item: "minecraft:iron_ingot"
      }
    },
    pattern: [
      "DID",
      "GBG",
      "DGD"
    ],
    result: {
      "item": "sophisticatedbackpacks:iron_backpack"
    }
  })
event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        type: "sophisticatedcore:item_enabled",
        itemRegistryName:   "sophisticatedbackpacks:gold_backpack"
      }
    ],
    key: {
      B: {
        item: "sophisticatedbackpacks:iron_backpack"
      },
      I: {
        item: "elwmety:gold_template"
      },
      G: {
        item: "minecraft:gold_block"
      }
    },
    pattern: [
      "GIG",
      "GBG",
      "GGG"
    ],
    result: {
      "item": "sophisticatedbackpacks:gold_backpack"
    }
  })
event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        type: "sophisticatedcore:item_enabled",
        itemRegistryName:   "sophisticatedbackpacks:diamond_backpack"
      }
    ],
    key: {
      B: {
        item: "sophisticatedbackpacks:gold_backpack"
      },
      I: {
        item: "elwmety:diamond_template"
      },
      G: {
        item: "minecraft:diamond_block"
      }
    },
    pattern: [
      "GIG",
      "GBG",
      "GGG"
    ],
    result: {
      "item": "sophisticatedbackpacks:diamond_backpack"
    }
  })
  event.smithing('sophisticatedbackpacks:netherite_backpack', 'minecraft:netherite_upgrade_smithing_template', 'sophisticatedbackpacks:diamond_backpack', 'minecraft:netherite_block')
    
    //Upgrady Plecaka
    event.remove({ id: 'sophisticatedbackpacks:magnet_upgrade' })
    event.shaped(
        Item.of('sophisticatedbackpacks:magnet_upgrade', 1), // Output
        [
            'PIP',
            'IUI',
            ' M '
        ], 
        {
            P: 'minecraft:ender_pearl',
            I: 'minecraft:iron_ingot',
            U: 'sophisticatedbackpacks:pickup_upgrade',
            M: 'spelunkery:item_magnet',
        }
    ).id('dcx:backpack_magnet_upgrade_spelunkery');
    
    event.shaped(
        Item.of('sophisticatedbackpacks:magnet_upgrade', 1), // Output
        [
            'PIP',
            'IUI',
            ' M '
        ], 
        {
            P: 'minecraft:ender_pearl',
            I: 'minecraft:iron_ingot',
            U: 'sophisticatedbackpacks:pickup_upgrade',
            M: 'artifacts:universal_attractor',
        }
    ).id('dcx:backpack_magnet_upgrade_artifacts');
    
    //Magazyn]
    event.remove({ id: 'sophisticatedstorage:magnet_upgrade' })
    event.shaped(
        Item.of('sophisticatedstorage:magnet_upgrade', 1), // Output
        [
            'PIP',
            'IUI',
            ' M '
        ], 
        {
            P: 'minecraft:ender_pearl',
            I: 'minecraft:iron_ingot',
            U: 'sophisticatedstorage:pickup_upgrade',
            M: 'spelunkery:item_magnet',
        }
    ).id('dcx:storage_magnet_upgrade_spelunkery');
    
    event.shaped(
        Item.of('sophisticatedstorage:magnet_upgrade', 1), // Output
        [
            'PIP',
            'IUI',
            ' M '
        ], 
        {
            P: 'minecraft:ender_pearl',
            I: 'minecraft:iron_ingot',
            U: 'sophisticatedstorage:pickup_upgrade',
            M: 'artifacts:universal_attractor',
        }
    ).id('dcx:storage_magnet_upgrade_artifacts');
    
    
    //[KOMPASY]
    //Kompas Natury
    event.remove({ id: 'naturescompass:natures_compass' })
    event.shaped(
        Item.of('naturescompass:naturescompass', 1), // Output
        [
            'SLS',
            'LKL',
            'SLS'
        ], 
        {
            S: '#minecraft:saplings',
            L: '#minecraft:logs',
            K: 'spelunkery:magnetic_compass',
        }
    ).id('dcx:natures_compass');
    //Wayward Compass
    event.remove({ id: 'irons_spellbooks:wayward_compass' })
    event.shaped(
        Item.of('irons_spellbooks:wayward_compass', 1), // Output
        [
            'SLS',
            'LKL',
            'SLS'
        ], 
        {
            S: 'irons_spellbooks:arcane_essence',
            L: 'minecraft:iron_ingot',
            K: 'minecraft:recovery_compass',
        }
    ).id('dcx:wayward_compass');

    //Sakwa
event.shaped(
    Item.of('minecraft:bundle', 1), // Output
    [
        'SRS',
        'RTR',
        'RRR'
    ], 
    {
        S: 'minecraft:string',
        R: 'minecraft:rabbit_hide',
        T: 'luckys_armory:smithing_template_leather_upgrade',
    }
).id('dcx:bundle');

})