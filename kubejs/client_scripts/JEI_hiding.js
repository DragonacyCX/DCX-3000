var items_to_remove = 
[
//Caverns & Chasms
    'caverns_and_chasms:toolbox',
    'caverns_and_chasms:exposed_toolbox',
    'caverns_and_chasms:weathered_toolbox',
    'caverns_and_chasms:oxidized_toolbox',
    'caverns_and_chasms:waxed_toolbox',
    'caverns_and_chasms:waxed_exposed_toolbox',
    'caverns_and_chasms:waxed_weathered_toolbox',
    'caverns_and_chasms:waxed_oxidized_toolbox',
    'caverns_and_chasms:copper_pickaxe',
//Overgeared
    'overgeared:copper_sword',
    'overgeared:copper_axe',
    'overgeared:copper_shovel',
    'overgeared:copper_hoe',
    'overgeared:copper_smithing_hammer',
    'overgeared:smithing_hammer',
//Rough Gems
    'spelunkery:rough_cinnabar',
    'spelunkery:rough_diamond',
    'spelunkery:rough_lazurite',
    'spelunkery:rough_emerald',
    'st_gsoc:rough_spinel',
    'sullysmod:rough_jade',
//Bedrolle z Upgrade Aquatic
    'upgrade_aquatic:bedroll',
    'upgrade_aquatic:white_bedroll',
    'upgrade_aquatic:light_gray_bedroll',
    'upgrade_aquatic:gray_bedroll',
    'upgrade_aquatic:black_bedroll',
    'upgrade_aquatic:brown_bedroll',
    'upgrade_aquatic:red_bedroll',
    'upgrade_aquatic:orange_bedroll',
    'upgrade_aquatic:yellow_bedroll',
    'upgrade_aquatic:lime_bedroll',
    'upgrade_aquatic:green_bedroll',
    'upgrade_aquatic:cyan_bedroll',
    'upgrade_aquatic:light_blue_bedroll',
    'upgrade_aquatic:blue_bedroll',
    'upgrade_aquatic:purple_bedroll',
    'upgrade_aquatic:magenta_bedroll',
    'upgrade_aquatic:pink_bedroll',
//Warriors of the Past Epoch
    'warriorsofpastepoch:forgotten_steel_ingot',
    'warriorsofpastepoch:forgotten_steel_nugget',
    'warriorsofpastepoch:forgotten_steel',
    'warriorsofpastepoch:block_of_forgotten_steel',
    'warriorsofpastepoch:depositof_forgotten_steel',
    'warriorsofpastepoch:block_of_raw_forgotten_steel'
];

JEIEvents.hideItems(event => {
    items_to_remove.forEach(item => {
        event.hide(item)
    });
})
