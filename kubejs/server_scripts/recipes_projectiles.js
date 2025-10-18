ServerEvents.recipes(event => {
//[THROWN WEAPONS]
//Throwing Knife
event.remove({ id: 'sullysmod:crafting/throwing_knife' })
event.shaped(
    Item.of('sullysmod:throwing_knife', 6), // Output
    [
        ' T ',
        'S  ',
        '   '
    ], 
    {
        T: '#forge:teeth',
        S: '#forge:rods/wooden'
    }
).id('dcx:throwing_knife');

//Lightning Knife
event.shapeless(
    Item.of('aether:lightning_knife', 1), // Output
    [
        'irons_spellbooks:lightning_bottle',
        'caverns_and_chasms:kunai'
       ], 
).id('dcx:lighting_knife_kunai');

event.shapeless(
    Item.of('aether:lightning_knife', 1), // Output
    [
        'irons_spellbooks:lightning_bottle',
        'sullysmod:throwing_knife'
       ], 
).id('dcx:lighting_knife_knife');

//BOMBY
event.shapeless(
    Item.of('galosphere:silver_bomb', 2), // Output
    [
        '3x oreganized:silver_ingot',
        'betterarcheology:bomb'
       ], 
).id('custom:archbomb');

event.shapeless(
    Item.of('galosphere:silver_bomb', 2), // Output
    [
     '3x oreganized:silver_ingot',
     'supplementaries:bomb'
    ], 
        
).id('custom:supbomb');

event.shapeless(
    Item.of('galosphere:silver_bomb', 16), // Output
    [
        '3x oreganized:silver_ingot',
        'supplementaries:bomb_blue'
       ], 
).id('custom:supbluebomb');

//STRZAŁY
    //Ancient Arrowhead
event.remove({ id: 'sullysmod:crafting/arrow_from_arrowhead' })
event.shaped(
    Item.of('overgeared:steel_arrow', 12), // Output
    [
        ' A ',
        ' S  ',
        ' F '
    ], 
    {
        A: 'sullysmod:arrowhead',
        S: '#forge:rods/wooden',
        F: 'minecraft:feather'
    })
event.shaped(
    Item.of('caverns_and_chasms:large_arrow', 4), // Output
    [
       ' I ',
       'ISI',
       ' I '
    ], 
    {
        S: 'oreganized:silver_ingot',
       I: 'minecraft:arrow'
    }).id('dcx:arrow_to_heavyarrow');
event.shaped(
    Item.of('overgeared:iron_arrow', 4), // Output
    [
       ' I ',
       'ISI',
       ' I '
    ], 
    {
        S: 'overgeared:iron_arrow_head',
       I: 'minecraft:arrow'
    })
event.shaped(
    Item.of('overgeared:steel_arrow', 4), // Output
    [
       ' I ',
       'ISI',
       ' I '
    ], 
    {
        S: 'overgeared:steel_arrow_head',
       I: 'minecraft:arrow'
    })

//Spectral Arrow
    //event.remove({ output: 'minecraft:spectral_arrow' })
    //event.custom({
    //    "type": "overgeared:fletching",
    //    "material": {
    //        "shaft": {
    //            "item": "minecraft:arrow"
    //        },
    //        "tip": {
    //            "item": "minecraft:glowstone_dust",
    //            "count": 4
    //        }
    //    },
    //    "result": {
    //        "count": 2,
    //        "item": "minecraft:spectral_arrow"
    //    }
    //})
//Srebrne strzały
    //event.remove({ output: "caverns_and_chasms:large_arrow" })
    //event.custom({
    //    "type": "overgeared:fletching",
    //    "material": {
    //        "feather": {
    //            "item": "oreganized:silver_nugget"
    //        },
    //        "shaft": {
    //            "item": "minecraft:arrow"
    //        },
    //        "tip": {
    //            "item": "oreganized:silver_ingot"
    //        }
    //    },
    //    "result": {
    //        "count": 4,
    //        "item": "caverns_and_chasms:large_arrow"
    //    }
    //})
//event.shaped(
//    Item.of('caverns_and_chasms:large_arrow', 4), // Output
//    [
//        ' I ',
//        'ISI',
//        ' I '
//    ], 
//    {
//        S: 'oreganized:silver_ingot',
//        I: 'minecraft:arrow'
//    }
//    ).id('dcx:arrow_to_heavyarrow');

})