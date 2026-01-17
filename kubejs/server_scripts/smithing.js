// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
  event.smithing('cataclysm:ignitium_boots', 'cataclysm:ignitium_upgrade_smithing_template', 'luckys_armory:heavy_netherite_armor_boots', 'cataclysm:ignitium_ingot')
  event.smithing('cataclysm:ignitium_helmet', 'cataclysm:ignitium_upgrade_smithing_template', 'luckys_armory:heavy_netherite_armor_helmet', 'cataclysm:ignitium_ingot')
  event.smithing('cataclysm:ignitium_chestplate', 'cataclysm:ignitium_upgrade_smithing_template', 'luckys_armory:heavy_netherite_armor_chestplate', 'cataclysm:ignitium_ingot')
  event.smithing('cataclysm:ignitium_leggings', 'cataclysm:ignitium_upgrade_smithing_template', 'luckys_armory:heavy_netherite_armor_leggings', 'cataclysm:ignitium_ingot')

//TARCZE
  //Drewno
  event.smithing('spartanshields:wooden_tower_shield', 'luckys_armory:smithing_template_leather_upgrade', 'spartanshields:wooden_basic_shield', 'quark:stick_block')
  event.smithing('spartanshields:wooden_basic_shield', 'luckys_armory:smithing_template_leather_upgrade', 'spartanshields:wooden_tower_shield', 'quark:stick_block')

  //Żelazo
  event.smithing('spartanshields:iron_tower_shield', 'elwmety:iron_template', 'spartanshields:iron_basic_shield', 'minecraft:iron_block')
  event.smithing('spartanshields:iron_basic_shield', 'elwmety:iron_template', 'spartanshields:iron_tower_shield', 'minecraft:iron_block')

  //Diament
  event.smithing('spartanshields:diamond_tower_shield', 'elwmety:diamond_template', 'spartanshields:diamond_basic_shield', 'minecraft:diamond_block')
  event.smithing('spartanshields:diamond_basic_shield', 'elwmety:diamond_template', 'spartanshields:diamond_tower_shield', 'minecraft:diamond_block')

//ZBROJE

  // Zbroja Leather > Chainmail
  event.smithing('minecraft:chainmail_helmet', 'elwmety:iron_template', 'minecraft:leather_helmet', 'minecraft:chain')
  event.smithing('minecraft:chainmail_chestplate', 'elwmety:iron_template', 'minecraft:leather_chestplate', 'minecraft:chain')
  event.smithing('minecraft:chainmail_leggings', 'elwmety:iron_template', 'minecraft:leather_leggings', 'minecraft:chain')
  event.smithing('minecraft:chainmail_boots', 'elwmety:iron_template', 'minecraft:leather_boots', 'minecraft:chain')

  // Zbroja Chainmail > Iron
  event.smithing('minecraft:iron_helmet', 'elwmety:iron_template', 'minecraft:chainmail_helmet', 'minecraft:iron_block')
  event.smithing('minecraft:iron_chestplate', 'elwmety:iron_template', 'minecraft:chainmail_chestplate', 'minecraft:iron_block')
  event.smithing('minecraft:iron_leggings', 'elwmety:iron_template', 'minecraft:chainmail_leggings', 'minecraft:iron_block')
  event.smithing('minecraft:iron_boots', 'elwmety:iron_template', 'minecraft:chainmail_boots', 'minecraft:iron_block')

  // Upgrady do Ciężkich Zbroi
  event.smithing('luckys_armory:heavy_netherite_armor_helmet', 'elwmety:netherite_template', 'luckys_armory:heavy_diamond_armor_helmet', 'minecraft:netherite_ingot')
  event.smithing('luckys_armory:heavy_netherite_armor_chestplate', 'elwmety:netherite_template', 'luckys_armory:heavy_diamond_armor_chestplate', 'minecraft:netherite_ingot')
  event.smithing('luckys_armory:heavy_netherite_armor_leggings', 'elwmety:netherite_template', 'luckys_armory:heavy_diamond_armor_leggings', 'minecraft:netherite_ingot')
  event.smithing('luckys_armory:heavy_netherite_armor_boots', 'elwmety:netherite_template', 'luckys_armory:heavy_diamond_armor_boots', 'minecraft:netherite_ingot')

  event.smithing('luckys_armory:heavy_diamond_armor_helmet', 'elwmety:diamond_template', 'minecraft:diamond_helmet', 'minecraft:diamond_block')
  event.smithing('luckys_armory:heavy_diamond_armor_chestplate', 'elwmety:diamond_template', 'minecraft:diamond_chestplate', 'minecraft:diamond_block')
  event.smithing('luckys_armory:heavy_diamond_armor_leggings', 'elwmety:diamond_template', 'minecraft:diamond_leggings', 'minecraft:diamond_block')
  event.smithing('luckys_armory:heavy_diamond_armor_boots', 'elwmety:diamond_template', 'minecraft:diamond_boots', 'minecraft:diamond_block')

  event.smithing('luckys_armory:heavy_iron_armor_helmet', 'elwmety:iron_template', 'minecraft:iron_helmet', 'minecraft:iron_block')
  event.smithing('luckys_armory:heavy_iron_armor_chestplate', 'elwmety:iron_template', 'minecraft:iron_chestplate', 'minecraft:iron_block')
  event.smithing('luckys_armory:heavy_iron_armor_leggings', 'elwmety:iron_template', 'minecraft:iron_leggings', 'minecraft:iron_block')
  event.smithing('luckys_armory:heavy_iron_armor_boots', 'elwmety:iron_template', 'minecraft:iron_boots', 'minecraft:iron_block')

  event.smithing('luckys_armory:heavy_golden_armor_helmet', 'elwmety:gold_template', 'minecraft:golden_helmet', 'minecraft:gold_block')
  event.smithing('luckys_armory:heavy_golden_armor_chestplate', 'elwmety:gold_template', 'minecraft:golden_chestplate', 'minecraft:gold_block')
  event.smithing('luckys_armory:heavy_golden_armor_leggings', 'elwmety:gold_template', 'minecraft:golden_leggings', 'minecraft:gold_block')
  event.smithing('luckys_armory:heavy_golden_armor_boots', 'elwmety:gold_template', 'minecraft:golden_boots', 'minecraft:gold_block')

  // Upgrady Maga
  event.smithing('irons_spellbooks:wandering_magician_helmet', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_helmet', 'irons_spellbooks:arcane_essence')
  event.smithing('irons_spellbooks:wandering_magician_chestplate', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_chestplate', 'irons_spellbooks:arcane_essence')
  event.smithing('irons_spellbooks:wandering_magician_leggings', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_leggings', 'irons_spellbooks:arcane_essence')
  event.smithing('irons_spellbooks:wandering_magician_boots', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_boots', 'irons_spellbooks:arcane_essence')

  // Upgrady Ninja
  event.smithing('armoroftheages:japanese_light_armor_head', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_helmet', 'armoroftheages:japanese_light_armor_head')
  event.smithing('armoroftheages:japanese_light_armor_chest', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_chestplate', 'armoroftheages:japanese_light_armor_chest')
  event.smithing('armoroftheages:japanese_light_armor_legs', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_leggings', 'armoroftheages:japanese_light_armor_legs')
  event.smithing('armoroftheages:japanese_light_armor_feet', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_boots', 'armoroftheages:japanese_light_armor_feet')

  event.smithing('alexsmobs:frontier_cap', 'elwmety:iron_template', 'minecraft:leather_helmet', 'alexsmobs:frontier_cap')
  event.smithing('alexsmobs:frontier_cap', 'elwmety:iron_template', 'minecraft:chainmail_helmet', 'alexsmobs:frontier_cap')
  
  event.smithing('armoroftheages:japanese_light_armor_head', 'elwmety:iron_template', 'minecraft:chainmail_helmet', 'armoroftheages:japanese_light_armor_head')
  event.smithing('armoroftheages:japanese_light_armor_chest', 'elwmety:iron_template', 'minecraft:chainmail_chestplate', 'armoroftheages:japanese_light_armor_chest')
  event.smithing('armoroftheages:japanese_light_armor_legs', 'elwmety:iron_template', 'minecraft:chainmail_leggings', 'armoroftheages:japanese_light_armor_legs')
  event.smithing('armoroftheages:japanese_light_armor_feet', 'elwmety:iron_template', 'minecraft:chainmail_boots', 'armoroftheages:japanese_light_armor_feet')

  //Upgrady Vikinga
  event.smithing('luckys_armory:plated_armor_helmet', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_helmet', 'luckys_armory:plated_armor_helmet')
  event.smithing('luckys_armory:plated_armor_chestplate', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_chestplate', 'luckys_armory:plated_armor_chestplate')
  event.smithing('luckys_armory:plated_armor_leggings', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_leggings', 'luckys_armory:plated_armor_leggings')
  event.smithing('luckys_armory:plated_armor_boots', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_boots', 'luckys_armory:plated_armor_boots')
  
  event.smithing('luckys_armory:plated_armor_helmet', 'elwmety:iron_template', 'minecraft:chainmail_helmet', 'luckys_armory:plated_armor_helmet')
  event.smithing('luckys_armory:plated_armor_chestplate', 'elwmety:iron_template', 'minecraft:chainmail_chestplate', 'luckys_armory:plated_armor_chestplate')
  event.smithing('luckys_armory:plated_armor_leggings', 'elwmety:iron_template', 'minecraft:chainmail_leggings', 'luckys_armory:plated_armor_leggings')
  event.smithing('luckys_armory:plated_armor_boots', 'elwmety:iron_template', 'minecraft:chainmail_boots', 'luckys_armory:plated_armor_boots')

  //Upgrady Knighta
  event.smithing('armoroftheages:iron_plate_armor_head', 'elwmety:iron_template', 'minecraft:iron_helmet', 'armoroftheages:iron_plate_armor_head')
  event.smithing('armoroftheages:iron_plate_armor_chest', 'elwmety:iron_template', 'minecraft:iron_chestplate', 'armoroftheages:iron_plate_armor_chest')
  event.smithing('armoroftheages:iron_plate_armor_legs', 'elwmety:iron_template', 'minecraft:iron_leggings', 'armoroftheages:iron_plate_armor_legs')
  event.smithing('armoroftheages:iron_plate_armor_feet', 'elwmety:iron_template', 'minecraft:iron_boots', 'armoroftheages:iron_plate_armor_feet')

  event.smithing('cataclysm:monstrous_helm', 'minecraft:netherite_upgrade_smithing_template', 'mowziesmobs:wrought_helmet', 'cataclysm:monstrous_horn')

//BRONIE

//Minicrossbow w Crossbow
event.smithing('minecraft:crossbow', 'elwmety:iron_template', 'hunters_return:mini_crossbow', 'quark:stick_block')

event.smithing('blue_skies:diopside_sword', 'elwmety:gold_template', 'blue_skies:diopside/cutlass', 'blue_skies:diopside_block')
event.smithing('blue_skies:charoite_sword', 'elwmety:gold_template', 'blue_skies:charoite/cutlass', 'blue_skies:charoite_block')

// Ścieżka Miecz > (Longsword jest poniżej), Cutlass, Rapier, Khopesh, MiniKatana
  event.smithing('simplyswords:iron_cutlass', 'elwmety:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_cutlass', 'elwmety:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_cutlass', 'elwmety:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_cutlass', 'elwmety:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_rapier', 'elwmety:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_rapier', 'elwmety:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_rapier', 'elwmety:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_rapier', 'elwmety:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

  event.smithing('simplymore:iron_khopesh', 'elwmety:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplymore:gold_khopesh', 'elwmety:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_khopesh', 'elwmety:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_khopesh', 'elwmety:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

// Ścieżka Dagger (> Knife) > Sword > Longsword > Claymore > Grandsword
  event.smithing('minecraft:iron_sword', 'elwmety:iron_template', 'basicweapons:iron_dagger', 'minecraft:iron_block')
  event.smithing('minecraft:golden_sword', 'elwmety:gold_template', 'basicweapons:golden_dagger', 'minecraft:gold_block')
  event.smithing('minecraft:diamond_sword', 'elwmety:diamond_template', 'basicweapons:diamond_dagger', 'minecraft:diamond_block')
  event.smithing('minecraft:netherite_sword', 'elwmety:netherite_template', 'basicweapons:netherite_dagger', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_longsword', 'elwmety:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_longsword', 'elwmety:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_longsword', 'elwmety:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_longsword', 'elwmety:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_claymore', 'elwmety:iron_template', 'simplyswords:iron_longsword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_claymore', 'elwmety:gold_template', 'simplyswords:gold_longsword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_claymore', 'elwmety:diamond_template', 'simplyswords:diamond_longsword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_claymore', 'elwmety:netherite_template', 'simplyswords:netherite_longsword', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_claymore', 'elwmety:netherite_template', 'simplyswords:runic_longsword', 'minecraft:diamond_block')

  event.smithing('simplymore:iron_grandsword', 'elwmety:iron_template', 'simplyswords:iron_claymore', 'minecraft:iron_block')
  event.smithing('simplymore:gold_grandsword', 'elwmety:gold_template', 'simplyswords:gold_claymore', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_grandsword', 'elwmety:diamond_template', 'simplyswords:diamond_claymore', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_grandsword', 'elwmety:netherite_template', 'simplyswords:netherite_claymore', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_grandsword', 'elwmety:netherite_template', 'simplyswords:runic_claymore', 'minecraft:diamond_block')

// Ścieżka Dagger > KitchenKnife
  event.smithing('farmersdelight:iron_knife', 'elwmety:iron_template', 'basicweapons:iron_dagger', 'minecraft:iron_block')
  event.smithing('farmersdelight:golden_knife', 'elwmety:gold_template', 'basicweapons:golden_dagger', 'minecraft:gold_block')
  event.smithing('farmersdelight:diamond_knife', 'elwmety:diamond_template', 'basicweapons:diamond_dagger', 'minecraft:diamond_block')
  event.smithing('farmersdelight:netherite_knife', 'elwmety:netherite_template', 'basicweapons:netherite_dagger', 'minecraft:netherite_block')

// Ścieżka Knife > Dagger > Sai > Rapier > Lance
  event.smithing('simplyswords:iron_sai', 'elwmety:iron_template', 'basicweapons:iron_dagger', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_sai', 'elwmety:gold_template', 'basicweapons:golden_dagger', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_sai', 'elwmety:diamond_template', 'basicweapons:diamond_dagger', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_sai', 'elwmety:netherite_template', 'basicweapons:netherite_dagger', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_sai', 'elwmety:netherite_template', 'simplymore:runic_backhand_blade', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_rapier', 'elwmety:iron_template', 'simplyswords:iron_sai', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_rapier', 'elwmety:gold_template', 'simplyswords:gold_sai', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_rapier', 'elwmety:diamond_template', 'simplyswords:diamond_sai', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_rapier', 'elwmety:netherite_template', 'simplyswords:netherite_sai', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_rapier', 'elwmety:netherite_template', 'simplyswords:runic_sai', 'minecraft:diamond_block')

  event.smithing('simplymore:iron_lance', 'elwmety:iron_template', 'simplyswords:iron_rapier', 'minecraft:iron_block')
  event.smithing('simplymore:gold_lance', 'elwmety:gold_template', 'simplyswords:gold_rapier', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_lance', 'elwmety:diamond_template', 'simplyswords:diamond_rapier', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_lance', 'elwmety:netherite_template', 'simplyswords:netherite_rapier', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_lance', 'elwmety:netherite_template', 'simplyswords:runic_rapier', 'minecraft:diamond_block')

//Ścieżka MiniKatana > Katana > Great Katana
  event.smithing('simplymore:iron_great_katana', 'elwmety:iron_template', 'simplyswords:iron_katana', 'minecraft:iron_block')
  event.smithing('simplymore:gold_great_katana', 'elwmety:gold_template', 'simplyswords:gold_katana', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_great_katana', 'elwmety:diamond_template', 'simplyswords:diamond_katana', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_great_katana', 'elwmety:netherite_template', 'simplyswords:netherite_katana', 'minecraft:netherite_block')

// Ścieżka Chakram > Deer Horns > Warglaive
  event.smithing('simplymore:iron_deer_horns', 'elwmety:iron_template', 'simplyswords:iron_chakram', 'minecraft:iron_block')
  event.smithing('simplymore:gold_deer_horns', 'elwmety:gold_template', 'simplyswords:gold_chakram', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_deer_horns', 'elwmety:diamond_template', 'simplyswords:diamond_chakram', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_deer_horns', 'elwmety:netherite_template', 'simplyswords:netherite_chakram', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_deer_horns', 'elwmety:netherite_template', 'simplyswords:runic_chakram', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_warglaive', 'elwmety:iron_template', 'simplymore:iron_deer_horns', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_warglaive', 'elwmety:gold_template', 'simplymore:gold_deer_horns', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_warglaive', 'elwmety:diamond_template', 'simplymore:diamond_deer_horns', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_warglaive', 'elwmety:netherite_template', 'simplymore:netherite_deer_horns', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_warglaive', 'elwmety:netherite_template', 'simplymore:runic_deer_horns', 'minecraft:diamond_block')

// Ścieżka Kosy (hoe, khopesh lub warglaive)
  event.smithing('simplyswords:iron_scythe', 'elwmety:iron_template', 'minecraft:iron_hoe', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_scythe', 'elwmety:gold_template', 'minecraft:golden_hoe', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_scythe', 'elwmety:diamond_template', 'minecraft:diamond_hoe', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_scythe', 'elwmety:netherite_template', 'minecraft:netherite_hoe', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_scythe', 'elwmety:iron_template', 'simplyswords:iron_warglaive', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_scythe', 'elwmety:gold_template', 'simplyswords:gold_warglaive', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_scythe', 'elwmety:diamond_template', 'simplyswords:diamond_warglaive', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_scythe', 'elwmety:netherite_template', 'simplyswords:netherite_warglaive', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_scythe', 'elwmety:netherite_template', 'simplyswords:runic_warglaive', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_scythe', 'elwmety:iron_template', 'simplymore:iron_khopesh', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_scythe', 'elwmety:gold_template', 'simplymore:gold_khopesh', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_scythe', 'elwmety:diamond_template', 'simplymore:diamond_khopesh', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_scythe', 'elwmety:netherite_template', 'simplymore:netherite_khopesh', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_scythe', 'elwmety:netherite_template', 'simplymore:runic_khopesh', 'minecraft:diamond_block')

// Ścieżka Pernach <> Club > Hammer > Warhammer > Greathammer
  event.smithing('basicweapons:iron_club', 'elwmety:iron_template', 'simplymore:iron_pernach', 'minecraft:iron_block')
  event.smithing('basicweapons:golden_club', 'elwmety:gold_template', 'simplymore:gold_pernach', 'minecraft:gold_block')
  event.smithing('basicweapons:diamond_club', 'elwmety:diamond_template', 'simplymore:diamond_pernach', 'minecraft:diamond_block')
  event.smithing('basicweapons:netherite_club', 'elwmety:netherite_template', 'simplymore:netherite_pernach', 'minecraft:netherite_block')

  event.smithing('simplymore:iron_pernach', 'elwmety:iron_template', 'basicweapons:iron_club', 'minecraft:iron_block')
  event.smithing('simplymore:gold_pernach', 'elwmety:gold_template', 'basicweapons:golden_club', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_pernach', 'elwmety:diamond_template', 'basicweapons:diamond_club', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_pernach', 'elwmety:netherite_template', 'basicweapons:netherite_club', 'minecraft:netherite_block')

  event.smithing('basicweapons:iron_hammer', 'elwmety:iron_template', 'basicweapons:iron_club', 'minecraft:iron_block')
  event.smithing('basicweapons:golden_hammer', 'elwmety:gold_template', 'basicweapons:golden_club', 'minecraft:gold_block')
  event.smithing('basicweapons:diamond_hammer', 'elwmety:diamond_template', 'basicweapons:diamond_club', 'minecraft:diamond_block')
  event.smithing('basicweapons:netherite_hammer', 'elwmety:netherite_template', 'basicweapons:netherite_club', 'minecraft:netherite_block')

// Ścieżka Axe > Battleaxe > Greataxe
 
// Ścieżka BasicSpear > SimplySpear > GreatSpear > Glaive > Halberd
  event.smithing('simplyswords:iron_spear', 'elwmety:iron_template', 'basicweapons:iron_spear', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_spear', 'elwmety:gold_template', 'basicweapons:golden_spear', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_spear', 'elwmety:diamond_template', 'basicweapons:diamond_spear', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_spear', 'elwmety:netherite_template', 'basicweapons:netherite_spear', 'minecraft:netherite_block')

  event.smithing('simplymore:iron_great_spear', 'elwmety:iron_template', 'simplyswords:iron_spear', 'minecraft:iron_block')
  event.smithing('simplymore:gold_great_spear', 'elwmety:gold_template', 'simplyswords:gold_spear', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_great_spear', 'elwmety:diamond_template', 'simplyswords:diamond_spear', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_great_spear', 'elwmety:netherite_template', 'simplyswords:netherite_spear', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_great_spear', 'elwmety:netherite_template', 'simplyswords:runic_spear', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_glaive', 'elwmety:iron_template', 'simplymore:iron_great_spear', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_glaive', 'elwmety:gold_template', 'simplymore:gold_great_spear', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_glaive', 'elwmety:diamond_template', 'simplymore:diamond_great_spear', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_glaive', 'elwmety:netherite_template', 'simplymore:netherite_great_spear', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_glaive', 'elwmety:netherite_template', 'simplymore:runic_great_spear', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_halberd', 'elwmety:iron_template', 'simplyswords:iron_glaive', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_halberd', 'elwmety:gold_template', 'simplyswords:gold_glaive', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_halberd', 'elwmety:diamond_template', 'simplyswords:diamond_glaive', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_halberd', 'elwmety:netherite_template', 'simplyswords:netherite_glaive', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_halberd', 'elwmety:netherite_template', 'simplyswords:runic_glaive', 'minecraft:diamond_block')

//BW Spear > Great Spear
  event.smithing('simplymore:iron_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:iron_spear', 'minecraft:iron_block')
  event.smithing('simplymore:gold_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:golden_spear', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:diamond_spear', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:netherite_spear', 'minecraft:netherite_block')

// Ścieżka Cutlass, Khopesh > Warglaive
  event.smithing('simplyswords:iron_warglaive', 'elwmety:iron_template', 'simplyswords:iron_cutlass', 'simplyswords:iron_cutlass')
  event.smithing('simplyswords:gold_warglaive', 'elwmety:gold_template', 'simplyswords:gold_cutlass', 'simplyswords:gold_cutlass')
  event.smithing('simplyswords:diamond_warglaive', 'elwmety:diamond_template', 'simplyswords:diamond_cutlass', 'simplyswords:diamond_cutlass')
  event.smithing('simplyswords:netherite_warglaive', 'elwmety:netherite_template', 'simplyswords:netherite_cutlass', 'simplyswords:netherite_cutlass')
  event.smithing('simplyswords:runic_warglaive', 'elwmety:netherite_template', 'simplyswords:runic_cutlass', 'simplyswords:diamond_cutlass')

  event.smithing('simplyswords:iron_warglaive', 'elwmety:iron_template', 'simplymore:iron_khopesh', 'simplymore:iron_khopesh')
  event.smithing('simplyswords:gold_warglaive', 'elwmety:gold_template', 'simplymore:gold_khopesh', 'simplymore:gold_khopesh')
  event.smithing('simplyswords:diamond_warglaive', 'elwmety:diamond_template', 'simplymore:diamond_khopesh', 'simplymore:diamond_khopesh')
  event.smithing('simplyswords:netherite_warglaive', 'elwmety:netherite_template', 'simplymore:netherite_khopesh', 'simplymore:netherite_khopesh')
  event.smithing('simplyswords:runic_warglaive', 'elwmety:netherite_template', 'simplymore:diamond_khopesh', 'simplymore:diamond_khopesh')

// Ścieżka BasicQuarterstaff > MoreQuarterstaff
  event.smithing('simplymore:iron_quarterstaff', 'elwmety:iron_template', 'basicweapons:iron_quarterstaff', 'minecraft:iron_block')
  event.smithing('simplymore:gold_quarterstaff', 'elwmety:gold_template', 'basicweapons:golden_quarterstaff', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_quarterstaff', 'elwmety:diamond_template', 'basicweapons:diamond_quarterstaff', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_quarterstaff', 'elwmety:netherite_template', 'basicweapons:netherite_quarterstaff', 'minecraft:netherite_block')

// Ścieżka Sword > Twinblade
  event.smithing('simplyswords:iron_twinblade', 'elwmety:iron_template', 'minecraft:iron_sword', 'minecraft:iron_sword')
  event.smithing('simplyswords:gold_twinblade', 'elwmety:gold_template', 'minecraft:golden_sword', 'minecraft:golden_sword')
  event.smithing('simplyswords:diamond_twinblade', 'elwmety:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_sword')
  event.smithing('simplyswords:netherite_twinblade', 'elwmety:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_sword')
  event.smithing('simplyswords:runic_twinblade', 'elwmety:netherite_template', 'simplyswords:runic_longsword', 'minecraft:diamond_sword')
  
// Bronie Stone > Iron
  event.smithing('minecraft:iron_sword', 'elwmety:iron_template', 'minecraft:stone_sword', 'minecraft:iron_block')
  event.smithing('minecraft:iron_axe', 'elwmety:iron_template', 'minecraft:stone_axe', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_dagger', 'elwmety:iron_template', 'basicweapons:stone_dagger', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_spear', 'elwmety:iron_template', 'basicweapons:stone_spear', 'minecraft:iron_block')
  event.smithing('farmersdelight:iron_knife', 'elwmety:iron_template', 'farmersdelight:flint_knife', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_club', 'elwmety:iron_template', 'basicweapons:stone_club', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_hammer', 'elwmety:iron_template', 'basicweapons:stone_hammer', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_quarterstaff', 'elwmety:iron_template', 'basicweapons:stone_quarterstaff', 'minecraft:iron_block')
  //Narzędzia Stone > Iron
  event.smithing('minecraft:iron_pickaxe', 'elwmety:iron_template', 'minecraft:stone_pickaxe', 'minecraft:iron_block')
  event.smithing('minecraft:iron_axe', 'elwmety:iron_template', 'minecraft:stone_axe', 'minecraft:iron_block')
  event.smithing('minecraft:iron_shovel', 'elwmety:iron_template', 'minecraft:iron_shovel', 'minecraft:iron_block')
  event.smithing('minecraft:iron_hoe', 'elwmety:iron_template', 'minecraft:iron_hoe', 'minecraft:iron_block')

// Bronie Iron > Gold
  event.smithing('minecraft:golden_sword', 'elwmety:gold_template', 'minecraft:iron_sword', 'minecraft:gold_ingot')
  event.smithing('minecraft:golden_axe', 'elwmety:gold_template', 'minecraft:iron_axe', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_dagger', 'elwmety:gold_template', 'basicweapons:iron_dagger', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_spear', 'elwmety:gold_template', 'basicweapons:iron_spear', 'minecraft:gold_ingot')
  event.smithing('farmersdelight:golden_knife', 'elwmety:gold_template', 'farmersdelight:iron_knife', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_club', 'elwmety:gold_template', 'basicweapons:iron_club', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_hammer', 'elwmety:gold_template', 'basicweapons:iron_hammer', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_quarterstaff', 'elwmety:gold_template', 'basicweapons:iron_quarterstaff', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_chakram', 'elwmety:gold_template', 'simplyswords:iron_chakram', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_claymore', 'elwmety:gold_template', 'simplyswords:iron_claymore', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_cutlass', 'elwmety:gold_template', 'simplyswords:iron_cutlass', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_glaive', 'elwmety:gold_template', 'simplyswords:iron_glaive', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_greataxe', 'elwmety:gold_template', 'simplyswords:iron_greataxe', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_halberd', 'elwmety:gold_template', 'simplyswords:iron_halberd', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_katana', 'elwmety:gold_template', 'simplyswords:iron_katana', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_longsword', 'elwmety:gold_template', 'simplyswords:iron_longsword', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_rapier', 'elwmety:gold_template', 'simplyswords:iron_rapier', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_sai', 'elwmety:gold_template', 'simplyswords:iron_sai', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_scythe', 'elwmety:gold_template', 'simplyswords:iron_scythe', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_spear', 'elwmety:gold_template', 'simplyswords:iron_spear', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_twinblade', 'elwmety:gold_template', 'simplyswords:iron_twinblade', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_warglaive', 'elwmety:gold_template', 'simplyswords:iron_warglaive', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_greathammer', 'elwmety:gold_template', 'simplyswords:iron_greathammer', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_pernach', 'elwmety:gold_template', 'simplymore:iron_pernach', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_quarterstaff', 'elwmety:gold_template', 'simplymore:iron_quarterstaff', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_great_katana', 'elwmety:gold_template', 'simplymore:iron_great_katana', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_grandsword', 'elwmety:gold_template', 'simplymore:iron_grandsword', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_lance', 'elwmety:gold_template', 'simplymore:iron_lance', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_khopesh', 'elwmety:gold_template', 'simplymore:iron_khopesh', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_great_spear', 'elwmety:gold_template', 'simplymore:iron_great_spear', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_deer_horns', 'elwmety:gold_template', 'simplymore:iron_deer_horns', 'minecraft:gold_ingot')


  // Bronie Iron > Diamond
  event.smithing('minecraft:diamond_sword', 'elwmety:diamond_template', 'minecraft:iron_sword', 'minecraft:diamond')
  event.smithing('minecraft:diamond_axe', 'elwmety:diamond_template', 'minecraft:iron_axe', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_dagger', 'elwmety:diamond_template', 'basicweapons:iron_dagger', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_spear', 'elwmety:diamond_template', 'basicweapons:iron_spear', 'minecraft:diamond')
  event.smithing('farmersdelight:diamond_knife', 'elwmety:diamond_template', 'farmersdelight:iron_knife', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_club', 'elwmety:diamond_template', 'basicweapons:iron_club', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_hammer', 'elwmety:diamond_template', 'basicweapons:iron_hammer', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_quarterstaff', 'elwmety:diamond_template', 'basicweapons:iron_quarterstaff', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_chakram', 'elwmety:diamond_template', 'simplyswords:iron_chakram', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_claymore', 'elwmety:diamond_template', 'simplyswords:iron_claymore', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_cutlass', 'elwmety:diamond_template', 'simplyswords:iron_cutlass', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_glaive', 'elwmety:diamond_template', 'simplyswords:iron_glaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greataxe', 'elwmety:diamond_template', 'simplyswords:iron_greataxe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_halberd', 'elwmety:diamond_template', 'simplyswords:iron_halberd', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_katana', 'elwmety:diamond_template', 'simplyswords:iron_katana', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_longsword', 'elwmety:diamond_template', 'simplyswords:iron_longsword', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_rapier', 'elwmety:diamond_template', 'simplyswords:iron_rapier', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_sai', 'elwmety:diamond_template', 'simplyswords:iron_sai', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_scythe', 'elwmety:diamond_template', 'simplyswords:iron_scythe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_spear', 'elwmety:diamond_template', 'simplyswords:iron_spear', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_twinblade', 'elwmety:diamond_template', 'simplyswords:iron_twinblade', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_warglaive', 'elwmety:diamond_template', 'simplyswords:iron_warglaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greathammer', 'elwmety:diamond_template', 'simplyswords:iron_greathammer', 'minecraft:diamond')
  event.smithing('simplymore:diamond_pernach', 'elwmety:diamond_template', 'simplymore:iron_pernach', 'minecraft:diamond')
  event.smithing('simplymore:diamond_quarterstaff', 'elwmety:diamond_template', 'simplymore:iron_quarterstaff', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_katana', 'elwmety:diamond_template', 'simplymore:iron_great_katana', 'minecraft:diamond')
  event.smithing('simplymore:diamond_grandsword', 'elwmety:diamond_template', 'simplymore:iron_grandsword', 'minecraft:diamond')
  event.smithing('simplymore:diamond_lance', 'elwmety:diamond_template', 'simplymore:iron_lance', 'minecraft:diamond')
  event.smithing('simplymore:diamond_khopesh', 'elwmety:diamond_template', 'simplymore:iron_khopesh', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_spear', 'elwmety:diamond_template', 'simplymore:iron_great_spear', 'minecraft:diamond')
  event.smithing('simplymore:diamond_deer_horns', 'elwmety:diamond_template', 'simplymore:iron_deer_horns', 'minecraft:diamond')

  // Bronie Gold > Diamond
  event.smithing('minecraft:diamond_sword', 'elwmety:diamond_template', 'minecraft:golden_sword', 'minecraft:diamond')
  event.smithing('minecraft:diamond_axe', 'elwmety:diamond_template', 'minecraft:golden_axe', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_dagger', 'elwmety:diamond_template', 'basicweapons:golden_dagger', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_spear', 'elwmety:diamond_template', 'basicweapons:golden_spear', 'minecraft:diamond')
  event.smithing('farmersdelight:diamond_knife', 'elwmety:diamond_template', 'farmersdelight:golden_knife', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_club', 'elwmety:diamond_template', 'basicweapons:golden_club', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_hammer', 'elwmety:diamond_template', 'basicweapons:golden_hammer', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_quarterstaff', 'elwmety:diamond_template', 'basicweapons:golden_quarterstaff', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_chakram', 'elwmety:diamond_template', 'simplyswords:gold_chakram', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_claymore', 'elwmety:diamond_template', 'simplyswords:gold_claymore', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_cutlass', 'elwmety:diamond_template', 'simplyswords:gold_cutlass', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_glaive', 'elwmety:diamond_template', 'simplyswords:gold_glaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greataxe', 'elwmety:diamond_template', 'simplyswords:gold_greataxe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_halberd', 'elwmety:diamond_template', 'simplyswords:gold_halberd', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_katana', 'elwmety:diamond_template', 'simplyswords:gold_katana', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_longsword', 'elwmety:diamond_template', 'simplyswords:gold_longsword', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_rapier', 'elwmety:diamond_template', 'simplyswords:gold_rapier', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_sai', 'elwmety:diamond_template', 'simplyswords:gold_sai', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_scythe', 'elwmety:diamond_template', 'simplyswords:gold_scythe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_spear', 'elwmety:diamond_template', 'simplyswords:gold_spear', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_twinblade', 'elwmety:diamond_template', 'simplyswords:gold_twinblade', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_warglaive', 'elwmety:diamond_template', 'simplyswords:gold_warglaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greathammer', 'elwmety:diamond_template', 'simplyswords:gold_greathammer', 'minecraft:diamond')
  event.smithing('simplymore:diamond_pernach', 'elwmety:diamond_template', 'simplymore:gold_pernach', 'minecraft:diamond')
  event.smithing('simplymore:diamond_quarterstaff', 'elwmety:diamond_template', 'simplymore:gold_quarterstaff', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_katana', 'elwmety:diamond_template', 'simplymore:gold_great_katana', 'minecraft:diamond')
  event.smithing('simplymore:diamond_grandsword', 'elwmety:diamond_template', 'simplymore:gold_grandsword', 'minecraft:diamond')
  event.smithing('simplymore:diamond_lance', 'elwmety:diamond_template', 'simplymore:gold_lance', 'minecraft:diamond')
  event.smithing('simplymore:diamond_khopesh', 'elwmety:diamond_template', 'simplymore:gold_khopesh', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_spear', 'elwmety:diamond_template', 'simplymore:gold_great_spear', 'minecraft:diamond')
  event.smithing('simplymore:diamond_deer_horns', 'elwmety:diamond_template', 'simplymore:gold_deer_horns', 'minecraft:diamond')

  // Bronie Stal > Diamond
  event.smithing('simplyswords:diamond_longsword', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/longsword', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_twinblade', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/twinblade', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_rapier', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/rapier', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_katana', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/katana', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_sai', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/sai', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_spear', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/spear', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_glaive', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/glaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_warglaive', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/warglaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_cutlass', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/cutlass', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_claymore', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/claymore', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greataxe', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/greataxe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_chakram', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/chakram', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_scythe', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/scythe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_halberd', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/halberd', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greathammer', 'overgeared:diamond_upgrade_smithing_template', 'integrated_simply_swords:born_in_chaos/dark_metal/greathammer', 'minecraft:diamond')

  // Bronie Diamond > Electrum
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/longsword' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/twinblade' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/rapier' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/katana' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/sai' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/spear' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/glaive' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/warglaive' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/cutlass' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/claymore' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/greataxe' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/chakram' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/scythe' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/halberd' })
  event.remove({ id: 'integrated_simply_swords:oreganized/electrum/greathammer' })
  event.smithing('integrated_simply_swords:oreganized/electrum/longsword', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_longsword', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/twinblade', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_twinblade', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/rapier', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_rapier', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/katana', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_katana', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/sai', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_sai', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/spear', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_spear', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/glaive', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_glaive', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/warglaive', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_warglaive', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/cutlass', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_cutlass', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/claymore', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_claymore', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/greataxe', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_greataxe', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/chakram', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_chakram', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/scythe', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_scythe', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/halberd', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_halberd', 'oreganized:electrum_ingot')
  event.smithing('integrated_simply_swords:oreganized/electrum/greathammer', 'oreganized:electrum_upgrade_smithing_template', 'simplyswords:diamond_greathammer', 'oreganized:electrum_ingot')

  // Bronie Diamond > Netherite
  event.smithing('minecraft:netherite_sword', 'elwmety:netherite_template', 'minecraft:diamond_sword', 'minecraft:netherite_ingot')
  event.smithing('minecraft:netherite_axe', 'elwmety:netherite_template', 'minecraft:diamond_axe', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_dagger', 'elwmety:netherite_template', 'basicweapons:diamond_dagger', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_spear', 'elwmety:netherite_template', 'basicweapons:diamond_spear', 'minecraft:netherite_ingot')
  event.smithing('farmersdelight:netherite_knife', 'elwmety:netherite_template', 'farmersdelight:diamond_knife', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_club', 'elwmety:netherite_template', 'basicweapons:diamond_club', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_hammer', 'elwmety:netherite_template', 'basicweapons:diamond_hammer', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_quarterstaff', 'elwmety:netherite_template', 'basicweapons:diamond_quarterstaff', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_chakram', 'elwmety:netherite_template', 'simplyswords:diamond_chakram', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_claymore', 'elwmety:netherite_template', 'simplyswords:diamond_claymore', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_cutlass', 'elwmety:netherite_template', 'simplyswords:diamond_cutlass', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_glaive', 'elwmety:netherite_template', 'simplyswords:diamond_glaive', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_greataxe', 'elwmety:netherite_template', 'simplyswords:diamond_greataxe', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_halberd', 'elwmety:netherite_template', 'simplyswords:diamond_halberd', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_katana', 'elwmety:netherite_template', 'simplyswords:diamond_katana', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_longsword', 'elwmety:netherite_template', 'simplyswords:diamond_longsword', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_rapier', 'elwmety:netherite_template', 'simplyswords:diamond_rapier', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_sai', 'elwmety:netherite_template', 'simplyswords:diamond_sai', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_scythe', 'elwmety:netherite_template', 'simplyswords:diamond_scythe', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_spear', 'elwmety:netherite_template', 'simplyswords:diamond_spear', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_twinblade', 'elwmety:netherite_template', 'simplyswords:diamond_twinblade', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_warglaive', 'elwmety:netherite_template', 'simplyswords:diamond_warglaive', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_greathammer', 'elwmety:netherite_template', 'simplyswords:diamond_greathammer', 'minecraft:netherite_ingot')
  event.smithing('simplymore:netherite_pernach', 'elwmety:netherite_template', 'simplymore:diamond_pernach', 'minecraft:diamond')
  event.smithing('simplymore:netherite_quarterstaff', 'elwmety:netherite_template', 'simplymore:diamond_quarterstaff', 'minecraft:diamond')
  event.smithing('simplymore:netherite_great_katana', 'elwmety:netherite_template', 'simplymore:diamond_great_katana', 'minecraft:diamond')
  event.smithing('simplymore:netherite_grandsword', 'elwmety:netherite_template', 'simplymore:diamond_grandsword', 'minecraft:diamond')
  event.smithing('simplymore:netherite_lance', 'elwmety:netherite_template', 'simplymore:diamond_lance', 'minecraft:diamond')
  event.smithing('simplymore:netherite_khopesh', 'elwmety:netherite_template', 'simplymore:diamond_khopesh', 'minecraft:diamond')
  event.smithing('simplymore:netherite_great_spear', 'elwmety:netherite_template', 'simplymore:diamond_great_spear', 'minecraft:diamond')
  event.smithing('simplymore:netherite_deer_horns', 'elwmety:netherite_template', 'simplymore:diamond_deer_horns', 'minecraft:diamond')

  // Inne Bronie Netherite > Runic
  event.smithing('simplymore:runic_backhand_blade', 'simplyswords:runic_tablet', 'basicweapons:netherite_dagger', 'minecraft:diamond')

// Wędki
  event.smithing('aquaculture:iron_fishing_rod', 'elwmety:iron_template', 'minecraft:fishing_rod', 'minecraft:iron_ingot')
  event.smithing('aquaculture:gold_fishing_rod', 'elwmety:gold_template', 'aquaculture:iron_fishing_rod', 'minecraft:gold_ingot')
  event.smithing('aquaculture:diamond_fishing_rod', 'elwmety:diamond_template', 'aquaculture:gold_fishing_rod', 'minecraft:diamond')
  event.smithing('aquaculture:neptunium_fishing_rod', 'minecraft:glow_ink_sac', 'aquaculture:diamond_fishing_rod', 'aquaculture:neptunium_ingot')

//Pędzle
  event.smithing('betterarcheology:iron_brush', 'elwmety:iron_template', 'minecraft:brush', 'minecraft:iron_ingot')
  event.smithing('betterarcheology:diamond_brush', 'elwmety:diamond_template', 'betterarcheology:iron_brush', 'minecraft:diamond')

})