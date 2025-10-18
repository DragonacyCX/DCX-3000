ServerEvents.recipes(event => {

//TARCZE
  //Drewniane rzeczy
event.replaceInput(
  { output: 'spartanshields:wooden_basic_shield' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')
event.replaceInput(
  { output: 'spartanshields:wooden_tower_shield' },
  'minecraft:stick',
  'spartanweaponry:simple_handle')

  //Miedziane rzeczy
event.remove({ output: 'spartanshields:copper_basic_shield' })
event.remove({ output: 'spartanshields:copper_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:copper_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:copper_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:copper_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:copper_tower_shield"
    },
    "show_notification": true
  });

  //Srebrne rzeczy
event.remove({ output: 'spartanshields:silver_basic_shield' })
event.remove({ output: 'spartanshields:silver_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:silver_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:silver_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:silver_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:silver_tower_shield"
    },
    "show_notification": true
  });

  //Żelazne rzeczy
event.remove({ output: 'spartanshields:iron_basic_shield' })
event.remove({ output: 'spartanshields:iron_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:iron_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:iron_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:iron_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:iron_tower_shield"
    },
    "show_notification": true
  });

  //Złote rzeczy
event.remove({ output: 'spartanshields:golden_basic_shield' })
event.remove({ output: 'spartanshields:golden_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:golden_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:golden_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:golden_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:golden_tower_shield"
    },
    "show_notification": true
  });

  //Ołowiane rzeczy
event.remove({ output: 'spartanshields:lead_basic_shield' })
event.remove({ output: 'spartanshields:lead_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:lead_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:lead_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:lead_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:lead_tower_shield"
    },
    "show_notification": true
  });

  //Lazurytowe rzeczy
event.remove({ output: 'spartanshields:lapis_lazuli_basic_shield' })
event.remove({ output: 'spartanshields:lapis_lazuli_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:lapis_lazuli"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:lapis_lazuli_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:lapis_lazuli"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:lapis_lazuli_tower_shield"
    },
    "show_notification": true
  });

  //Stalowe rzeczy
event.remove({ output: 'spartanshields:steel_basic_shield' })
event.remove({ output: 'spartanshields:steel_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:steel_plate"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:steel_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "overgeared:steel_plate"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:steel_tower_shield"
    },
    "show_notification": true
  });

  //Diamentowe rzeczy
event.remove({ output: 'spartanshields:diamond_basic_shield' })
event.remove({ output: 'spartanshields:diamond_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:diamond_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:diamond_tower_shield"
    },
    "show_notification": true
  });

  //Platynowe rzeczy
event.remove({ output: 'spartanshields:platinum_basic_shield' })
event.remove({ output: 'spartanshields:platinum_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "illagerinvasion:platinum_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:platinum_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "illagerinvasion:platinum_sheet"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:platinum_tower_shield"
    },
    "show_notification": true
  });

  //Electrumowe rzeczy
event.remove({ output: 'spartanshields:electrum_basic_shield' })
event.remove({ output: 'spartanshields:electrum_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:electrum_ingot"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:electrum_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "oreganized:electrum_ingot"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:electrum_tower_shield"
    },
    "show_notification": true
  });

  //Enderiumowe rzeczy
event.remove({ output: 'spartanshields:enderium_basic_shield' })
event.remove({ output: 'spartanshields:enderium_tower_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "majruszsdifficulty:enderium_ingot"
      },
      "H": {
        "item": "spartanshields:wooden_basic_shield"
      }
    },
    "pattern": [
      " C ",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:enderium_basic_shield"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "majruszsdifficulty:enderium_ingot"
      },
      "H": {
        "item": "spartanshields:wooden_tower_shield"
      }
    },
    "pattern": [
      "CCC",
      "CHC",
      " C "
    ],
    "result": {
      "item": "spartanshields:enderium_tower_shield"
    },
    "show_notification": true
  });

  //Cloggrumowe rzeczy
event.remove({ output: 'undergarden:cloggrum_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "tag": "minecraft:planks"
      },
      "H": {
        "item": "undergarden:cloggrum_ingot"
      }
    },
    "pattern": [
      "HCH",
      "HHH",
      " H "
    ],
    "result": {
      "item": "undergarden:cloggrum_shield"
    },
    "show_notification": true
  });

  //Knightmetalowe rzeczy
event.remove({ output: 'twilightforest:knightmetal_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "tag": "twilightforest:towerwood"
      },
      "H": {
        "item": "twilightforest:knightmetal_ingot"
      },
      "L": {
        "item": "twilightforest:knightmetal_ring"
      }
    },
    "pattern": [
      "HC ",
      "HL ",
      "HC "
    ],
    "result": {
      "item": "twilightforest:knightmetal_shield"
    },
    "show_notification": true
  });

  //Azure Sea Shield
event.remove({ output: 'cataclysm:azure_sea_shield' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "cataclysm:lacrima"
      },
      "H": {
        "item": "minecraft:gold_ingot"
      },
      "L": {
        "item": "minecraft:gold_nugget"
      }
    },
    "pattern": [
      "LCL",
      "CHC",
      "LCL"
    ],
    "result": {
      "item": "cataclysm:azure_sea_shield"
    },
    "show_notification": true
  });

  //Shield of the Deep
event.remove({ output: 'alexsmobs:shield_of_the_deep' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "SHIELD",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": false,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "alexsmobs:serrated_shark_tooth"
      },
      "H": {
        "item": "minecraft:heart_of_the_sea"
      },
      "L": {
        "item": "minecraft:prismarine_bricks"
      },
      "K": {
        "item": "alexsmobs:shark_tooth"
      }
    },
    "pattern": [
      "CCC",
      "LHL",
      "KLK"
    ],
    "result": {
      "item": "alexsmobs:shield_of_the_deep"
    },
    "show_notification": true
  });

})