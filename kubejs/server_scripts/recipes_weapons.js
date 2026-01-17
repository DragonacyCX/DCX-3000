ServerEvents.recipes(event => {
//DYSTANSOWE BRONIE
event.remove({ output: 'minecraft:bow'})
event.remove({ id: 'spartanweaponry:copper_longbow'})
event.remove({ id: 'spartanweaponry:iron_longbow'})
event.remove({ id: 'spartanweaponry:golden_longbow'})
event.remove({ id: 'spartanweaponry:diamond_longbow'})
event.remove({ id: 'spartanweaponry:steel_longbow'})
event.remove({ id: 'spartanweaponry:silver_longbow'})
event.remove({ id: 'spartanweaponry:electrum_longbow'})
event.remove({ id: 'spartanweaponry:platinum_longbow'})

event.remove({ id: 'spartanweaponry:copper_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:iron_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:golden_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:diamond_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:steel_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:silver_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:electrum_heavy_crossbow'})
event.remove({ id: 'spartanweaponry:platinum_heavy_crossbow'})

  //Drewniane Rzeczy
event.shaped(
        Item.of('minecraft:bow', 1), // Output
        [
            ' SN',
            'H N',
            ' SN'
        ], 
        {
            S: 'minecraft:stick',
            H: 'spartanweaponry:simple_handle',
            N: '#bookshelf:strings'
        })
event.replaceInput(
  { output: 'spartanweaponry:wooden_longbow' },
  'spartanweaponry:handle',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'spartanweaponry:wooden_heavy_crossbow' },
  'spartanweaponry:handle',
  'spartanweaponry:simple_handle')

  //Miedziane rzeczy
event.remove({ id: 'minecraft:copper_sword' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
        "item": "spartanweaponry:handle"
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:copper_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
        "item": "spartanweaponry:handle"
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:copper_heavy_crossbow"
    },
    "show_notification": true
  });

  //Srebrne Rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
        "item": "spartanweaponry:handle"
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:silver_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
        "item": "spartanweaponry:handle"
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:silver_heavy_crossbow"
    },
    "show_notification": true
  });

  //Złote Rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
        "item": "spartanweaponry:handle"
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:golden_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
        "item": "spartanweaponry:handle"
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:golden_heavy_crossbow"
    },
    "show_notification": true
  });

  //Żelazne rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:iron_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:iron_heavy_crossbow"
    },
    "show_notification": true
  });

  //Stalowe rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:steel_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:steel_heavy_crossbow"
    },
    "show_notification": true
  });

  //Diamentowe rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:diamond_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
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
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:diamond_heavy_crossbow"
    },
    "show_notification": true
  });

  //Electrumowe rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:electrum_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "#bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:electrum_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:electrum_ingot"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:electrum_heavy_crossbow"
    },
    "show_notification": true
  });

  //Platynowe rzeczy
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "illagerinvasion:platinum_sheet"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "P": {
        "tag": "forge:rods/wooden"
      },
      "S": {
        "tag": "bookshelf:strings"
      }
    },
    "pattern": [
      "HPC",
      "P S",
      "CSS"
    ],
    "result": {
      "item": "spartanweaponry:platinum_longbow"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "RANGED",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "illagerinvasion:platinum_sheet"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "B": {
        "item": "minecraft:bow"
      },
      "P": {
        "tag": "minecraft:planks"
      },
      "T": {
        "item": "minecraft:tripwire_hook"
      }
    },
    "pattern": [
      "CBC",
      "PTP",
      " H "
    ],
    "result": {
      "item": "spartanweaponry:platinum_heavy_crossbow"
    },
    "show_notification": true
  });

//STANDARDOWE BRONIE
  //Drewniane rzeczy
event.replaceInput(
  { output: 'minecraft:wooden_sword' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'basicweapons:wooden_club' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'basicweapons:wooden_quarterstaff' },
  'minecraft:stick',
  'spartanweaponry:simple_pole')
event.shaped(
        Item.of('basicweapons:wooden_spear', 1), // Output
        [
            ' F ',
            ' H ',
            ' P '
        ], 
        {
            F: '#minecraft:planks',
            H: 'spartanweaponry:simple_handle',
            P: 'spartanweaponry:simple_pole'
        })

//Kamienne rzeczy
event.remove({ output: 'minecraft:stone_sword'})
event.remove({ output: 'basicweapons:stone_dagger'})
event.remove({ output: 'basicweapons:stone_club'})
event.remove({ output: 'basicweapons:stone_quarterstaff'})
event.remove({ output: 'basicweapons:stone_spear'})
event.shaped(
        Item.of('minecraft:stone_sword', 1), // Output
        [
            ' F ',
            ' F ',
            ' H '
        ], 
        {
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('basicweapons:stone_dagger', 1), // Output
        [
            '  F',
            ' H ',
            '   '
        ], 
        {
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('basicweapons:stone_club', 1), // Output
        [
            '  S',
            ' F ',
            ' H '
        ], 
        {
            F: 'minecraft:flint',
            S: '#minecraft:stone_tool_materials',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('basicweapons:stone_club', 1), // Output
        [
            'S  ',
            ' F ',
            ' H '
        ], 
        {
            F: 'minecraft:flint',
            S: '#minecraft:stone_tool_materials',
            H: 'spartanweaponry:simple_handle'
        })
event.shaped(
        Item.of('basicweapons:stone_quarterstaff', 1), // Output
        [
            '  H',
            ' F ',
            'H  '
        ], 
        {
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_pole'
        })
event.shaped(
        Item.of('basicweapons:stone_spear', 1), // Output
        [
            ' F ',
            ' H ',
            ' P '
        ], 
        {
            F: 'minecraft:flint',
            H: 'spartanweaponry:simple_handle',
            P: 'spartanweaponry:simple_pole'
        })

//Miedziane Rzeczy
    //Basic
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " P "
    ],
    "result": {
      "item": "kubejs:copper_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      " C ",
      " H "
    ],
    "result": {
      "item": "overgeared:copper_sword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "   "
    ],
    "result": {
      "item": "kubejs:copper_dagger"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      " H "
    ],
    "result": {
      "item": "kubejs:copper_club"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      "  P",
      " C ",
      "P  "
    ],
    "result": {
      "item": "kubejs:copper_quarterstaff"
    },
    "show_notification": true
  });

//Srebrne Rzeczy
event.remove({ output: 'caverns_and_chasms:silver_sword' })
event.remove({ output: 'integrated_simply_swords:silver/longsword' })
event.remove({ output: 'integrated_simply_swords:silver/twinblade' })
event.remove({ output: 'integrated_simply_swords:silver/rapier' })
event.remove({ output: 'integrated_simply_swords:silver/katana' })
event.remove({ output: 'integrated_simply_swords:silver/sai' })
event.remove({ output: 'integrated_simply_swords:silver/spear' })
event.remove({ output: 'integrated_simply_swords:silver/glaive' })
event.remove({ output: 'integrated_simply_swords:silver/warglaive' })
event.remove({ output: 'integrated_simply_swords:silver/cutlass' })
event.remove({ output: 'integrated_simply_swords:silver/claymore' })
event.remove({ output: 'integrated_simply_swords:silver/greataxe' })
event.remove({ output: 'integrated_simply_swords:silver/chakram' })
event.remove({ output: 'integrated_simply_swords:silver/scythe' })
event.remove({ output: 'integrated_simply_swords:silver/halberd' })
event.remove({ output: 'integrated_simply_swords:silver/greathammer' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      " C ",
      " H "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_sword"
    },
    "show_notification": true
  });
  //Simply
    //LIGHTWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      "NCN",
      "C C",
      "NHN"
    ],
    "result": {
      "item": "integrated_simply_swords:silver/chakram"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      " N ",
      "CC ",
      "H  "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/cutlass"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      " C ",
      "  C"
    ],
    "result": {
      "item": "integrated_simply_swords:silver/longsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      "   "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/sai"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      "H  "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/rapier"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " P "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      "   ",
      " N ",
      "CHC"
    ],
    "result": {
      "item": "integrated_simply_swords:silver/warglaive"
    },
    "show_notification": true
  });
    //HEAVYWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      " NC",
      "NCN",
      "HN "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/claymore"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      "  C",
      " PC",
      "P  "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/glaive"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NHN",
      " P "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/greataxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NNN",
      " P "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/greathammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      " CN",
      "CPC",
      "P  "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/halberd"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "   ",
      "HCC",
      "   "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      },
      "N": {
        "item": "oreganized:silver_nugget"
      }
    },
    "pattern": [
      "CCH",
      "CP ",
      "P  "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/scythe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      "  C",
      " P ",
      "C  "
    ],
    "result": {
      "item": "integrated_simply_swords:silver/twinblade"
    },
    "show_notification": true
  });

//Żelazne Rzeczy
event.remove({ output: 'basicweapons:iron_dagger' })
event.remove({ output: 'basicweapons:iron_club' })
event.remove({ output: 'basicweapons:iron_quarterstaff' })
event.remove({ output: 'simplyswords:iron_chakram' })
event.remove({ output: 'simplyswords:iron_cutlass' })
event.remove({ output: 'simplymore:iron_deer_horns' })
event.remove({ output: 'simplymore:iron_khopesh' })
event.remove({ output: 'simplymore:iron_lance' })
event.remove({ output: 'simplyswords:iron_longsword' })
event.remove({ output: 'simplymore:iron_pernach' })
event.remove({ output: 'simplymore:iron_quarterstaff' })
event.remove({ output: 'simplyswords:iron_rapier' })
event.remove({ output: 'simplyswords:iron_sai' })
event.remove({ output: 'simplyswords:iron_spear' })
event.remove({ output: 'simplyswords:iron_warglaive' })
event.remove({ output: 'simplyswords:iron_claymore' })
event.remove({ output: 'simplyswords:iron_glaive' })
event.remove({ output: 'simplymore:iron_grandsword' })
event.remove({ output: 'simplymore:iron_great_katana' })
event.remove({ output: 'simplymore:iron_great_spear' })
event.remove({ output: 'simplyswords:iron_greataxe' })
event.remove({ output: 'simplyswords:iron_greathammer' })
event.remove({ output: 'simplyswords:iron_halberd' })
event.remove({ output: 'simplyswords:iron_katana' })
event.remove({ output: 'simplyswords:iron_scythe' })
event.remove({ output: 'simplyswords:iron_twinblade' })

event.remove({ output: 'simplyswords:iron_backhand_blade' })
event.remove({ output: 'simplyswords:iron_dagger' })

    //Basic
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      " C ",
      " H "
    ],
    "result": {
      "item": "minecraft:iron_sword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "C  ",
      " H ",
      "   "
    ],
    "result": {
      "item": "basicweapons:iron_dagger"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      " H "
    ],
    "result": {
      "item": "basicweapons:iron_club"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  P",
      " C ",
      "P  "
    ],
    "result": {
      "item": "basicweapons:iron_quarterstaff"
    },
    "show_notification": true
  });
  //Simply
    //LIGHTWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "NCN",
      "C C",
      "NHN"
    ],
    "result": {
      "item": "simplyswords:iron_chakram"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      " N ",
      "CC ",
      "H  "
    ],
    "result": {
      "item": "simplyswords:iron_cutlass"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "CN ",
      "NHN",
      " NC"
    ],
    "result": {
      "item": "simplymore:iron_deer_horns"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "  C",
      " CN",
      "NH "
    ],
    "result": {
      "item": "simplymore:iron_khopesh"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      " CN",
      "CNC",
      "HC "
    ],
    "result": {
      "item": "simplymore:iron_lance"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      " C ",
      "  C"
    ],
    "result": {
      "item": "simplyswords:iron_longsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "NCN",
      "NHN",
      " H "
    ],
    "result": {
      "item": "simplymore:iron_pernach"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      " C ",
      " P ",
      " C "
    ],
    "result": {
      "item": "simplymore:iron_quarterstaff"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      "H  "
    ],
    "result": {
      "item": "simplyswords:iron_rapier"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      "   "
    ],
    "result": {
      "item": "simplyswords:iron_sai"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " P "
    ],
    "result": {
      "item": "simplyswords:iron_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "   ",
      " N ",
      "CHC"
    ],
    "result": {
      "item": "simplyswords:iron_warglaive"
    },
    "show_notification": true
  });
    //HEAVYWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      " NC",
      "NCN",
      "HN "
    ],
    "result": {
      "item": "simplyswords:iron_claymore"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  C",
      " PC",
      "P  "
    ],
    "result": {
      "item": "simplyswords:iron_glaive"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "S": {
        "item": "minecraft:iron_sword"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "NCN",
      "CCC",
      "CSC"
    ],
    "result": {
      "item": "simplymore:iron_grandsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "   ",
      " NC",
      "PCC"
    ],
    "result": {
      "item": "simplymore:iron_great_katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      " CC",
      " PC",
      "P  "
    ],
    "result": {
      "item": "simplymore:iron_great_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NHN",
      " P "
    ],
    "result": {
      "item": "simplyswords:iron_greataxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NNN",
      " P "
    ],
    "result": {
      "item": "simplyswords:iron_greathammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      " CN",
      "CPC",
      "P  "
    ],
    "result": {
      "item": "simplyswords:iron_halberd"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "   ",
      "HCC",
      "   "
    ],
    "result": {
      "item": "simplyswords:iron_katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "N": {
        "item": "minecraft:iron_nugget"
      }
    },
    "pattern": [
      "CCH",
      "CP ",
      "P  "
    ],
    "result": {
      "item": "simplyswords:iron_scythe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  C",
      " P ",
      "C  "
    ],
    "result": {
      "item": "simplyswords:iron_twinblade"
    },
    "show_notification": true
  });

  //Stalowe rzeczy
event.remove({ input: 'overgeared:steel_sword_blade' })
event.remove({ output: 'overgeared:steel_sword_blade' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      " C ",
      " H "
    ],
    "result": {
      "item": "overgeared:steel_sword"
    },
    "show_notification": true
  });
  //Basic
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "C  ",
      " H ",
      "   "
    ],
    "result": {
      "item": "kubejs:steel_dagger"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      " H "
    ],
    "result": {
      "item": "kubejs:steel_club"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  P",
      " C ",
      "P  "
    ],
    "result": {
      "item": "kubejs:steel_quarterstaff"
    },
    "show_notification": true
  });
  //Simply
    //LIGHTWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      "NCN",
      "C C",
      "NHN"
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/chakram"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      " N ",
      "CC ",
      "H  "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/cutlass"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      " C ",
      "  C"
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/longsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      "H  "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/rapier"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      "   "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/sai"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " P "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      "   ",
      " N ",
      "CHC"
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/warglaive"
    },
    "show_notification": true
  });
    //HEAVYWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      " NC",
      "NCN",
      "HN "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/claymore"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  C",
      " PC",
      "P  "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/glaive"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NHN",
      " P "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/greataxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NNN",
      " P "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/greathammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      " CN",
      "CPC",
      "P  "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/halberd"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "   ",
      "HCC",
      "   "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "N": {
        "item": "overgeared:steel_nugget"
      }
    },
    "pattern": [
      "CCH",
      "CP ",
      "P  "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/scythe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  C",
      " P ",
      "C  "
    ],
    "result": {
      "item": "integrated_simply_swords:born_in_chaos/dark_metal/twinblade"
    },
    "show_notification": true
  });

  //Złote Rzeczy
event.remove({ output: 'basicweapons:golden_dagger' })
event.remove({ output: 'basicweapons:golden_club' })
event.remove({ output: 'basicweapons:golden_quarterstaff' })
event.remove({ output: 'simplyswords:gold_chakram' })
event.remove({ output: 'simplyswords:gold_cutlass' })
event.remove({ output: 'simplymore:gold_deer_horns' })
event.remove({ output: 'simplymore:gold_khopesh' })
event.remove({ output: 'simplymore:gold_lance' })
event.remove({ output: 'simplyswords:gold_longsword' })
event.remove({ output: 'simplymore:gold_pernach' })
event.remove({ output: 'simplymore:gold_quarterstaff' })
event.remove({ output: 'simplyswords:gold_rapier' })
event.remove({ output: 'simplyswords:gold_sai' })
event.remove({ output: 'simplyswords:gold_spear' })
event.remove({ output: 'simplyswords:gold_warglaive' })
event.remove({ output: 'simplyswords:gold_claymore' })
event.remove({ output: 'simplyswords:gold_glaive' })
event.remove({ output: 'simplymore:gold_grandsword' })
event.remove({ output: 'simplymore:gold_great_katana' })
event.remove({ output: 'simplymore:gold_great_spear' })
event.remove({ output: 'simplyswords:gold_greataxe' })
event.remove({ output: 'simplyswords:gold_greathammer' })
event.remove({ output: 'simplyswords:gold_halberd' })
event.remove({ output: 'simplyswords:gold_katana' })
event.remove({ output: 'simplyswords:gold_scythe' })
event.remove({ output: 'simplyswords:gold_twinblade' })

event.remove({ output: 'simplyswords:gold_backhand_blade' })
event.remove({ output: 'simplyswords:gold_dagger' })

  //Basic
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      " C ",
      " H "
    ],
    "result": {
      "item": "minecraft:golden_sword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "C  ",
      " H ",
      "   "
    ],
    "result": {
      "item": "basicweapons:golden_dagger"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      " H "
    ],
    "result": {
      "item": "basicweapons:golden_club"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      "  P",
      " C ",
      "P  "
    ],
    "result": {
      "item": "basicweapons:golden_quarterstaff"
    },
    "show_notification": true
  });
  //Simply
    //LIGHTWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "NCN",
      "C C",
      "NHN"
    ],
    "result": {
      "item": "simplyswords:gold_chakram"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      " N ",
      "CC ",
      "H  "
    ],
    "result": {
      "item": "simplyswords:gold_cutlass"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "CN ",
      "NHN",
      " NC"
    ],
    "result": {
      "item": "simplymore:gold_deer_horns"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "  C",
      " CN",
      "NH "
    ],
    "result": {
      "item": "simplymore:gold_khopesh"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      " CN",
      "CNC",
      "HC "
    ],
    "result": {
      "item": "simplymore:gold_lance"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      " C ",
      "  C"
    ],
    "result": {
      "item": "simplyswords:gold_longsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "NCN",
      "NHN",
      " H "
    ],
    "result": {
      "item": "simplymore:gold_pernach"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      " C ",
      " P ",
      " C "
    ],
    "result": {
      "item": "simplymore:gold_quarterstaff"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      "H  "
    ],
    "result": {
      "item": "simplyswords:gold_rapier"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      "   "
    ],
    "result": {
      "item": "simplyswords:gold_sai"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " P "
    ],
    "result": {
      "item": "simplyswords:gold_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "   ",
      " N ",
      "CHC"
    ],
    "result": {
      "item": "simplyswords:gold_warglaive"
    },
    "show_notification": true
  });
    //HEAVYWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      " NC",
      "NCN",
      "HN "
    ],
    "result": {
      "item": "simplyswords:gold_claymore"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      "  C",
      " PC",
      "P  "
    ],
    "result": {
      "item": "simplyswords:gold_glaive"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "S": {
        "item": "minecraft:golden_sword"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "NCN",
      "CCC",
      "CSC"
    ],
    "result": {
      "item": "simplymore:gold_grandsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "   ",
      " NC",
      "PCC"
    ],
    "result": {
      "item": "simplymore:gold_great_katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      " CC",
      " PC",
      "P  "
    ],
    "result": {
      "item": "simplymore:gold_great_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NHN",
      " P "
    ],
    "result": {
      "item": "simplyswords:gold_greataxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "CCC",
      "NNN",
      " P "
    ],
    "result": {
      "item": "simplyswords:gold_greathammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      " CN",
      "CPC",
      "P  "
    ],
    "result": {
      "item": "simplyswords:gold_halberd"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "   ",
      "HCC",
      "   "
    ],
    "result": {
      "item": "simplyswords:gold_katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      },
      "H": {
        "item": "spartanweaponry:simple_handle"
      },
      "N": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "CCH",
      "CP ",
      "P  "
    ],
    "result": {
      "item": "simplyswords:gold_scythe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:simple_pole"
      }
    },
    "pattern": [
      "  C",
      " P ",
      "C  "
    ],
    "result": {
      "item": "simplyswords:gold_twinblade"
    },
    "show_notification": true
  });

//Diamentowe Rzeczy
event.remove({ output: 'basicweapons:diamond_dagger' })
event.remove({ output: 'basicweapons:diamond_club' })
event.remove({ output: 'basicweapons:diamond_quarterstaff' })
event.remove({ output: 'simplyswords:diamond_chakram' })
event.remove({ output: 'simplyswords:diamond_cutlass' })
event.remove({ output: 'simplymore:diamond_deer_horns' })
event.remove({ output: 'simplymore:diamond_khopesh' })
event.remove({ output: 'simplymore:diamond_lance' })
event.remove({ output: 'simplyswords:diamond_longsword' })
event.remove({ output: 'simplymore:diamond_pernach' })
event.remove({ output: 'simplymore:diamond_quarterstaff' })
event.remove({ output: 'simplyswords:diamond_rapier' })
event.remove({ output: 'simplyswords:diamond_sai' })
event.remove({ output: 'simplyswords:diamond_spear' })
event.remove({ output: 'simplyswords:diamond_warglaive' })
event.remove({ output: 'simplyswords:diamond_claymore' })
event.remove({ output: 'simplyswords:diamond_glaive' })
event.remove({ output: 'simplymore:diamond_grandsword' })
event.remove({ output: 'simplymore:diamond_great_katana' })
event.remove({ output: 'simplymore:diamond_great_spear' })
event.remove({ output: 'simplyswords:diamond_greataxe' })
event.remove({ output: 'simplyswords:diamond_greathammer' })
event.remove({ output: 'simplyswords:diamond_halberd' })
event.remove({ output: 'simplyswords:diamond_katana' })
event.remove({ output: 'simplyswords:diamond_scythe' })
event.remove({ output: 'simplyswords:diamond_twinblade' })

event.remove({ output: 'simplyswords:diamond_backhand_blade' })
event.remove({ output: 'simplyswords:diamond_dagger' })

    //Basic
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      " C ",
      " H "
    ],
    "result": {
      "item": "minecraft:diamond_sword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "C  ",
      " H ",
      "   "
    ],
    "result": {
      "item": "basicweapons:diamond_dagger"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      " H "
    ],
    "result": {
      "item": "basicweapons:diamond_club"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  P",
      " C ",
      "P  "
    ],
    "result": {
      "item": "basicweapons:diamond_quarterstaff"
    },
    "show_notification": true
  });
  //Simply
    //LIGHTWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "NCN",
      "C C",
      "NHN"
    ],
    "result": {
      "item": "simplyswords:diamond_chakram"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      " N ",
      "CC ",
      "H  "
    ],
    "result": {
      "item": "simplyswords:diamond_cutlass"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "CN ",
      "NHN",
      " NC"
    ],
    "result": {
      "item": "simplymore:diamond_deer_horns"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "  C",
      " CN",
      "NH "
    ],
    "result": {
      "item": "simplymore:diamond_khopesh"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      " CN",
      "CNC",
      "HC "
    ],
    "result": {
      "item": "simplymore:diamond_lance"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      " C ",
      "  C"
    ],
    "result": {
      "item": "simplyswords:diamond_longsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "NCN",
      "NHN",
      " H "
    ],
    "result": {
      "item": "simplymore:diamond_pernach"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      " C ",
      " P ",
      " C "
    ],
    "result": {
      "item": "simplymore:diamond_quarterstaff"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "  C",
      " C ",
      "H  "
    ],
    "result": {
      "item": "simplyswords:diamond_rapier"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      "H  ",
      "   "
    ],
    "result": {
      "item": "simplyswords:diamond_sai"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      " C ",
      " H ",
      " P "
    ],
    "result": {
      "item": "simplyswords:diamond_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "   ",
      " N ",
      "CHC"
    ],
    "result": {
      "item": "simplyswords:diamond_warglaive"
    },
    "show_notification": true
  });
    //HEAVYWEAPONS
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      " NC",
      "NCN",
      "HN "
    ],
    "result": {
      "item": "simplyswords:diamond_claymore"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  C",
      " PC",
      "P  "
    ],
    "result": {
      "item": "simplyswords:diamond_glaive"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "S": {
        "item": "minecraft:diamonden_sword"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "NCN",
      "CCC",
      "CSC"
    ],
    "result": {
      "item": "simplymore:diamond_grandsword"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "   ",
      " NC",
      "PCC"
    ],
    "result": {
      "item": "simplymore:diamond_great_katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      " CC",
      " PC",
      "P  "
    ],
    "result": {
      "item": "simplymore:diamond_great_spear"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "CCC",
      "NHN",
      " P "
    ],
    "result": {
      "item": "simplyswords:diamond_greataxe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "CCC",
      "NNN",
      " P "
    ],
    "result": {
      "item": "simplyswords:diamond_greathammer"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      " CN",
      "CPC",
      "P  "
    ],
    "result": {
      "item": "simplyswords:diamond_halberd"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "   ",
      "HCC",
      "   "
    ],
    "result": {
      "item": "simplyswords:diamond_katana"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      },
      "H": {
        "item": "spartanweaponry:handle"
      },
      "N": {
        "item": "spelunkery:diamond_shard"
      }
    },
    "pattern": [
      "CCH",
      "CP ",
      "P  "
    ],
    "result": {
      "item": "simplyswords:diamond_scythe"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "HEAVYWEAPONS",
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
      "P": {
        "item": "spartanweaponry:pole"
      }
    },
    "pattern": [
      "  C",
      " P ",
      "C  "
    ],
    "result": {
      "item": "simplyswords:diamond_twinblade"
    },
    "show_notification": true
  });

//Netherytowe rzeczy
event.remove({ output: 'simplyswords:netherite_backhand_blade' })
event.remove({ output: 'simplyswords:netherite_dagger' })

//Runiczne rzeczy
event.remove({ output: 'simplyswords:runic_backhand_blade' })
event.remove({ output: 'simplyswords:runic_dagger' })

//Knaves' Needs
event.remove({ id: 'blue_skies:cherry_wood/longsword'})
event.remove({ id: 'blue_skies:cherry_wood/twinblade'})
event.remove({ id: 'blue_skies:cherry_wood/rapier'})
event.remove({ id: 'blue_skies:cherry_wood/katana'})
event.remove({ id: 'blue_skies:cherry_wood/sai'})
event.remove({ id: 'blue_skies:cherry_wood/spear'})
event.remove({ id: 'blue_skies:cherry_wood/glaive'})
event.remove({ id: 'blue_skies:cherry_wood/warglaive'})
event.remove({ id: 'blue_skies:cherry_wood/cutlass'})
event.remove({ id: 'blue_skies:cherry_wood/claymore'})
event.remove({ id: 'blue_skies:cherry_wood/greathammer'})
event.remove({ id: 'blue_skies:cherry_wood/greataxe'})
event.remove({ id: 'blue_skies:cherry_wood/chakram'})
event.remove({ id: 'blue_skies:cherry_wood/scythe'})
event.remove({ id: 'blue_skies:cherry_wood/halberd'})

event.remove({ id: 'blue_skies:frostbright_wood/longsword'})
event.remove({ id: 'blue_skies:frostbright_wood/twinblade'})
event.remove({ id: 'blue_skies:frostbright_wood/rapier'})
event.remove({ id: 'blue_skies:frostbright_wood/katana'})
event.remove({ id: 'blue_skies:frostbright_wood/sai'})
event.remove({ id: 'blue_skies:frostbright_wood/spear'})
event.remove({ id: 'blue_skies:frostbright_wood/glaive'})
event.remove({ id: 'blue_skies:frostbright_wood/warglaive'})
event.remove({ id: 'blue_skies:frostbright_wood/cutlass'})
event.remove({ id: 'blue_skies:frostbright_wood/claymore'})
event.remove({ id: 'blue_skies:frostbright_wood/greathammer'})
event.remove({ id: 'blue_skies:frostbright_wood/greataxe'})
event.remove({ id: 'blue_skies:frostbright_wood/chakram'})
event.remove({ id: 'blue_skies:frostbright_wood/scythe'})
event.remove({ id: 'blue_skies:frostbright_wood/halberd'})

//Born in Chaos
event.remove({ output: 'born_in_chaos_v1:shell_mace'})
event.remove({ output: 'born_in_chaos_v1:darkwarblade'})
event.remove({ output: 'born_in_chaos_v1:skullbreaker_hammer'})
event.remove({ output: 'born_in_chaos_v1:great_reaper_axe'})
event.remove({ output: 'born_in_chaos_v1:sharpened_dark_metal_sword'})
event.remove({ output: 'born_in_chaos_v1:spiritual_sword'})
event.remove({ output: 'born_in_chaos_v1:nightmare_scythe'})
event.remove({ output: 'born_in_chaos_v1:spider_bite_sword'})
event.remove({ output: 'born_in_chaos_v1:frostbitten_blade'})
event.remove({ output: 'born_in_chaos_v1:soul_cutlass'})
event.remove({ output: 'born_in_chaos_v1:dark_ritual_dagger'})
event.remove({ output: 'born_in_chaos_v1:intoxicating_dagger'})

  // Shell Mace (iron, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "iron",
  "key": {
    "a": { "item": "born_in_chaos_v1:spiny_shell" },
    "b": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " aa",
    " ba",
    "b  "
  ],
  "result": { "item": "born_in_chaos_v1:shell_mace" },
  "show_notification": true
})

  // Darkwarblade (above_a, heavyweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["HEAVYWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:dark_metal_block" },
    "b": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " a ",
    " a ",
    " b "
  ],
  "result": { "item": "born_in_chaos_v1:darkwarblade" },
  "show_notification": true
})

  // Skullbreaker Hammer (above_a, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:dark_metal_block" },
    "b": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " a ",
    " b ",
    " b "
  ],
  "result": { "item": "born_in_chaos_v1:skullbreaker_hammer" },
  "show_notification": true
})

  // Great Reaper Axe (above_a, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "b": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    "aaa",
    "ab ",
    " b "
  ],
  "result": { "item": "born_in_chaos_v1:great_reaper_axe" },
  "show_notification": true
})

  // Sharpened Dark Metal Sword (above_a, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "b": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " a ",
    " a ",
    " b "
  ],
  "result": { "item": "born_in_chaos_v1:sharpened_dark_metal_sword" },
  "show_notification": true
})

  // Spiritual Sword (iron, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:seedof_chaos" },
    "b": { "item": "born_in_chaos_v1:dark_metal_nugget" },
    "c": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " a ",
    "bab",
    " c "
  ],
  "result": { "item": "born_in_chaos_v1:spiritual_sword" },
  "show_notification": true
})

  // Nightmare Scythe (above_a, heavyweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["HEAVYWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:nightmare_claw" },
    "b": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "c": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    "aab",
    "  c",
    " c "
  ],
  "result": { "item": "born_in_chaos_v1:nightmare_scythe" },
  "show_notification": true
})

  // Spider Bite Sword (above_a, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:spider_mandible" },
    "b": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "c": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    "aba",
    "aba",
    " c "
  ],
  "result": { "item": "born_in_chaos_v1:spider_bite_sword" },
  "show_notification": true
})

  // Frostbitten Blade (above_a, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:permafrost_shard" },
    "b": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "c": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " aa",
    "aba",
    "ca "
  ],
  "result": { "item": "born_in_chaos_v1:frostbitten_blade" },
  "show_notification": true
})

  // Soul Cutlass (above_a, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:nightmare_claw" },
    "b": { "item": "born_in_chaos_v1:dark_metal_nugget" },
    "c": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "d": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " ab",
    "ac ",
    " d "
  ],
  "result": { "item": "born_in_chaos_v1:soul_cutlass" },
  "show_notification": true
})

  // Dark Ritual Dagger (iron, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:nightmare_claw" },
    "b": { "item": "born_in_chaos_v1:dark_metal_nugget" },
    "c": { "item": "born_in_chaos_v1:seedof_chaos" },
    "d": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    " a ",
    "bcb",
    " d "
  ],
  "result": { "item": "born_in_chaos_v1:dark_ritual_dagger" },
  "show_notification": true
})

  // Intoxicating Dagger (iron, lightweapon)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "b": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "c": { "item": "born_in_chaos_v1:intoxicating_decoction" },
    "d": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "pattern": [
    "cc ",
    "cb ",
    " d "
  ],
  "result": { "item": "born_in_chaos_v1:intoxicating_dagger" },
  "show_notification": true
})

//Warriors of the Past Epoch
  // Musketeer Rapier
event.remove({ id: 'warriorsofpastepoch:musketeer_rapier_craft' })
event.custom({
  "type": "overgeared:forging",
  "tier": "above_a",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_polishing": false,
  "pattern": [
    " MF",
    "NM ",
    "NH "
  ],
  "key": {
    "M": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "N": { "item": "born_in_chaos_v1:dark_metal_nugget" },
    "F": { "item": "born_in_chaos_v1:fangofthe_hound_leader" },
    "H": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "result": { 
    "item": "warriorsofpastepoch:musketeer_rapier"
  },
  "show_notification": true
})

  // Bayonet
event.remove({ id: 'warriorsofpastepoch:bayonet_knife_craft' })
event.custom({
  "type": "overgeared:forging",
  "tier": "above_a",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_polishing": false,
  "pattern": [
    " G ",
    " M ",
    " H "
  ],
  "key": {
    "M": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "G": { "item": "born_in_chaos_v1:bloody_gadfly_eye" },
    "H": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "result": { 
    "item": "warriorsofpastepoch:bayonet_knife"
  },
  "show_notification": true
})

  // Surgical Saw
event.remove({ id: 'warriorsofpastepoch:surgical_saw_craft' })
event.custom({
  "type": "overgeared:forging",
  "tier": "above_a",
  "blueprint": ["LIGHTWEAPONS"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_polishing": false,
  "pattern": [
    "FNM",
    "FNM",
    "  H"
  ],
  "key": {
    "M": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "N": { "item": "born_in_chaos_v1:dark_metal_nugget" },
    "F": { "item": "born_in_chaos_v1:fangofthe_hound_leader" },
    "H": { "item": "born_in_chaos_v1:bone_handle" }
  },
  "result": { 
    "item": "warriorsofpastepoch:surgical_saw"
  },
  "show_notification": true
})

//===========/

//Kościany sztylet (Bone Dagger)
event.remove({ id: 'graveyard:bone_dagger'})
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "LIGHTWEAPONS",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "irons_spellbooks:frozen_bone"
      },
      "P": {
        "item": "born_in_chaos_v1:bone_handle"
      }
    },
    "pattern": [
      "  C",
      " C ",
      "P  "
    ],
    "result": {
      "item": "graveyard:bone_dagger"
    },
    "show_notification": true
  });

//Magiczne Berła
event.remove({ id: 'irons_spellbooks:artificer_cane'})
event.shaped(
    Item.of('irons_spellbooks:artificer_cane', 1), // Output
    [
        ' AK',
        ' PI',
        'PI '
    ], 
    {
        A: 'minecraft:amethyst_shard',
        K: 'supplementaries:hourglass',
        P: 'mynethersdelight:powder_cannon',
        I: 'minecraft:gold_ingot',
    })

//Unifikacja noży
event.remove({ id: 'aquaculture:diamond_fillet_knife'})
event.remove({ id: 'aquaculture:stone_fillet_knife'})
event.remove({ id: 'aquaculture:gold_fillet_knife'})
event.remove({ id: 'aquaculture:iron_fillet_knife'})
event.remove({ id: 'aquaculture:neptunium_fillet_knife'})
event.remove({ id: 'aquaculture:wooden_fillet_knife'})

//Trident
//Trójząb
event.remove({ id: 'bettertridents:trident'})
event.remove({ id: 'seadwellers:trident_repair'})
event.remove({ id: 'upgrade_aquatic:trident'})
event.remove({ id: 'apotheosis:inert_trident'})
   event.shaped(
    Item.of('apotheosis:inert_trident', 1), // Output
    [
        'AZZ',
        'GFZ',
        'RSN'
    ], 
    {
        Z: 'upgrade_aquatic:thrasher_tooth',
        N: 'minecraft:nautilus_shell',
        F: 'born_in_chaos_v1:trident_hayfork',
        R: 'upgrade_aquatic:prismarine_rod',
        S: 'minecraft:heart_of_the_sea',
        A: 'seadwellers:aquamarine_crystal',
        G: 'minecraft:gold_ingot'
    }
).id('dcx:fork_to_trident');
   event.shaped(
    Item.of('apotheosis:inert_trident', 1), // Output
    [
        'AZZ',
        'GFZ',
        'RSN'
    ], 
    {
        Z: 'upgrade_aquatic:thrasher_tooth',
        N: 'minecraft:nautilus_shell',
        F: 'seadwellers:broken_trident',
        R: 'upgrade_aquatic:prismarine_rod',
        S: 'minecraft:heart_of_the_sea',
        A: 'seadwellers:aquamarine_crystal',
        G: 'minecraft:gold_ingot'
    }
).id('dcx:brokentrident_to_trident');



})