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
  event.smithing('spartanshields:iron_tower_shield', 'kubejs:iron_template', 'spartanshields:iron_basic_shield', 'minecraft:iron_block')
  event.smithing('spartanshields:iron_basic_shield', 'kubejs:iron_template', 'spartanshields:iron_tower_shield', 'minecraft:iron_block')

  //Diament
  event.smithing('spartanshields:diamond_tower_shield', 'kubejs:diamond_template', 'spartanshields:diamond_basic_shield', 'minecraft:diamond_block')
  event.smithing('spartanshields:diamond_basic_shield', 'kubejs:diamond_template', 'spartanshields:diamond_tower_shield', 'minecraft:diamond_block')

//ZBROJE

  // Zbroja Leather > Chainmail
  event.smithing('minecraft:chainmail_helmet', 'kubejs:iron_template', 'minecraft:leather_helmet', 'minecraft:chain')
  event.smithing('minecraft:chainmail_chestplate', 'kubejs:iron_template', 'minecraft:leather_chestplate', 'minecraft:chain')
  event.smithing('minecraft:chainmail_leggings', 'kubejs:iron_template', 'minecraft:leather_leggings', 'minecraft:chain')
  event.smithing('minecraft:chainmail_boots', 'kubejs:iron_template', 'minecraft:leather_boots', 'minecraft:chain')

  // Zbroja Chainmail > Iron
  event.smithing('minecraft:iron_helmet', 'kubejs:iron_template', 'minecraft:chainmail_helmet', 'minecraft:iron_block')
  event.smithing('minecraft:iron_chestplate', 'kubejs:iron_template', 'minecraft:chainmail_chestplate', 'minecraft:iron_block')
  event.smithing('minecraft:iron_leggings', 'kubejs:iron_template', 'minecraft:chainmail_leggings', 'minecraft:iron_block')
  event.smithing('minecraft:iron_boots', 'kubejs:iron_template', 'minecraft:chainmail_boots', 'minecraft:iron_block')

  // Upgrady do Ciężkich Zbroi
  event.smithing('luckys_armory:heavy_netherite_armor_helmet', 'kubejs:netherite_template', 'luckys_armory:heavy_diamond_armor_helmet', 'minecraft:netherite_ingot')
  event.smithing('luckys_armory:heavy_netherite_armor_chestplate', 'kubejs:netherite_template', 'luckys_armory:heavy_diamond_armor_chestplate', 'minecraft:netherite_ingot')
  event.smithing('luckys_armory:heavy_netherite_armor_leggings', 'kubejs:netherite_template', 'luckys_armory:heavy_diamond_armor_leggings', 'minecraft:netherite_ingot')
  event.smithing('luckys_armory:heavy_netherite_armor_boots', 'kubejs:netherite_template', 'luckys_armory:heavy_diamond_armor_boots', 'minecraft:netherite_ingot')

  event.smithing('luckys_armory:heavy_diamond_armor_helmet', 'kubejs:diamond_template', 'minecraft:diamond_helmet', 'minecraft:diamond_block')
  event.smithing('luckys_armory:heavy_diamond_armor_chestplate', 'kubejs:diamond_template', 'minecraft:diamond_chestplate', 'minecraft:diamond_block')
  event.smithing('luckys_armory:heavy_diamond_armor_leggings', 'kubejs:diamond_template', 'minecraft:diamond_leggings', 'minecraft:diamond_block')
  event.smithing('luckys_armory:heavy_diamond_armor_boots', 'kubejs:diamond_template', 'minecraft:diamond_boots', 'minecraft:diamond_block')

  event.smithing('luckys_armory:heavy_iron_armor_helmet', 'kubejs:iron_template', 'minecraft:iron_helmet', 'minecraft:iron_block')
  event.smithing('luckys_armory:heavy_iron_armor_chestplate', 'kubejs:iron_template', 'minecraft:iron_chestplate', 'minecraft:iron_block')
  event.smithing('luckys_armory:heavy_iron_armor_leggings', 'kubejs:iron_template', 'minecraft:iron_leggings', 'minecraft:iron_block')
  event.smithing('luckys_armory:heavy_iron_armor_boots', 'kubejs:iron_template', 'minecraft:iron_boots', 'minecraft:iron_block')

  event.smithing('luckys_armory:heavy_golden_armor_helmet', 'kubejs:gold_template', 'minecraft:golden_helmet', 'minecraft:gold_block')
  event.smithing('luckys_armory:heavy_golden_armor_chestplate', 'kubejs:gold_template', 'minecraft:golden_chestplate', 'minecraft:gold_block')
  event.smithing('luckys_armory:heavy_golden_armor_leggings', 'kubejs:gold_template', 'minecraft:golden_leggings', 'minecraft:gold_block')
  event.smithing('luckys_armory:heavy_golden_armor_boots', 'kubejs:gold_template', 'minecraft:golden_boots', 'minecraft:gold_block')

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

  event.smithing('alexsmobs:frontier_cap', 'kubejs:iron_template', 'minecraft:leather_helmet', 'alexsmobs:frontier_cap')
  event.smithing('alexsmobs:frontier_cap', 'kubejs:iron_template', 'minecraft:chainmail_helmet', 'alexsmobs:frontier_cap')
  
  event.smithing('armoroftheages:japanese_light_armor_head', 'kubejs:iron_template', 'minecraft:chainmail_helmet', 'armoroftheages:japanese_light_armor_head')
  event.smithing('armoroftheages:japanese_light_armor_chest', 'kubejs:iron_template', 'minecraft:chainmail_chestplate', 'armoroftheages:japanese_light_armor_chest')
  event.smithing('armoroftheages:japanese_light_armor_legs', 'kubejs:iron_template', 'minecraft:chainmail_leggings', 'armoroftheages:japanese_light_armor_legs')
  event.smithing('armoroftheages:japanese_light_armor_feet', 'kubejs:iron_template', 'minecraft:chainmail_boots', 'armoroftheages:japanese_light_armor_feet')

  //Upgrady Vikinga
  event.smithing('luckys_armory:plated_armor_helmet', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_helmet', 'luckys_armory:plated_armor_helmet')
  event.smithing('luckys_armory:plated_armor_chestplate', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_chestplate', 'luckys_armory:plated_armor_chestplate')
  event.smithing('luckys_armory:plated_armor_leggings', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_leggings', 'luckys_armory:plated_armor_leggings')
  event.smithing('luckys_armory:plated_armor_boots', 'luckys_armory:smithing_template_leather_upgrade', 'minecraft:leather_boots', 'luckys_armory:plated_armor_boots')
  
  event.smithing('luckys_armory:plated_armor_helmet', 'kubejs:iron_template', 'minecraft:chainmail_helmet', 'luckys_armory:plated_armor_helmet')
  event.smithing('luckys_armory:plated_armor_chestplate', 'kubejs:iron_template', 'minecraft:chainmail_chestplate', 'luckys_armory:plated_armor_chestplate')
  event.smithing('luckys_armory:plated_armor_leggings', 'kubejs:iron_template', 'minecraft:chainmail_leggings', 'luckys_armory:plated_armor_leggings')
  event.smithing('luckys_armory:plated_armor_boots', 'kubejs:iron_template', 'minecraft:chainmail_boots', 'luckys_armory:plated_armor_boots')

  //Upgrady Knighta
  event.smithing('armoroftheages:iron_plate_armor_head', 'kubejs:iron_template', 'minecraft:iron_helmet', 'armoroftheages:iron_plate_armor_head')
  event.smithing('armoroftheages:iron_plate_armor_chest', 'kubejs:iron_template', 'minecraft:iron_chestplate', 'armoroftheages:iron_plate_armor_chest')
  event.smithing('armoroftheages:iron_plate_armor_legs', 'kubejs:iron_template', 'minecraft:iron_leggings', 'armoroftheages:iron_plate_armor_legs')
  event.smithing('armoroftheages:iron_plate_armor_feet', 'kubejs:iron_template', 'minecraft:iron_boots', 'armoroftheages:iron_plate_armor_feet')

  event.smithing('cataclysm:monstrous_helm', 'minecraft:netherite_upgrade_smithing_template', 'mowziesmobs:wrought_helmet', 'cataclysm:monstrous_horn')

//BRONIE

//Minicrossbow w Crossbow
event.smithing('minecraft:crossbow', 'kubejs:iron_template', 'hunters_return:mini_crossbow', 'quark:stick_block')

// Ścieżka Miecz > (Longsword jest poniżej), Cutlass, Rapier, Khopesh, MiniKatana
  event.smithing('simplyswords:iron_cutlass', 'kubejs:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_cutlass', 'kubejs:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_cutlass', 'kubejs:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_cutlass', 'kubejs:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_rapier', 'kubejs:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_rapier', 'kubejs:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_rapier', 'kubejs:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_rapier', 'kubejs:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

  event.smithing('simplymore:iron_khopesh', 'kubejs:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplymore:gold_khopesh', 'kubejs:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_khopesh', 'kubejs:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_khopesh', 'kubejs:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

// Ścieżka Dagger (> Knife) > Sword > Longsword > Claymore > Grandsword
  event.smithing('minecraft:iron_sword', 'kubejs:iron_template', 'basicweapons:iron_dagger', 'minecraft:iron_block')
  event.smithing('minecraft:golden_sword', 'kubejs:gold_template', 'basicweapons:golden_dagger', 'minecraft:gold_block')
  event.smithing('minecraft:diamond_sword', 'kubejs:diamond_template', 'basicweapons:diamond_dagger', 'minecraft:diamond_block')
  event.smithing('minecraft:netherite_sword', 'kubejs:netherite_template', 'basicweapons:netherite_dagger', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_longsword', 'kubejs:iron_template', 'minecraft:iron_sword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_longsword', 'kubejs:gold_template', 'minecraft:golden_sword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_longsword', 'kubejs:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_longsword', 'kubejs:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_claymore', 'kubejs:iron_template', 'simplyswords:iron_longsword', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_claymore', 'kubejs:gold_template', 'simplyswords:gold_longsword', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_claymore', 'kubejs:diamond_template', 'simplyswords:diamond_longsword', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_claymore', 'kubejs:netherite_template', 'simplyswords:netherite_longsword', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_claymore', 'kubejs:netherite_template', 'simplyswords:runic_longsword', 'minecraft:diamond_block')

  event.smithing('simplymore:iron_grandsword', 'kubejs:iron_template', 'simplyswords:iron_claymore', 'minecraft:iron_block')
  event.smithing('simplymore:gold_grandsword', 'kubejs:gold_template', 'simplyswords:gold_claymore', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_grandsword', 'kubejs:diamond_template', 'simplyswords:diamond_claymore', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_grandsword', 'kubejs:netherite_template', 'simplyswords:netherite_claymore', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_grandsword', 'kubejs:netherite_template', 'simplyswords:runic_claymore', 'minecraft:diamond_block')

// Ścieżka Dagger > KitchenKnife
  event.smithing('farmersdelight:iron_knife', 'kubejs:iron_template', 'basicweapons:iron_dagger', 'minecraft:iron_block')
  event.smithing('farmersdelight:golden_knife', 'kubejs:gold_template', 'basicweapons:golden_dagger', 'minecraft:gold_block')
  event.smithing('farmersdelight:diamond_knife', 'kubejs:diamond_template', 'basicweapons:diamond_dagger', 'minecraft:diamond_block')
  event.smithing('farmersdelight:netherite_knife', 'kubejs:netherite_template', 'basicweapons:netherite_dagger', 'minecraft:netherite_block')

// Ścieżka Knife > Dagger > Sai > Rapier > Lance
  event.smithing('simplyswords:iron_sai', 'kubejs:iron_template', 'basicweapons:iron_dagger', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_sai', 'kubejs:gold_template', 'basicweapons:golden_dagger', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_sai', 'kubejs:diamond_template', 'basicweapons:diamond_dagger', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_sai', 'kubejs:netherite_template', 'basicweapons:netherite_dagger', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_sai', 'kubejs:netherite_template', 'simplymore:runic_backhand_blade', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_rapier', 'kubejs:iron_template', 'simplyswords:iron_sai', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_rapier', 'kubejs:gold_template', 'simplyswords:gold_sai', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_rapier', 'kubejs:diamond_template', 'simplyswords:diamond_sai', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_rapier', 'kubejs:netherite_template', 'simplyswords:netherite_sai', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_rapier', 'kubejs:netherite_template', 'simplyswords:runic_sai', 'minecraft:diamond_block')

  event.smithing('simplymore:iron_lance', 'kubejs:iron_template', 'simplyswords:iron_rapier', 'minecraft:iron_block')
  event.smithing('simplymore:gold_lance', 'kubejs:gold_template', 'simplyswords:gold_rapier', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_lance', 'kubejs:diamond_template', 'simplyswords:diamond_rapier', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_lance', 'kubejs:netherite_template', 'simplyswords:netherite_rapier', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_lance', 'kubejs:netherite_template', 'simplyswords:runic_rapier', 'minecraft:diamond_block')

//Ścieżka MiniKatana > Katana > Great Katana
  event.smithing('simplymore:iron_great_katana', 'kubejs:iron_template', 'simplyswords:iron_katana', 'minecraft:iron_block')
  event.smithing('simplymore:gold_great_katana', 'kubejs:gold_template', 'simplyswords:gold_katana', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_great_katana', 'kubejs:diamond_template', 'simplyswords:diamond_katana', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_great_katana', 'kubejs:netherite_template', 'simplyswords:netherite_katana', 'minecraft:netherite_block')

// Ścieżka Chakram > Deer Horns > Warglaive
  event.smithing('simplymore:iron_deer_horns', 'kubejs:iron_template', 'simplyswords:iron_chakram', 'minecraft:iron_block')
  event.smithing('simplymore:gold_deer_horns', 'kubejs:gold_template', 'simplyswords:gold_chakram', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_deer_horns', 'kubejs:diamond_template', 'simplyswords:diamond_chakram', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_deer_horns', 'kubejs:netherite_template', 'simplyswords:netherite_chakram', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_deer_horns', 'kubejs:netherite_template', 'simplyswords:runic_chakram', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_warglaive', 'kubejs:iron_template', 'simplymore:iron_deer_horns', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_warglaive', 'kubejs:gold_template', 'simplymore:gold_deer_horns', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_warglaive', 'kubejs:diamond_template', 'simplymore:diamond_deer_horns', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_warglaive', 'kubejs:netherite_template', 'simplymore:netherite_deer_horns', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_warglaive', 'kubejs:netherite_template', 'simplymore:runic_deer_horns', 'minecraft:diamond_block')

// Ścieżka Kosy (hoe, khopesh lub warglaive)
  event.smithing('simplyswords:iron_scythe', 'kubejs:iron_template', 'minecraft:iron_hoe', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_scythe', 'kubejs:gold_template', 'minecraft:golden_hoe', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_scythe', 'kubejs:diamond_template', 'minecraft:diamond_hoe', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_scythe', 'kubejs:netherite_template', 'minecraft:netherite_hoe', 'minecraft:netherite_block')

  event.smithing('simplyswords:iron_scythe', 'kubejs:iron_template', 'simplyswords:iron_warglaive', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_scythe', 'kubejs:gold_template', 'simplyswords:gold_warglaive', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_scythe', 'kubejs:diamond_template', 'simplyswords:diamond_warglaive', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_scythe', 'kubejs:netherite_template', 'simplyswords:netherite_warglaive', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_scythe', 'kubejs:netherite_template', 'simplyswords:runic_warglaive', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_scythe', 'kubejs:iron_template', 'simplymore:iron_khopesh', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_scythe', 'kubejs:gold_template', 'simplymore:gold_khopesh', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_scythe', 'kubejs:diamond_template', 'simplymore:diamond_khopesh', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_scythe', 'kubejs:netherite_template', 'simplymore:netherite_khopesh', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_scythe', 'kubejs:netherite_template', 'simplymore:runic_khopesh', 'minecraft:diamond_block')

// Ścieżka Pernach <> Club > Hammer > Warhammer > Greathammer
  event.smithing('basicweapons:iron_club', 'kubejs:iron_template', 'simplymore:iron_pernach', 'minecraft:iron_block')
  event.smithing('basicweapons:golden_club', 'kubejs:gold_template', 'simplymore:gold_pernach', 'minecraft:gold_block')
  event.smithing('basicweapons:diamond_club', 'kubejs:diamond_template', 'simplymore:diamond_pernach', 'minecraft:diamond_block')
  event.smithing('basicweapons:netherite_club', 'kubejs:netherite_template', 'simplymore:netherite_pernach', 'minecraft:netherite_block')

  event.smithing('simplymore:iron_pernach', 'kubejs:iron_template', 'basicweapons:iron_club', 'minecraft:iron_block')
  event.smithing('simplymore:gold_pernach', 'kubejs:gold_template', 'basicweapons:golden_club', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_pernach', 'kubejs:diamond_template', 'basicweapons:diamond_club', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_pernach', 'kubejs:netherite_template', 'basicweapons:netherite_club', 'minecraft:netherite_block')

  event.smithing('basicweapons:iron_hammer', 'kubejs:iron_template', 'basicweapons:iron_club', 'minecraft:iron_block')
  event.smithing('basicweapons:golden_hammer', 'kubejs:gold_template', 'basicweapons:golden_club', 'minecraft:gold_block')
  event.smithing('basicweapons:diamond_hammer', 'kubejs:diamond_template', 'basicweapons:diamond_club', 'minecraft:diamond_block')
  event.smithing('basicweapons:netherite_hammer', 'kubejs:netherite_template', 'basicweapons:netherite_club', 'minecraft:netherite_block')

// Ścieżka Axe > Battleaxe > Greataxe
 
// Ścieżka BasicSpear > SimplySpear > GreatSpear > Glaive > Halberd
  event.smithing('simplyswords:iron_spear', 'kubejs:iron_template', 'basicweapons:iron_spear', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_spear', 'kubejs:gold_template', 'basicweapons:golden_spear', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_spear', 'kubejs:diamond_template', 'basicweapons:diamond_spear', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_spear', 'kubejs:netherite_template', 'basicweapons:netherite_spear', 'minecraft:netherite_block')

  event.smithing('simplymore:iron_great_spear', 'kubejs:iron_template', 'simplyswords:iron_spear', 'minecraft:iron_block')
  event.smithing('simplymore:gold_great_spear', 'kubejs:gold_template', 'simplyswords:gold_spear', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_great_spear', 'kubejs:diamond_template', 'simplyswords:diamond_spear', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_great_spear', 'kubejs:netherite_template', 'simplyswords:netherite_spear', 'minecraft:netherite_block')
  event.smithing('simplymore:runic_great_spear', 'kubejs:netherite_template', 'simplyswords:runic_spear', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_glaive', 'kubejs:iron_template', 'simplymore:iron_great_spear', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_glaive', 'kubejs:gold_template', 'simplymore:gold_great_spear', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_glaive', 'kubejs:diamond_template', 'simplymore:diamond_great_spear', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_glaive', 'kubejs:netherite_template', 'simplymore:netherite_great_spear', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_glaive', 'kubejs:netherite_template', 'simplymore:runic_great_spear', 'minecraft:diamond_block')

  event.smithing('simplyswords:iron_halberd', 'kubejs:iron_template', 'simplyswords:iron_glaive', 'minecraft:iron_block')
  event.smithing('simplyswords:gold_halberd', 'kubejs:gold_template', 'simplyswords:gold_glaive', 'minecraft:gold_block')
  event.smithing('simplyswords:diamond_halberd', 'kubejs:diamond_template', 'simplyswords:diamond_glaive', 'minecraft:diamond_block')
  event.smithing('simplyswords:netherite_halberd', 'kubejs:netherite_template', 'simplyswords:netherite_glaive', 'minecraft:netherite_block')
  event.smithing('simplyswords:runic_halberd', 'kubejs:netherite_template', 'simplyswords:runic_glaive', 'minecraft:diamond_block')

//BW Spear > Great Spear
  event.smithing('simplymore:iron_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:iron_spear', 'minecraft:iron_block')
  event.smithing('simplymore:gold_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:golden_spear', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:diamond_spear', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_great_spear', 'luckys_armory:smithing_template_leather_upgrade', 'basicweapons:netherite_spear', 'minecraft:netherite_block')

// Ścieżka Cutlass, Khopesh > Warglaive
  event.smithing('simplyswords:iron_warglaive', 'kubejs:iron_template', 'simplyswords:iron_cutlass', 'simplyswords:iron_cutlass')
  event.smithing('simplyswords:gold_warglaive', 'kubejs:gold_template', 'simplyswords:gold_cutlass', 'simplyswords:gold_cutlass')
  event.smithing('simplyswords:diamond_warglaive', 'kubejs:diamond_template', 'simplyswords:diamond_cutlass', 'simplyswords:diamond_cutlass')
  event.smithing('simplyswords:netherite_warglaive', 'kubejs:netherite_template', 'simplyswords:netherite_cutlass', 'simplyswords:netherite_cutlass')
  event.smithing('simplyswords:runic_warglaive', 'kubejs:netherite_template', 'simplyswords:runic_cutlass', 'simplyswords:diamond_cutlass')

  event.smithing('simplyswords:iron_warglaive', 'kubejs:iron_template', 'simplymore:iron_khopesh', 'simplymore:iron_khopesh')
  event.smithing('simplyswords:gold_warglaive', 'kubejs:gold_template', 'simplymore:gold_khopesh', 'simplymore:gold_khopesh')
  event.smithing('simplyswords:diamond_warglaive', 'kubejs:diamond_template', 'simplymore:diamond_khopesh', 'simplymore:diamond_khopesh')
  event.smithing('simplyswords:netherite_warglaive', 'kubejs:netherite_template', 'simplymore:netherite_khopesh', 'simplymore:netherite_khopesh')
  event.smithing('simplyswords:runic_warglaive', 'kubejs:netherite_template', 'simplymore:diamond_khopesh', 'simplymore:diamond_khopesh')

// Ścieżka BasicQuarterstaff > MoreQuarterstaff
  event.smithing('simplymore:iron_quarterstaff', 'kubejs:iron_template', 'basicweapons:iron_quarterstaff', 'minecraft:iron_block')
  event.smithing('simplymore:gold_quarterstaff', 'kubejs:gold_template', 'basicweapons:golden_quarterstaff', 'minecraft:gold_block')
  event.smithing('simplymore:diamond_quarterstaff', 'kubejs:diamond_template', 'basicweapons:diamond_quarterstaff', 'minecraft:diamond_block')
  event.smithing('simplymore:netherite_quarterstaff', 'kubejs:netherite_template', 'basicweapons:netherite_quarterstaff', 'minecraft:netherite_block')

// Ścieżka Sword > Twinblade
  event.smithing('simplyswords:iron_twinblade', 'kubejs:iron_template', 'minecraft:iron_sword', 'minecraft:iron_sword')
  event.smithing('simplyswords:gold_twinblade', 'kubejs:gold_template', 'minecraft:golden_sword', 'minecraft:golden_sword')
  event.smithing('simplyswords:diamond_twinblade', 'kubejs:diamond_template', 'minecraft:diamond_sword', 'minecraft:diamond_sword')
  event.smithing('simplyswords:netherite_twinblade', 'kubejs:netherite_template', 'minecraft:netherite_sword', 'minecraft:netherite_sword')
  event.smithing('simplyswords:runic_twinblade', 'kubejs:netherite_template', 'simplyswords:runic_longsword', 'minecraft:diamond_sword')
  
// Bronie Stone > Iron
  event.smithing('minecraft:iron_sword', 'kubejs:iron_template', 'minecraft:stone_sword', 'minecraft:iron_block')
  event.smithing('minecraft:iron_axe', 'kubejs:iron_template', 'minecraft:stone_axe', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_dagger', 'kubejs:iron_template', 'basicweapons:stone_dagger', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_spear', 'kubejs:iron_template', 'basicweapons:stone_spear', 'minecraft:iron_block')
  event.smithing('farmersdelight:iron_knife', 'kubejs:iron_template', 'farmersdelight:flint_knife', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_club', 'kubejs:iron_template', 'basicweapons:stone_club', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_hammer', 'kubejs:iron_template', 'basicweapons:stone_hammer', 'minecraft:iron_block')
  event.smithing('basicweapons:iron_quarterstaff', 'kubejs:iron_template', 'basicweapons:stone_quarterstaff', 'minecraft:iron_block')
  //Narzędzia Stone > Iron
  event.smithing('minecraft:iron_pickaxe', 'kubejs:iron_template', 'minecraft:stone_pickaxe', 'minecraft:iron_block')
  event.smithing('minecraft:iron_axe', 'kubejs:iron_template', 'minecraft:stone_axe', 'minecraft:iron_block')
  event.smithing('minecraft:iron_shovel', 'kubejs:iron_template', 'minecraft:iron_shovel', 'minecraft:iron_block')
  event.smithing('minecraft:iron_hoe', 'kubejs:iron_template', 'minecraft:iron_hoe', 'minecraft:iron_block')

// Bronie Iron > Gold
  event.smithing('minecraft:golden_sword', 'kubejs:gold_template', 'minecraft:iron_sword', 'minecraft:gold_ingot')
  event.smithing('minecraft:golden_axe', 'kubejs:gold_template', 'minecraft:iron_axe', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_dagger', 'kubejs:gold_template', 'basicweapons:iron_dagger', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_spear', 'kubejs:gold_template', 'basicweapons:iron_spear', 'minecraft:gold_ingot')
  event.smithing('farmersdelight:golden_knife', 'kubejs:gold_template', 'farmersdelight:iron_knife', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_club', 'kubejs:gold_template', 'basicweapons:iron_club', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_hammer', 'kubejs:gold_template', 'basicweapons:iron_hammer', 'minecraft:gold_ingot')
  event.smithing('basicweapons:golden_quarterstaff', 'kubejs:gold_template', 'basicweapons:iron_quarterstaff', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_chakram', 'kubejs:gold_template', 'simplyswords:iron_chakram', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_claymore', 'kubejs:gold_template', 'simplyswords:iron_claymore', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_cutlass', 'kubejs:gold_template', 'simplyswords:iron_cutlass', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_glaive', 'kubejs:gold_template', 'simplyswords:iron_glaive', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_greataxe', 'kubejs:gold_template', 'simplyswords:iron_greataxe', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_halberd', 'kubejs:gold_template', 'simplyswords:iron_halberd', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_katana', 'kubejs:gold_template', 'simplyswords:iron_katana', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_longsword', 'kubejs:gold_template', 'simplyswords:iron_longsword', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_rapier', 'kubejs:gold_template', 'simplyswords:iron_rapier', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_sai', 'kubejs:gold_template', 'simplyswords:iron_sai', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_scythe', 'kubejs:gold_template', 'simplyswords:iron_scythe', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_spear', 'kubejs:gold_template', 'simplyswords:iron_spear', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_twinblade', 'kubejs:gold_template', 'simplyswords:iron_twinblade', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_warglaive', 'kubejs:gold_template', 'simplyswords:iron_warglaive', 'minecraft:gold_ingot')
  event.smithing('simplyswords:gold_greathammer', 'kubejs:gold_template', 'simplyswords:iron_greathammer', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_pernach', 'kubejs:gold_template', 'simplymore:iron_pernach', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_quarterstaff', 'kubejs:gold_template', 'simplymore:iron_quarterstaff', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_great_katana', 'kubejs:gold_template', 'simplymore:iron_great_katana', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_grandsword', 'kubejs:gold_template', 'simplymore:iron_grandsword', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_lance', 'kubejs:gold_template', 'simplymore:iron_lance', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_khopesh', 'kubejs:gold_template', 'simplymore:iron_khopesh', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_great_spear', 'kubejs:gold_template', 'simplymore:iron_great_spear', 'minecraft:gold_ingot')
  event.smithing('simplymore:gold_deer_horns', 'kubejs:gold_template', 'simplymore:iron_deer_horns', 'minecraft:gold_ingot')


  // Bronie Iron > Diamond
  event.smithing('minecraft:diamond_sword', 'kubejs:diamond_template', 'minecraft:iron_sword', 'minecraft:diamond')
  event.smithing('minecraft:diamond_axe', 'kubejs:diamond_template', 'minecraft:iron_axe', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_dagger', 'kubejs:diamond_template', 'basicweapons:iron_dagger', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_spear', 'kubejs:diamond_template', 'basicweapons:iron_spear', 'minecraft:diamond')
  event.smithing('farmersdelight:diamond_knife', 'kubejs:diamond_template', 'farmersdelight:iron_knife', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_club', 'kubejs:diamond_template', 'basicweapons:iron_club', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_hammer', 'kubejs:diamond_template', 'basicweapons:iron_hammer', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_quarterstaff', 'kubejs:diamond_template', 'basicweapons:iron_quarterstaff', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_chakram', 'kubejs:diamond_template', 'simplyswords:iron_chakram', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_claymore', 'kubejs:diamond_template', 'simplyswords:iron_claymore', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_cutlass', 'kubejs:diamond_template', 'simplyswords:iron_cutlass', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_glaive', 'kubejs:diamond_template', 'simplyswords:iron_glaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greataxe', 'kubejs:diamond_template', 'simplyswords:iron_greataxe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_halberd', 'kubejs:diamond_template', 'simplyswords:iron_halberd', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_katana', 'kubejs:diamond_template', 'simplyswords:iron_katana', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_longsword', 'kubejs:diamond_template', 'simplyswords:iron_longsword', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_rapier', 'kubejs:diamond_template', 'simplyswords:iron_rapier', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_sai', 'kubejs:diamond_template', 'simplyswords:iron_sai', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_scythe', 'kubejs:diamond_template', 'simplyswords:iron_scythe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_spear', 'kubejs:diamond_template', 'simplyswords:iron_spear', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_twinblade', 'kubejs:diamond_template', 'simplyswords:iron_twinblade', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_warglaive', 'kubejs:diamond_template', 'simplyswords:iron_warglaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greathammer', 'kubejs:diamond_template', 'simplyswords:iron_greathammer', 'minecraft:diamond')
  event.smithing('simplymore:diamond_pernach', 'kubejs:diamond_template', 'simplymore:iron_pernach', 'minecraft:diamond')
  event.smithing('simplymore:diamond_quarterstaff', 'kubejs:diamond_template', 'simplymore:iron_quarterstaff', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_katana', 'kubejs:diamond_template', 'simplymore:iron_great_katana', 'minecraft:diamond')
  event.smithing('simplymore:diamond_grandsword', 'kubejs:diamond_template', 'simplymore:iron_grandsword', 'minecraft:diamond')
  event.smithing('simplymore:diamond_lance', 'kubejs:diamond_template', 'simplymore:iron_lance', 'minecraft:diamond')
  event.smithing('simplymore:diamond_khopesh', 'kubejs:diamond_template', 'simplymore:iron_khopesh', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_spear', 'kubejs:diamond_template', 'simplymore:iron_great_spear', 'minecraft:diamond')
  event.smithing('simplymore:diamond_deer_horns', 'kubejs:diamond_template', 'simplymore:iron_deer_horns', 'minecraft:diamond')

  // Bronie Gold > Diamond
  event.smithing('minecraft:diamond_sword', 'kubejs:diamond_template', 'minecraft:golden_sword', 'minecraft:diamond')
  event.smithing('minecraft:diamond_axe', 'kubejs:diamond_template', 'minecraft:golden_axe', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_dagger', 'kubejs:diamond_template', 'basicweapons:golden_dagger', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_spear', 'kubejs:diamond_template', 'basicweapons:golden_spear', 'minecraft:diamond')
  event.smithing('farmersdelight:diamond_knife', 'kubejs:diamond_template', 'farmersdelight:golden_knife', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_club', 'kubejs:diamond_template', 'basicweapons:golden_club', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_hammer', 'kubejs:diamond_template', 'basicweapons:golden_hammer', 'minecraft:diamond')
  event.smithing('basicweapons:diamond_quarterstaff', 'kubejs:diamond_template', 'basicweapons:golden_quarterstaff', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_chakram', 'kubejs:diamond_template', 'simplyswords:gold_chakram', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_claymore', 'kubejs:diamond_template', 'simplyswords:gold_claymore', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_cutlass', 'kubejs:diamond_template', 'simplyswords:gold_cutlass', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_glaive', 'kubejs:diamond_template', 'simplyswords:gold_glaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greataxe', 'kubejs:diamond_template', 'simplyswords:gold_greataxe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_halberd', 'kubejs:diamond_template', 'simplyswords:gold_halberd', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_katana', 'kubejs:diamond_template', 'simplyswords:gold_katana', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_longsword', 'kubejs:diamond_template', 'simplyswords:gold_longsword', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_rapier', 'kubejs:diamond_template', 'simplyswords:gold_rapier', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_sai', 'kubejs:diamond_template', 'simplyswords:gold_sai', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_scythe', 'kubejs:diamond_template', 'simplyswords:gold_scythe', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_spear', 'kubejs:diamond_template', 'simplyswords:gold_spear', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_twinblade', 'kubejs:diamond_template', 'simplyswords:gold_twinblade', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_warglaive', 'kubejs:diamond_template', 'simplyswords:gold_warglaive', 'minecraft:diamond')
  event.smithing('simplyswords:diamond_greathammer', 'kubejs:diamond_template', 'simplyswords:gold_greathammer', 'minecraft:diamond')
  event.smithing('simplymore:diamond_pernach', 'kubejs:diamond_template', 'simplymore:gold_pernach', 'minecraft:diamond')
  event.smithing('simplymore:diamond_quarterstaff', 'kubejs:diamond_template', 'simplymore:gold_quarterstaff', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_katana', 'kubejs:diamond_template', 'simplymore:gold_great_katana', 'minecraft:diamond')
  event.smithing('simplymore:diamond_grandsword', 'kubejs:diamond_template', 'simplymore:gold_grandsword', 'minecraft:diamond')
  event.smithing('simplymore:diamond_lance', 'kubejs:diamond_template', 'simplymore:gold_lance', 'minecraft:diamond')
  event.smithing('simplymore:diamond_khopesh', 'kubejs:diamond_template', 'simplymore:gold_khopesh', 'minecraft:diamond')
  event.smithing('simplymore:diamond_great_spear', 'kubejs:diamond_template', 'simplymore:gold_great_spear', 'minecraft:diamond')
  event.smithing('simplymore:diamond_deer_horns', 'kubejs:diamond_template', 'simplymore:gold_deer_horns', 'minecraft:diamond')

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
  event.smithing('minecraft:netherite_sword', 'kubejs:netherite_template', 'minecraft:diamond_sword', 'minecraft:netherite_ingot')
  event.smithing('minecraft:netherite_axe', 'kubejs:netherite_template', 'minecraft:diamond_axe', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_dagger', 'kubejs:netherite_template', 'basicweapons:diamond_dagger', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_spear', 'kubejs:netherite_template', 'basicweapons:diamond_spear', 'minecraft:netherite_ingot')
  event.smithing('farmersdelight:netherite_knife', 'kubejs:netherite_template', 'farmersdelight:diamond_knife', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_club', 'kubejs:netherite_template', 'basicweapons:diamond_club', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_hammer', 'kubejs:netherite_template', 'basicweapons:diamond_hammer', 'minecraft:netherite_ingot')
  event.smithing('basicweapons:netherite_quarterstaff', 'kubejs:netherite_template', 'basicweapons:diamond_quarterstaff', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_chakram', 'kubejs:netherite_template', 'simplyswords:diamond_chakram', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_claymore', 'kubejs:netherite_template', 'simplyswords:diamond_claymore', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_cutlass', 'kubejs:netherite_template', 'simplyswords:diamond_cutlass', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_glaive', 'kubejs:netherite_template', 'simplyswords:diamond_glaive', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_greataxe', 'kubejs:netherite_template', 'simplyswords:diamond_greataxe', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_halberd', 'kubejs:netherite_template', 'simplyswords:diamond_halberd', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_katana', 'kubejs:netherite_template', 'simplyswords:diamond_katana', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_longsword', 'kubejs:netherite_template', 'simplyswords:diamond_longsword', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_rapier', 'kubejs:netherite_template', 'simplyswords:diamond_rapier', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_sai', 'kubejs:netherite_template', 'simplyswords:diamond_sai', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_scythe', 'kubejs:netherite_template', 'simplyswords:diamond_scythe', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_spear', 'kubejs:netherite_template', 'simplyswords:diamond_spear', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_twinblade', 'kubejs:netherite_template', 'simplyswords:diamond_twinblade', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_warglaive', 'kubejs:netherite_template', 'simplyswords:diamond_warglaive', 'minecraft:netherite_ingot')
  event.smithing('simplyswords:netherite_greathammer', 'kubejs:netherite_template', 'simplyswords:diamond_greathammer', 'minecraft:netherite_ingot')
  event.smithing('simplymore:netherite_pernach', 'kubejs:netherite_template', 'simplymore:diamond_pernach', 'minecraft:diamond')
  event.smithing('simplymore:netherite_quarterstaff', 'kubejs:netherite_template', 'simplymore:diamond_quarterstaff', 'minecraft:diamond')
  event.smithing('simplymore:netherite_great_katana', 'kubejs:netherite_template', 'simplymore:diamond_great_katana', 'minecraft:diamond')
  event.smithing('simplymore:netherite_grandsword', 'kubejs:netherite_template', 'simplymore:diamond_grandsword', 'minecraft:diamond')
  event.smithing('simplymore:netherite_lance', 'kubejs:netherite_template', 'simplymore:diamond_lance', 'minecraft:diamond')
  event.smithing('simplymore:netherite_khopesh', 'kubejs:netherite_template', 'simplymore:diamond_khopesh', 'minecraft:diamond')
  event.smithing('simplymore:netherite_great_spear', 'kubejs:netherite_template', 'simplymore:diamond_great_spear', 'minecraft:diamond')
  event.smithing('simplymore:netherite_deer_horns', 'kubejs:netherite_template', 'simplymore:diamond_deer_horns', 'minecraft:diamond')

  // Inne Bronie Netherite > Runic
  event.smithing('simplymore:runic_backhand_blade', 'simplyswords:runic_tablet', 'basicweapons:netherite_dagger', 'minecraft:diamond')

// Wędki
  event.smithing('aquaculture:iron_fishing_rod', 'kubejs:iron_template', 'minecraft:fishing_rod', 'minecraft:iron_ingot')
  event.smithing('aquaculture:gold_fishing_rod', 'kubejs:gold_template', 'aquaculture:iron_fishing_rod', 'minecraft:gold_ingot')
  event.smithing('aquaculture:diamond_fishing_rod', 'kubejs:diamond_template', 'aquaculture:gold_fishing_rod', 'minecraft:diamond')
  event.smithing('aquaculture:neptunium_fishing_rod', 'minecraft:glow_ink_sac', 'aquaculture:diamond_fishing_rod', 'aquaculture:neptunium_ingot')

//Pędzle
  event.smithing('betterarcheology:iron_brush', 'kubejs:iron_template', 'minecraft:brush', 'minecraft:iron_ingot')
  event.smithing('betterarcheology:diamond_brush', 'kubejs:diamond_template', 'betterarcheology:iron_brush', 'minecraft:diamond')

})