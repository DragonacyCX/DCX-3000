ServerEvents.recipes(event => {
//ANTYCZNE GUNSY
//AMMO
event.remove({ id: 'warriorsofpastepoch:musket_craft' })
event.remove({ id: 'warriorsofpastepoch:pistol_craft' })

//MUSKET
event.shaped(
    Item.of('warriorsofpastepoch:musket_ammo', 3), // Output
    [
        'CLC',
        'CGC',
        'CPC'
    ], 
    {
        L: 'oreganized:lead_ingot',
        C: 'create:copper_nugget',
        G: 'minecraft:gunpowder',
        P: 'minecraft:paper'
    }
  ).id('dcx:ewewuket_bullet_copper');
  
  event.shaped(
  Item.of('warriorsofpastepoch:musket_ammo', 4), // Output
  [
      'CLC',
      'CGC',
      'CPC'
  ], 
  {
      L: 'oreganized:lead_ingot',
      C: 'create:brass_nugget',
      G: 'minecraft:gunpowder',
      P: 'minecraft:paper'
  }
  ).id('dcx:ewewuket_bullet_brass');
  //Royal
  event.shaped(
    Item.of('warriorsofpastepoch:musket_ammo', 9), // Output
    [
        'CLC',
        'CGC',
        'CPC'
    ], 
    {
        L: 'oreganized:lead_ingot',
        C: 'create:copper_nugget',
        G: 'royalvariations:royal_gunpowder',
        P: 'minecraft:paper'
    }
  ).id('dcx:ewewuket_bullet_copper_royal');
  
  event.shaped(
  Item.of('warriorsofpastepoch:musket_ammo', 12), // Output
  [
      'CLC',
      'CGC',
      'CPC'
  ], 
  {
      L: 'oreganized:lead_ingot',
      C: 'create:brass_nugget',
      G: 'royalvariations:royal_gunpowder',
      P: 'minecraft:paper'
  }
  ).id('dcx:ewewuket_bullet_brass_royal');

//Flintlock
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
      "I": {
        "item": "overgeared:heated_steel_ingot"
      },
      "F": {
        "item": "minecraft:flint_and_steel"
      },
      "N": {
        "item": "overgeared:steel_nugget"
      },
      "M": {
        "item": "hunters_return:mini_crossbow"
      }
    },
    "pattern": [
      "IF ",
      "NM ",
      "   "
    ],
    "result": {
      "item": "warriorsofpastepoch:pistol"
    },
    "show_notification": true
  });
//Muszkiet
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
      "I": {
        "item": "overgeared:heated_steel_ingot"
      },
      "F": {
        "item": "minecraft:flint_and_steel"
      },
      "N": {
        "item": "overgeared:steel_nugget"
      },
      "C": {
        "item": "minecraft:crossbow"
      }
    },
    "pattern": [
      "I  ",
      " IF",
      " NC"
    ],
    "result": {
      "item": "warriorsofpastepoch:musket"
    },
    "show_notification": true
  });

//NOWOCZESNE GUNSY
event.remove({ id: 'gunswithoutroses:diamond_sniper' })
event.remove({ id: 'gunswithoutroses:diamond_shotgun' })
 //AMMO
 //Utherium Bullet
 event.shapeless(
    Item.of('gunswithoutrosesadditions:utherium_bullet', 6), // arg 1: output
    [
      '2x undergarden:utherium_crystal',
      'warriorsofpastepoch:musket_ammo' 	       // arg 2: the array of inputs
    ]
  )
  event.shapeless(
    Item.of('gunswithoutrosesadditions:utherium_bullet', 18), // arg 1: output
    [
      '2x undergarden:utherium_crystal',
      'royalvariations:royal_gunpowder' 	       // arg 2: the array of inputs
    ]
  )
  //Pumpkin Bullet
  event.shapeless(
    Item.of('born_in_chaos_v1:pumpkin_bullet', 6), // arg 1: output
    [
      'born_in_chaos_v1:cultivated_pumpkin',
      'warriorsofpastepoch:musket_ammo' 	       // arg 2: the array of inputs
    ]
  )
  event.shapeless(
    Item.of('born_in_chaos_v1:pumpkin_bullet', 18), // arg 1: output
    [
      'born_in_chaos_v1:cultivated_pumpkin',
      'royalvariations:royal_gunpowder' 	       // arg 2: the array of inputs
    ]
  )
 event.remove({ id: 'gunswithoutroses:flint_bullet' })
 event.remove({ id: 'gunswithoutroses:iron_bullet' })
 event.remove({ id: 'gunswithoutroses:amethyst_bullet' })
 event.remove({ id: 'gunswithoutrosesadditions:froststeel_bullet' })
 event.remove({ id: 'gunswithoutrosesadditions:utherium_bullet' })
 event.remove({ id: 'born_in_chaos_v1:pumpkin_bullet_k' })
 function ammo(output, ammoInput) {
    event.shaped(output, [
      ' I ',
      'IBI',
      ' IG'
    ], {
      B: 'warriorsofpastepoch:musket_ammo',
      G: 'minecraft:gunpowder',
      I: ammoInput
    })
  }
  //Flint Bullet, Iron Bullet, Amethyst Bullet, Froststeel Bullet
  ammo('6x gunswithoutroses:flint_bullet', 'minecraft:flint')
  ammo('6x gunswithoutroses:iron_bullet', 'minecraft:iron_ingot')
  ammo('6x gunswithoutroses:amethyst_bullet', 'minecraft:amethyst_shard')
  ammo('6x gunswithoutrosesadditions:froststeel_bullet', 'undergarden:froststeel_ingot')

 function royalammo(output, royalammoInput) {
    event.shaped(output, [
      ' I ',
      'IBI',
      ' IG'
    ], {
      B: 'warriorsofpastepoch:musket_ammo',
      G: 'royalvariations:royal_gunpowder',
      I: royalammoInput
    })
  }
  //Flint Bullet, Iron Bullet, Amethyst Bullet, Froststeel Bullet (Wersja Royal)
  royalammo('18x gunswithoutroses:flint_bullet', 'minecraft:flint')
  royalammo('18x gunswithoutroses:iron_bullet', 'minecraft:iron_ingot')
  royalammo('18x gunswithoutroses:amethyst_bullet', 'minecraft:amethyst_shard')
  royalammo('18x gunswithoutrosesadditions:froststeel_bullet', 'undergarden:froststeel_ingot')


 //SPLUWY
 //Iron Gun
 event.remove({ id: 'gunswithoutroses:iron_gun' })
 event.recipes.createMechanicalCrafting('gunswithoutroses:iron_gun', // Output
     [
         'I  ',
         'SIT',
         ' FI'
     ], 
     {
         I: 'create:iron_sheet',
         S: 'minecraft:stick',
         T: 'create:precision_mechanism',
         F: 'warriorsofpastepoch:pistol'
     })

//Gold Gun
event.remove({ id: 'gunswithoutroses:gold_gun' })
event.recipes.createMechanicalCrafting('gunswithoutroses:gold_gun', // Output
    [
        'I  ',
        'SIT',
        ' FI'
    ], 
    {
        I: 'create:golden_sheet',
        S: 'minecraft:stick',
        T: 'create:precision_mechanism',
        F: 'warriorsofpastepoch:pistol'
    })

 //Blaze Gun
 event.remove({ id: 'gunswithoutroses:blaze_gun' })
 event.recipes.createMechanicalCrafting('gunswithoutroses:blaze_gun', // Output
     [
         'IS ',
         'SIT',
         ' FI'
     ], 
     {
         I: 'minecraft:nether_brick',
         S: 'minecraft:blaze_rod',
         T: 'mutantsbuff:flame_orb',
         F: 'gunswithoutroses:gold_gun'
     })

 //Gatling
 event.remove({ id: 'gunswithoutroses:diamond_gatling' })
 event.recipes.createMechanicalCrafting('gunswithoutroses:diamond_gatling', // Output
     [
         'DIT',
         'DBI',
         ' FB'
     ], 
     {
         D: 'minecraft:diamond',
         I: 'create:iron_sheet',
         T: 'create:precision_mechanism',
         B: 'minecraft:iron_block',
         F: 'warriorsofpastepoch:musket',
     })

 //Cataclysm Gatling
 //event.remove({ id: 'cataclysm:laser_gatling' })
 //event.shaped(
     //Item.of('cataclysm:laser_gatling', 1), // Output
     //[
         //'RI ',
         //'IBW',
         //'FWI'
     //], 
     //{
         //R: 'minecraft:redstone',
         //I: 'minecraft:iron_ingot',
         //B: 'minecraft:redstone_block',
         //W: 'cataclysm:witherite_ingot',
         //F: 'gunswithoutroses:diamond_gatling',
     //}
 //).id('dcx:laser_gatling');


})