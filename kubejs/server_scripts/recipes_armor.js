ServerEvents.recipes(event => {
//ZBROJE
//MIEDZIANE RZECZY
event.remove({ id: 'overgeared:copper_helmet' })
event.remove({ id: 'overgeared:copper_chestplate' })
event.remove({ id: 'overgeared:copper_leggings' })
event.remove({ id: 'overgeared:copper_boots' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:copper_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "   "
    ],
    "result": {
      "item": "overgeared:copper_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:copper_sheet"
      }
    },
    "pattern": [
      "C C",
      "CCC",
      "CCC"
    ],
    "result": {
      "item": "overgeared:copper_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:copper_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "C C"
    ],
    "result": {
      "item": "overgeared:copper_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:copper_sheet"
      }
    },
    "pattern": [
      "C C",
      "C C",
      "   "
    ],
    "result": {
      "item": "overgeared:copper_boots"
    },
    "show_notification": true
  });

//SREBRNE RZECZY
event.remove({ id: 'caverns_and_chasms:silver_helmet' })
event.remove({ id: 'caverns_and_chasms:silver_chestplate' })
event.remove({ id: 'caverns_and_chasms:silver_leggings' })
event.remove({ id: 'caverns_and_chasms:silver_boots' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:silver_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "   "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:silver_sheet"
      }
    },
    "pattern": [
      "C C",
      "CCC",
      "CCC"
    ],
    "result": {
      "item": "caverns_and_chasms:silver_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:silver_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "C C"
    ],
    "result": {
      "item": "caverns_and_chasms:silver_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "vintage:silver_sheet"
      }
    },
    "pattern": [
      "C C",
      "C C",
      "   "
    ],
    "result": {
      "item": "caverns_and_chasms:silver_boots"
    },
    "show_notification": true
  });

//KOLCZE (chainmail) RZECZY
event.remove({ id: 'luckys_armory:chainmail_helmet' })
event.remove({ id: 'luckys_armory:chainmail_chestplate' })
event.remove({ id: 'luckys_armory:chainmail_leggings' })
event.remove({ id: 'luckys_armory:chainmail_boots' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:chain"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:chainmail_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:chain"
      }
    },
    "pattern": [
      "C C",
      "CCC",
      "CCC"
    ],
    "result": {
      "item": "minecraft:chainmail_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:chain"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "C C"
    ],
    "result": {
      "item": "minecraft:chainmail_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:chain"
      }
    },
    "pattern": [
      "C C",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:chainmail_boots"
    },
    "show_notification": true
  });

//ŻELAZNE RZECZY
event.remove({ id: 'minecraft:iron_helmet' })
event.remove({ id: 'minecraft:iron_chestplate' })
event.remove({ id: 'minecraft:iron_leggings' })
event.remove({ id: 'minecraft:iron_boots' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:iron_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:iron_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:iron_sheet"
      }
    },
    "pattern": [
      "C C",
      "CCC",
      "CCC"
    ],
    "result": {
      "item": "minecraft:iron_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:iron_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "C C"
    ],
    "result": {
      "item": "minecraft:iron_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:iron_sheet"
      }
    },
    "pattern": [
      "C C",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:iron_boots"
    },
    "show_notification": true
  });

//ZŁOTE RZECZY
event.remove({ id: 'minecraft:golden_helmet' })
event.remove({ id: 'minecraft:golden_chestplate' })
event.remove({ id: 'minecraft:golden_leggings' })
event.remove({ id: 'minecraft:golden_boots' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:golden_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:golden_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:golden_sheet"
      }
    },
    "pattern": [
      "C C",
      "CCC",
      "CCC"
    ],
    "result": {
      "item": "minecraft:golden_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:golden_sheet"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "C C"
    ],
    "result": {
      "item": "minecraft:golden_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "create:golden_sheet"
      }
    },
    "pattern": [
      "C C",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:golden_boots"
    },
    "show_notification": true
  });

//DIAMENTOWE RZECZY
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:diamond_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      }
    },
    "pattern": [
      "C C",
      "CCC",
      "CCC"
    ],
    "result": {
      "item": "minecraft:diamond_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      }
    },
    "pattern": [
      "CCC",
      "C C",
      "C C"
    ],
    "result": {
      "item": "minecraft:diamond_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "above_a",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:diamond"
      }
    },
    "pattern": [
      "C C",
      "C C",
      "   "
    ],
    "result": {
      "item": "minecraft:diamond_boots"
    },
    "show_notification": true
  });

//Zbroje ArmorOfTheAges
  //Viking
event.remove({ output: 'luckys_armory:plated_armor_helmet' })
event.remove({ output: 'luckys_armory:plated_armor_chestplate' })
event.remove({ output: 'luckys_armory:plated_armor_leggings' })
event.remove({ output: 'luckys_armory:plated_armor_boots' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:raw_iron"
      },
      "S": {
        "item": "minecraft:string"
      },
      "H": {
        "item": "minecraft:leather_helmet"
      }
    },
    "pattern": [
      "SCS",
      "CHC",
      "   "
    ],
    "result": {
      "item": "luckys_armory:plated_armor_helmet"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:raw_iron"
      },
      "S": {
        "item": "minecraft:string"
      },
      "H": {
        "item": "minecraft:leather_chestplate"
      }
    },
    "pattern": [
      "SCS",
      "CHC",
      "SCS"
    ],
    "result": {
      "item": "luckys_armory:plated_armor_chestplate"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:raw_iron"
      },
      "S": {
        "item": "minecraft:string"
      },
      "H": {
        "item": "minecraft:leather_leggings"
      }
    },
    "pattern": [
      "SCS",
      "CHC",
      "SCS"
    ],
    "result": {
      "item": "luckys_armory:plated_armor_leggings"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:raw_iron"
      },
      "S": {
        "item": "minecraft:string"
      },
      "H": {
        "item": "minecraft:leather_boots"
      }
    },
    "pattern": [
      "   ",
      "S S",
      "CHC"
    ],
    "result": {
      "item": "luckys_armory:plated_armor_boots"
    },
    "show_notification": true
  });
  //Faraon
event.remove({ output: 'armoroftheages:pharaoh_armor_head' })
event.remove({ output: 'armoroftheages:pharaoh_armor_chest' })
event.remove({ output: 'armoroftheages:pharaoh_armor_legs' })
event.remove({ output: 'armoroftheages:pharaoh_armor_feet' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_block"
      },
      "S": {
        "item": "minecraft:lapis_block"
      },
      "H": {
        "item": "minecraft:golden_helmet"
      }
    },
    "pattern": [
      "SHS",
      "C C",
      "   "
    ],
    "result": {
      "item": "armoroftheages:pharaoh_armor_head"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_block"
      },
      "S": {
        "item": "minecraft:string"
      },
      "H": {
        "item": "minecraft:golden_chestplate"
      }
    },
    "pattern": [
      "C C",
      "SHS",
      "SSS"
    ],
    "result": {
      "item": "armoroftheages:pharaoh_armor_chest"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_block"
      },
      "S": {
        "item": "minecraft:string"
      },
      "H": {
        "item": "minecraft:golden_leggings"
      }
    },
    "pattern": [
      "   ",
      "SHS",
      "SCS"
    ],
    "result": {
      "item": "armoroftheages:pharaoh_armor_legs"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "tier": "stone",
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:gold_block"
      },
      "S": {
        "item": "minecraft:gold_ingot"
      },
      "H": {
        "item": "minecraft:golden_boots"
      }
    },
    "pattern": [
      "   ",
      "CHC",
      "S S"
    ],
    "result": {
      "item": "armoroftheages:pharaoh_armor_feet"
    },
    "show_notification": true
  });

  //Anubis
event.remove({ output: 'armoroftheages:anubis_armor_head' })
event.remove({ output: 'armoroftheages:anubis_armor_chest' })
event.remove({ output: 'armoroftheages:anubis_armor_legs' })
event.remove({ output: 'armoroftheages:anubis_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:lapis_block" },
    "x": { "item": "minecraft:gold_block" },
    "V": { "item": "minecraft:coal_block" },
    "o": { "item": "minecraft:diamond_helmet" }
  },
  "pattern": [
    "xVx",
    "ioi",
    "x x"
  ],
  "result": {
    "item": "armoroftheages:anubis_armor_head"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "X": { "item": "minecraft:diamond_chestplate" },
    "x": { "item": "minecraft:lapis_block" },
    "i": { "item": "minecraft:gold_block" }
  },
  "pattern": [
    "x x",
    "iXi",
    "iii"
  ],
  "result": {
    "item": "armoroftheages:anubis_armor_chest"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "x": { "item": "minecraft:gold_block" },
    "i": { "item": "minecraft:lapis_block" },
    "I": { "item": "minecraft:diamond_leggings" }
  },
  "pattern": [
    "iIi",
    "x x",
    "x x"
  ],
  "result": {
    "item": "armoroftheages:anubis_armor_legs"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "I": { "item": "minecraft:gold_block" },
    "i": { "item": "minecraft:lapis_block" },
    "x": { "item": "minecraft:diamond_boots" }
  },
  "pattern": [
    "IxI",
    "i i"
  ],
  "result": {
    "item": "armoroftheages:anubis_armor_feet"
  },
  "show_notification": true
})

  //Knight
event.remove({ output: 'armoroftheages:iron_plate_armor_head' })
event.remove({ output: 'armoroftheages:iron_plate_armor_chest' })
event.remove({ output: 'armoroftheages:iron_plate_armor_legs' })
event.remove({ output: 'armoroftheages:iron_plate_armor_feet' })
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:iron_block"
      },
      "S": {
        "item": "minecraft:feather"
      },
      "R": {
        "item": "minecraft:red_dye"
      },
      "H": {
        "item": "minecraft:iron_helmet"
      }
    },
    "pattern": [
      " SR",
      "CHC",
      "C C"
    ],
    "result": {
      "item": "armoroftheages:iron_plate_armor_head"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 5,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:iron_block"
      },
      "H": {
        "item": "minecraft:iron_chestplate"
      }
    },
    "pattern": [
      "C C",
      "CHC",
      "CCC"
    ],
    "result": {
      "item": "armoroftheages:iron_plate_armor_chest"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 4,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:iron_block"
      },
      "S": {
        "item": "minecraft:white_wool"
      },
      "R": {
        "item": "minecraft:red_wool"
      },
      "H": {
        "item": "minecraft:iron_leggings"
      }
    },
    "pattern": [
      "CHC",
      "CSC",
      " R "
    ],
    "result": {
      "item": "armoroftheages:iron_plate_armor_legs"
    },
    "show_notification": true
  });
event.custom({
    "type": "overgeared:forging",
    "category": "equipment",
    "blueprint": "ARMOR",
    "requires_blueprint": false,
    "hammering": 3,
    "has_quality": true,
    "minimum_quality": "poor",
    "needs_minigame": true,
    "has_polishing": false,
    "key": {
      "C": {
        "item": "minecraft:iron_block"
      },
      "S": {
        "item": "minecraft:iron_boots"
      }
    },
    "pattern": [
      "   ",
      "C C",
      "S S"
    ],
    "result": {
      "item": "armoroftheages:iron_plate_armor_feet"
    },
    "show_notification": true
  });

  //Holy (Paladyn)
event.remove({ output: 'armoroftheages:holy_armor_head' })
event.remove({ output: 'armoroftheages:holy_armor_chest' })
event.remove({ output: 'armoroftheages:holy_armor_legs' })
event.remove({ output: 'armoroftheages:holy_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "x": { "item": "minecraft:gold_block" },
    "i": { "item": "oreganized:silver_block" },
    "o": { "item": "minecraft:diamond_helmet" }
  },
  "pattern": [
    "ioi",
    "x x"
  ],
  "result": {
    "item": "armoroftheages:holy_armor_head"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:diamond_chestplate" },
    "I": { "item": "oreganized:silver_block" },
    "o": { "item": "minecraft:gold_block" }
  },
  "pattern": [
    "o o",
    "IiI",
    "oIo"
  ],
  "result": {
    "item": "armoroftheages:holy_armor_chest"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:diamond_leggings" },
    "I": { "item": "oreganized:silver_block" },
    "o": { "item": "minecraft:gold_block" }
  },
  "pattern": [
    "IiI",
    "I I",
    "o o"
  ],
  "result": {
    "item": "armoroftheages:holy_armor_legs"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "I": { "item": "minecraft:diamond_boots" },
    "i": { "item": "oreganized:silver_block" }
  },
  "pattern": [
    "i i",
    "I I"
  ],
  "result": {
    "item": "armoroftheages:holy_armor_feet"
  },
  "show_notification": true
})

  //Quetzal
event.remove({ output: 'armoroftheages:quetzalcoatl_armor_head' })
event.remove({ output: 'armoroftheages:quetzalcoatl_armor_chest' })
event.remove({ output: 'armoroftheages:quetzalcoatl_armor_legs' })
event.remove({ output: 'armoroftheages:quetzalcoatl_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "x": { "item": "minecraft:feather" },
    "i": { "tag": "forge:ingots/gold" },
    "o": { "item": "minecraft:diamond_helmet" },
    "v": { "item": "minecraft:skeleton_skull" }
  },
  "pattern": [
    "xxx",
    "xox",
    "ivi"
  ],
  "result": { "item": "armoroftheages:quetzalcoatl_armor_head" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:diamond_chestplate" },
    "x": { "tag": "forge:ingots/gold" },
    "o": { "item": "minecraft:feather" },
    "O": { "item": "minecraft:egg" },
    "B": { "item": "sullysmod:jade_block" }
  },
  "pattern": [
    "oBo",
    "xix",
    "oOo"
  ],
  "result": { "item": "armoroftheages:quetzalcoatl_armor_chest" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:diamond_leggings" },
    "I": { "tag": "forge:ingots/gold" },
    "B": { "item": "sullysmod:jade_block" },
    "w": { "item": "minecraft:bone_block" }
  },
  "pattern": [
    "BiB",
    " I ",
    " w "
  ],
  "result": { "item": "armoroftheages:quetzalcoatl_armor_legs" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "x": { "item": "minecraft:diamond_boots" },
    "i": { "item": "minecraft:feather" },
    "B": { "item": "sullysmod:jade_block" }
  },
  "pattern": [
    "BxB",
    "i i"
  ],
  "result": { "item": "armoroftheages:quetzalcoatl_armor_feet" },
  "show_notification": true
})

  //Raijin
event.remove({ output: 'armoroftheages:raijin_armor_head' })
event.remove({ output: 'armoroftheages:raijin_armor_chest' })
event.remove({ output: 'armoroftheages:raijin_armor_legs' })
event.remove({ output: 'armoroftheages:raijin_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "I": { "item": "minecraft:gold_block" },
    "i": { "tag": "forge:ingots/gold" },
    "o": { "item": "minecraft:diamond_helmet" }
  },
  "pattern": [
    "i i",
    "IoI"
  ],
  "result": { "item": "armoroftheages:raijin_armor_head" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:string" },
    "x": { "item": "minecraft:gold_block" },
    "o": { "item": "spelunkery:cinnabar_block" },
    "O": { "item": "minecraft:diamond_chestplate" }
  },
  "pattern": [
    "oOo",
    "ixi",
    "i i"
  ],
  "result": { "item": "armoroftheages:raijin_armor_chest" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "x": { "tag": "forge:dyes/red" },
    "I": { "item": "minecraft:string" },
    "O": { "item": "minecraft:diamond_leggings" }
  },
  "pattern": [
    "xOx",
    "III",
    "I I"
  ],
  "result": { "item": "armoroftheages:raijin_armor_legs" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "I": { "item": "minecraft:gold_block" },
    "i": { "item": "minecraft:diamond_boots" }
  },
  "pattern": [
    "I I",
    "i i"
  ],
  "result": { "item": "armoroftheages:raijin_armor_feet" },
  "show_notification": true
})

  //Samurai (O Yoroi)
event.remove({ output: 'armoroftheages:o_yoroi_armor_head' })
event.remove({ output: 'armoroftheages:o_yoroi_armor_chest' })
event.remove({ output: 'armoroftheages:o_yoroi_armor_legs' })
event.remove({ output: 'armoroftheages:o_yoroi_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "spelunkery:cinnabar_block" },
    "x": { "item": "minecraft:gold_block" },
    "o": { "item": "minecraft:diamond_helmet" }
  },
  "pattern": [
    "xox",
    "ixi"
  ],
  "result": { "item": "armoroftheages:o_yoroi_armor_head" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "o": { "item": "spelunkery:cinnabar_block" },
    "I": { "item": "minecraft:coal_block" },
    "x": { "item": "minecraft:diamond_chestplate" }
  },
  "pattern": [
    "o o",
    "IxI",
    "oIo"
  ],
  "result": { "item": "armoroftheages:o_yoroi_armor_chest" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "O": { "item": "minecraft:diamond_leggings" },
    "I": { "item": "spelunkery:cinnabar_block" },
    "o": { "item": "minecraft:coal_block" }
  },
  "pattern": [
    "oOo",
    "I I",
    "I I"
  ],
  "result": { "item": "armoroftheages:o_yoroi_armor_legs" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:diamond_boots" },
    "I": { "item": "minecraft:coal_block" }
  },
  "pattern": [
    "I I",
    "i i"
  ],
  "result": { "item": "armoroftheages:o_yoroi_armor_feet" },
  "show_notification": true
})

  //Centurion
event.remove({ output: 'armoroftheages:centurion_armor_head' })
event.remove({ output: 'armoroftheages:centurion_armor_chest' })
event.remove({ output: 'armoroftheages:centurion_armor_legs' })
event.remove({ output: 'armoroftheages:centurion_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "stone",
  "key": {
    "x": { "item": "minecraft:feather" },
    "i": { "item": "minecraft:gold_block" },
    "o": { "item": "overgeared:copper_helmet" },
    "h": { "tag": "forge:dyes/red" }
  },
  "pattern": [
    "xhx",
    "ioi",
    "i i"
  ],
  "result": {
    "item": "armoroftheages:centurion_armor_head"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "stone",
  "key": {
    "i": { "item": "overgeared:copper_chestplate" },
    "I": { "tag": "forge:dyes/red" },
    "o": { "item": "minecraft:gold_block" }
  },
  "pattern": [
    "o o",
    "IiI",
    "ooo"
  ],
  "result": {
    "item": "armoroftheages:centurion_armor_chest"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "stone",
  "key": {
    "i": { "item": "overgeared:copper_leggings" },
    "I": { "item": "minecraft:gold_block" },
    "o": { "tag": "forge:dyes/red" }
  },
  "pattern": [
    "IiI",
    "I I",
    "o o"
  ],
  "result": {
    "item": "armoroftheages:centurion_armor_legs"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "stone",
  "key": {
    "I": { "tag": "forge:leather" },
    "i": { "item": "minecraft:gold_block" },
    "x": { "item": "overgeared:copper_boots" }
  },
  "pattern": [
    "ixi",
    "I I"
  ],
  "result": {
    "item": "armoroftheages:centurion_armor_feet"
  },
  "show_notification": true
})

  //Exalted
event.remove({ output: 'armoroftheages:exalted_aurum_armor_head' })
event.remove({ output: 'armoroftheages:exalted_aurum_armor_chest' })
event.remove({ output: 'armoroftheages:exalted_aurum_armor_legs' })
event.remove({ output: 'armoroftheages:exalted_aurum_armor_feet' })
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "oreganized:electrum_block" },
    "o": { "item": "minecraft:diamond_helmet" }
  },
  "pattern": [
    " i ",
    "ioi"
  ],
  "result": { "item": "armoroftheages:exalted_aurum_armor_head" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "i": { "item": "minecraft:diamond_chestplate" },
    "I": { "item": "spelunkery:cinnabar_block" },
    "o": { "item": "oreganized:electrum_block" }
  },
   "pattern": [
    " I ",
    "oio",
    "ooo"
  ],
   "result": { "item": "armoroftheages:exalted_aurum_armor_chest" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
   "key": {
    "i": { "item": "minecraft:diamond_leggings" },
    "I": { "item": "oreganized:electrum_block" },
    "o": { "item": "spelunkery:cinnabar_block" }
  },
   "pattern": [
    "IiI",
    "IoI",
    " o "
  ],
  "result": { "item": "armoroftheages:exalted_aurum_armor_legs" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "equipment",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
   "key": {
    "i": { "item": "minecraft:diamond_boots" },
    "I": { "item": "oreganized:electrum_block" },
    "o": { "item": "oreganized:electrum_ingot" }
  },
   "pattern": [
    "   ",
    "IiI",
    "o o"
  ],
  "result": { "item": "armoroftheages:exalted_aurum_armor_feet" },
  "show_notification": true
})

//Born In Chaos
  //Nightmare Armor
event.remove({ id: 'born_in_chaos_v1:nightmare_mask_k' })
event.remove({ id: 'born_in_chaos_v1:nightmare_robe_k' })
event.remove({ id: 'born_in_chaos_v1:nightmare_pantsk' })
event.remove({ id: 'born_in_chaos_v1:nightmare_boots_k' })
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:monster_skin" },
    "b": { "item": "born_in_chaos_v1:nightmare_stalker_skull" },
    "c": { "item": "born_in_chaos_v1:dark_metal_nugget" }
  },
  "pattern": [
    "aaa",
    "aba",
    "c c"
  ],
  "result": {
    "item": "born_in_chaos_v1:nightmare_mantleofthe_night_helmet"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:dark_metal_ingot" },
    "b": { "item": "born_in_chaos_v1:monster_skin" }
  },
  "pattern": [
    "a a",
    "bbb",
    "bbb"
  ],
  "result": {
    "item": "born_in_chaos_v1:nightmare_mantleofthe_night_chestplate"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:monster_skin" },
    "b": { "item": "born_in_chaos_v1:dark_metal_ingot" }
  },
  "pattern": [
    "aba",
    "a a",
    "a a"
  ],
  "result": {
    "item": "born_in_chaos_v1:nightmare_mantleofthe_night_leggings"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "a": { "item": "born_in_chaos_v1:dark_metal_nugget" },
    "b": { "item": "born_in_chaos_v1:monster_skin" }
  },
  "pattern": [
    "a a",
    "b b"
  ],
  "result": {
    "item": "born_in_chaos_v1:nightmare_mantleofthe_night_boots"
  },
  "show_notification": true
})

  //Spiny Set
event.remove({ id: 'born_in_chaos_v1:spiny_shell_helm_k' })
event.remove({ id: 'born_in_chaos_v1:spiny_shell_chestplate_k' })
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "stone",
  "key": {
    "a": { "item": "born_in_chaos_v1:spiny_shell" }
  },
  "pattern": [
    "aaa",
    "a a"
  ],
  "result": {
    "item": "born_in_chaos_v1:spiny_shell_armor_helmet"
  },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "stone",
  "key": {
    "a": { "item": "born_in_chaos_v1:spiny_shell" }
  },
  "pattern": [
    "a a",
    "aaa",
    "aaa"
  ],
  "result": {
    "item": "born_in_chaos_v1:spiny_shell_armor_chestplate"
  },
  "show_notification": true
})

//Warriors of the Past Epoch

  // Musketeer Armor
event.remove({ id: 'warriorsofpastepoch:musketeer_hat_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_polishing": false,
  "pattern": [
    "  a",
    "bbb",
    "bcb"
  ],
  "key": {
    "a": { "item": "minecraft:feather" },
    "b": { "item": "warriorsofpastepoch:azure_fabric" },
    "c": { "item": "overgeared:steel_nugget" }
  },
  "result": { 
    "item": "warriorsofpastepoch:muketers_armor_helmet"},
  "show_notification": true
})
event.remove({ id: 'warriorsofpastepoch:musketeer_camisole_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_polishing": false,
  "pattern": [
    "a a",
    "bab",
    "bcb"
  ],
  "key": {
    "a": { "item": "warriorsofpastepoch:thickened_skin" },
    "b": { "item": "warriorsofpastepoch:azure_fabric" },
    "c": { "item": "overgeared:heated_steel_ingot" }
  },
  "result": { 
    "item": "warriorsofpastepoch:muketers_armor_chestplate"},
  "show_notification": true
})
event.remove({ id: 'warriorsofpastepoch:musketeer_pants_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_polishing": false,
  "pattern": [
    "aba",
    "a a",
    "a a"
  ],
  "key": {
    "a": { "item": "warriorsofpastepoch:azure_fabric" },
    "b": { "item": "warriorsofpastepoch:thickened_skin" }
  },
  "result": { 
    "item": "warriorsofpastepoch:muketers_armor_leggings"},
  "show_notification": true
})
event.remove({ id: 'warriorsofpastepoch:musketeer_boots_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_polishing": false,
  "pattern": [
    "a a",
    "b b"
  ],
  "key": {
    "a": { "item": "minecraft:leather" },
    "b": { "item": "warriorsofpastepoch:thickened_skin" }
  },
  "result": { 
    "item": "warriorsofpastepoch:muketers_armor_boots"},
  "show_notification": true
})

  // Plague Doctor Armor
event.remove({ id: 'warriorsofpastepoch:plague_doctor_mask_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_polishing": false,
  "pattern": [
    "aaa",
    "bcb",
    " b "
  ],
  "key": {
    "a": { "item": "warriorsofpastepoch:sterile_tissue" },
    "b": { "item": "warriorsofpastepoch:thickened_skin" },
    "c": { "item": "warriorsofpastepoch:cistus" }
  },
  "result": { 
    "item": "warriorsofpastepoch:plague_doctor_armor_helmet"
  },
  "show_notification": true
})
event.remove({ id: 'warriorsofpastepoch:plague_doctors_cloak_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_polishing": false,
  "pattern": [
    "a a",
    "aba",
    "bcb"
  ],
  "key": {
    "a": { "item": "warriorsofpastepoch:sterile_tissue" },
    "b": { "item": "warriorsofpastepoch:thickened_skin" },
    "c": { "item": "overgeared:heated_steel_ingot" }
  },
  "result": { 
    "item": "warriorsofpastepoch:plague_doctor_armor_chestplate"
  },
  "show_notification": true
})
event.remove({ id: 'warriorsofpastepoch:plague_doctor_pants_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_polishing": false,
  "pattern": [
    "aba",
    "a a",
    "a a"
  ],
  "key": {
    "a": { "item": "warriorsofpastepoch:sterile_tissue" },
    "b": { "item": "warriorsofpastepoch:thickened_skin" }
  },
  "result": { 
    "item": "warriorsofpastepoch:plague_doctor_armor_leggings"
  },
  "show_notification": true
})
event.remove({ id: 'warriorsofpastepoch:plague_doctors_boots_craft' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_polishing": false,
  "pattern": [
    "a a",
    "b b"
  ],
  "key": {
    "a": { "item": "warriorsofpastepoch:thickened_skin" },
    "b": { "item": "warriorsofpastepoch:sterile_tissue" }
  },
  "result": { 
    "item": "warriorsofpastepoch:plague_doctor_armor_boots"
  },
  "show_notification": true
})

//Iron's Spells
  // Priest Set
event.remove({ id: 'irons_spellbooks:priest_helmet' })
event.remove({ id: 'irons_spellbooks:priest_chestplate' })
event.remove({ id: 'irons_spellbooks:priest_leggings' })
event.remove({ id: 'irons_spellbooks:priest_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:priest_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:priest_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:priest_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:priest_boots" },
  "show_notification": true
})
  // Pyromancer Set
event.remove({ id: 'irons_spellbooks:pyromancer_helmet' })
event.remove({ id: 'irons_spellbooks:pyromancer_chestplate' })
event.remove({ id: 'irons_spellbooks:pyromancer_leggings' })
event.remove({ id: 'irons_spellbooks:pyromancer_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:fire_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:pyromancer_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:fire_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:pyromancer_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:fire_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:pyromancer_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:fire_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:pyromancer_boots" },
  "show_notification": true
})
  // Cultist Set
event.remove({ id: 'irons_spellbooks:cultist_helmet' })
event.remove({ id: 'irons_spellbooks:cultist_chestplate' })
event.remove({ id: 'irons_spellbooks:cultist_leggings' })
event.remove({ id: 'irons_spellbooks:cultist_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:blood_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:cultist_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:blood_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:cultist_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:blood_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:cultist_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:blood_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:cultist_boots" },
  "show_notification": true
})
  // Cryomancer Set
event.remove({ id: 'irons_spellbooks:cryomancer_helmet' })
event.remove({ id: 'irons_spellbooks:cryomancer_chestplate' })
event.remove({ id: 'irons_spellbooks:cryomancer_leggings' })
event.remove({ id: 'irons_spellbooks:cryomancer_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ice_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:cryomancer_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ice_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:cryomancer_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ice_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:cryomancer_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ice_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:cryomancer_boots" },
  "show_notification": true
})
  // Plagued Set
event.remove({ id: 'irons_spellbooks:plagued_helmet' })
event.remove({ id: 'irons_spellbooks:plagued_chestplate' })
event.remove({ id: 'irons_spellbooks:plagued_leggings' })
event.remove({ id: 'irons_spellbooks:plagued_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:nature_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:plagued_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:nature_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:plagued_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:nature_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:plagued_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:nature_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:plagued_boots" },
  "show_notification": true
})
  // Shadowwalker Set
event.remove({ id: 'irons_spellbooks:shadowwalker_helmet' })
event.remove({ id: 'irons_spellbooks:shadowwalker_chestplate' })
event.remove({ id: 'irons_spellbooks:shadowwalker_leggings' })
event.remove({ id: 'irons_spellbooks:shadowwalker_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ender_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:shadowwalker_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ender_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:shadowwalker_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ender_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:shadowwalker_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:ender_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:shadowwalker_boots" },
  "show_notification": true
})
  // Archevoker Set
event.remove({ id: 'irons_spellbooks:archevoker_helmet' })
event.remove({ id: 'irons_spellbooks:archevoker_chestplate' })
event.remove({ id: 'irons_spellbooks:archevoker_leggings' })
event.remove({ id: 'irons_spellbooks:archevoker_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:evocation_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:archevoker_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:evocation_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:archevoker_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:evocation_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:archevoker_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:evocation_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:archevoker_boots" },
  "show_notification": true
})
  // Electromancer Set
event.remove({ id: 'irons_spellbooks:electromancer_helmet' })
event.remove({ id: 'irons_spellbooks:electromancer_chestplate' })
event.remove({ id: 'irons_spellbooks:electromancer_leggings' })
event.remove({ id: 'irons_spellbooks:electromancer_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:lightning_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:electromancer_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:lightning_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:electromancer_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:lightning_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:electromancer_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:lightning_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:electromancer_boots" },
  "show_notification": true
})
  // Battlemage Set
event.remove({ id: 'irons_spellbooks:netherite_mage_helmet' })
event.remove({ id: 'irons_spellbooks:netherite_mage_chestplate' })
event.remove({ id: 'irons_spellbooks:netherite_mage_leggings' })
event.remove({ id: 'irons_spellbooks:netherite_mage_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "minecraft:netherite_ingot" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:netherite_mage_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "minecraft:netherite_ingot" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:netherite_mage_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "minecraft:netherite_ingot" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:netherite_mage_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "minecraft:netherite_ingot" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:netherite_mage_boots" },
  "show_notification": true
})
  // Priest Set
event.remove({ id: 'irons_spellbooks:priest_helmet' })
event.remove({ id: 'irons_spellbooks:priest_chestplate' })
event.remove({ id: 'irons_spellbooks:priest_leggings' })
event.remove({ id: 'irons_spellbooks:priest_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:priest_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "irons_spellbooks:priest_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "irons_spellbooks:priest_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "irons_spellbooks:holy_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "irons_spellbooks:priest_boots" },
  "show_notification": true
})

  // Aquamancer Set
event.remove({ id: 'traveloptics:deepling_mage_armor_helmet' })
event.remove({ id: 'traveloptics:deepling_mage_armor_robe' })
event.remove({ id: 'traveloptics:deepling_mage_armor_leggings' })
event.remove({ id: 'traveloptics:deepling_mage_armor_boots' })
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "traveloptics:aqua_rune" }
  },
  "pattern": [
    "CCC",
    "CRC"
  ],
  "result": { "item": "traveloptics:deepling_mage_armor_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "traveloptics:aqua_rune" }
  },
  "pattern": [
    "CRC",
    "CCC",
    "CCC"
  ],
  "result": { "item": "traveloptics:deepling_mage_armor_robe" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "traveloptics:aqua_rune" }
  },
  "pattern": [
    "CCC",
    "CRC",
    "C C"
  ],
  "result": { "item": "traveloptics:deepling_mage_armor_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "tier": "above_a",
  "key": {
    "C": { "item": "irons_spellbooks:magic_cloth" },
    "R": { "item": "traveloptics:aqua_rune" }
  },
  "pattern": [
    "C C",
    "CRC"
  ],
  "result": { "item": "traveloptics:deepling_mage_armor_boots" },
  "show_notification": true
})

//============//

//CIĘŻKIE ZBROJE
  event.remove({ id: 'luckys_armory:heavy_iron_helmet' })
  event.remove({ id: 'luckys_armory:heavy_iron_chestplate' })
  event.remove({ id: 'luckys_armory:heavy_iron_leggings' })
  event.remove({ id: 'luckys_armory:heavy_iron_boots' })

  event.remove({ id: 'luckys_armory:heavy_golden_helmet' })
  event.remove({ id: 'luckys_armory:heavy_golden_chestplate_recipe' })
  event.remove({ id: 'luckys_armory:heavy_golden_leggings_recipe' })
  event.remove({ id: 'luckys_armory:heavy_golden_boots_recipe' })

  event.remove({ id: 'luckys_armory:heavy_diamond_helmet' })
  event.remove({ id: 'luckys_armory:heavy_diamond_chestplate_recipe' })
  event.remove({ id: 'luckys_armory:heavy_diamond_leggings_recipe' })
  event.remove({ id: 'luckys_armory:heavy_diamond_boots' })

// Heavy Iron Armor
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:iron_helmet" }
  },
  "pattern": [
    "CBC",
    "BHB",
    "   "
  ],
  "result": { "item": "luckys_armory:heavy_iron_armor_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:iron_chestplate" }
  },
  "pattern": [
    "B B",
    "CHC",
    "BCB"
  ],
  "result": { "item": "luckys_armory:heavy_iron_armor_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:iron_leggings" }
  },
  "pattern": [
    "BCB",
    "CHC",
    "B B"
  ],
  "result": { "item": "luckys_armory:heavy_iron_armor_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:iron_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:iron_boots" }
  },
  "pattern": [
    "CHC",
    "B B",
    "   "
  ],
  "result": { "item": "luckys_armory:heavy_iron_armor_boots" },
  "show_notification": true
})

// Heavy Golden Armor (Stone Anvil tier)
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "stone",
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:gold_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:golden_helmet" }
  },
  "pattern": [
    "CBC",
    "BHB",
    "   "
  ],
  "result": { "item": "luckys_armory:heavy_gold_armor_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "stone",
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:gold_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:golden_chestplate" }
  },
  "pattern": [
    "B B",
    "CHC",
    "BCB"
  ],
  "result": { "item": "luckys_armory:heavy_gold_armor_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "stone",
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:gold_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:golden_leggings" }
  },
  "pattern": [
    "BCB",
    "CHC",
    "B B"
  ],
  "result": { "item": "luckys_armory:heavy_gold_armor_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "stone",
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:gold_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:golden_boots" }
  },
  "pattern": [
    "CHC",
    "B B",
    "   "
  ],
  "result": { "item": "luckys_armory:heavy_gold_armor_boots" },
  "show_notification": true
})

// Heavy Diamond Armor
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "above_a",
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:diamond_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:diamond_helmet" }
  },
  "pattern": [
    "CBC",
    "BHB",
    "   "
  ],
  "result": { "item": "luckys_armory:heavy_diamond_armor_helmet" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "above_a",
  "requires_blueprint": false,
  "hammering": 5,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:diamond_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:diamond_chestplate" }
  },
  "pattern": [
    "B B",
    "CHC",
    "BCB"
  ],
  "result": { "item": "luckys_armory:heavy_diamond_armor_chestplate" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "above_a",
  "requires_blueprint": false,
  "hammering": 4,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:diamond_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:diamond_leggings" }
  },
  "pattern": [
    "BCB",
    "CHC",
    "B B"
  ],
  "result": { "item": "luckys_armory:heavy_diamond_armor_leggings" },
  "show_notification": true
})
event.custom({
  "type": "overgeared:forging",
  "blueprint": ["ARMOR"],
  "tier": "above_a",
  "requires_blueprint": false,
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "key": {
    "B": { "item": "minecraft:diamond_block" },
    "C": { "item": "minecraft:chain" },
    "H": { "item": "minecraft:diamond_boots" }
  },
  "pattern": [
    "CHC",
    "B B",
    "   "
  ],
  "result": { "item": "luckys_armory:heavy_diamond_armor_boots" },
  "show_notification": true
})

//KLASOWE ŻETONY
    //Pusty
    //event.shaped(
        //Item.of('class_emblems:empty_class_emblem', 1), // Output
        //[
            //'QIQ',
          //  'IGI',
          //  'QIQ'
      //  ], 
        //{
          //  Q: 'minecraft:quartz',
            //I: 'minecraft:iron_ingot',
           // G: 'minecraft:glow_item_frame'
        //}
    //).id('custom:emptyemblem');

    //Wiking
    event.shaped(
        Item.of('class_emblems:emblem_of_viking', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'minecraft:golden_axe',
            X: 'weaponmod:battleaxe.gold',
            Y: 'simplyswords:gold_greataxe',
            Z: 'simplyswords:gold_cutlass',
            H: 'luckys_armory:plated_armor_helmet',
            C: 'luckys_armory:plated_armor_chestplate',
            E: 'class_emblems:empty_class_emblem',
            L: 'luckys_armory:plated_armor_leggings',
            B: 'luckys_armory:plated_armor_boots'
        }
    ).id('custom:vikingemblem');

    //Ninja
    event.shaped(
        Item.of('class_emblems:emblem_of_ninja', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'basicweapons:golden_dagger',
            X: 'simplyswords:gold_sai',
            Y: 'farmersdelight:golden_knife',
            Z: 'weaponmod:katana.gold',
            H: 'armoroftheages:japanese_light_armor_head',
            C: 'armoroftheages:japanese_light_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:japanese_light_armor_legs',
            B: 'armoroftheages:japanese_light_armor_feet'
        }
    ).id('custom:ninjaemblem');

    //Knight
    event.shaped(
        Item.of('class_emblems:emblem_of_knight', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'minecraft:golden_sword',
            X: 'simplyswords:gold_longsword',
            Y: 'simplyswords:gold_claymore',
            Z: 'simplyswords:gold_halberd',
            H: 'armoroftheages:iron_plate_armor_head',
            C: 'armoroftheages:iron_plate_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:iron_plate_armor_legs',
            B: 'armoroftheages:iron_plate_armor_feet'
        }
    ).id('custom:knightemblem');

    //Centurion
    event.shaped(
        Item.of('class_emblems:emblem_of_centurion', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'minecraft:golden_sword',
            X: 'simplyswords:gold_longsword',
            Y: 'simplyswords:gold_spear',
            Z: 'basicweapons:golden_spear',
            H: 'armoroftheages:centurion_armor_head',
            C: 'armoroftheages:centurion_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:centurion_armor_legs',
            B: 'armoroftheages:centurion_armor_feet'
        }
    ).id('custom:centurionemblem');

    //Faraon
    event.shaped(
        Item.of('class_emblems:emblem_of_pharaoh', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'simplyswords:gold_cutlass',
            X: 'simplyswords:gold_warglaive',
            Y: 'simplyswords:gold_twinblade',
            Z: 'simplyswords:gold_scythe',
            H: 'armoroftheages:pharaoh_armor_head',
            C: 'armoroftheages:pharaoh_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:pharaoh_armor_legs',
            B: 'armoroftheages:pharaoh_armor_feet'
        }
    ).id('custom:pharaohemblem');

    //Anubis
    event.shaped(
        Item.of('class_emblems:emblem_of_anubis', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'simplyswords:gold_cutlass',
            X: 'simplyswords:gold_warglaive',
            Y: 'simplyswords:gold_twinblade',
            Z: 'simplyswords:gold_scythe',
            H: 'armoroftheages:anubis_armor_head',
            C: 'armoroftheages:anubis_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:anubis_armor_legs',
            B: 'armoroftheages:anubis_armor_feet'
        }
    ).id('custom:anubisemblem');

    //Quetzal
    event.shaped(
        Item.of('class_emblems:emblem_of_quetzalcoatl', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'minecraft:bow',
            X: 'minecraft:crossbow',
            Y: 'simplyswords:gold_chakram',
            Z: 'simplyswords:gold_spear',
            H: 'armoroftheages:quetzalcoatl_armor_head',
            C: 'armoroftheages:quetzalcoatl_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:quetzalcoatl_armor_legs',
            B: 'armoroftheages:quetzalcoatl_armor_feet'
        }
    ).id('custom:quetzalcoatlemblem');

    //Samurai
    event.shaped(
        Item.of('class_emblems:emblem_of_samurai', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'simplyswords:gold_katana',
            X: 'weaponmod:katana.gold',
            Y: 'simplyswords:gold_glaive',
            Z: 'basicweapons:golden_quarterstaff',
            H: 'armoroftheages:o_yoroi_armor_head',
            C: 'armoroftheages:o_yoroi_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:o_yoroi_armor_legs',
            B: 'armoroftheages:o_yoroi_armor_feet'
        }
    ).id('custom:samuraiemblem');

    //Paladyn
    event.shaped(
        Item.of('class_emblems:emblem_of_paladin', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'basicweapons_golden_hammer',
            X: 'weaponmod:warhammer.gold',
            Y: 'simplyswords:gold_greathammer',
            Z: 'basicweapons:golden_club',
            H: 'armoroftheages:holy_armor_head',
            C: 'armoroftheages:holy_armor_chest',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:holy_armor_legs',
            B: 'armoroftheages:holy_armor_feet'
        }
    ).id('custom:paladinemblem');

    //Raijin
    event.shaped(
        Item.of('class_emblems:emblem_of_raijin', 1), // Output
        [
            'WHX',
            'CEL',
            'YBZ'
        ], 
        {
            W: 'basicweapons:golden_dagger',
            X: 'weaponmod:katana.gold',
            Y: 'simplyswords:gold_chakram',
            Z: 'basicweapons:golden_quarterstaff',
            H: 'armoroftheages:raijin_armor_head',
            C: 'armoroftheages:raijin_armor_head',
            E: 'class_emblems:empty_class_emblem',
            L: 'armoroftheages:raijin_armor_head',
            B: 'armoroftheages:raijin_armor_head'
        }
    ).id('custom:raijinemblem');


    });
    
