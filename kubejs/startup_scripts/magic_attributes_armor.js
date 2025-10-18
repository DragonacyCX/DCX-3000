//This all goes in startup_scripts

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
let $ISSAttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')

// Nightmare Robe
ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    if (event.itemStack.id == 'born_in_chaos_v1:nightmare_mantleofthe_night_helmet' && event.slotType == 'head') {
        //Inputting a ResourceLocation or a string of an attribute ID also works, but I just use the direct attribute
        event.addModifier($ISSAttributeRegistry.ELDRITCH_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
        event.addModifier($ISSAttributeRegistry.MAX_MANA.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 65, 'addition'))
    }
    if (event.itemStack.id == 'born_in_chaos_v1:nightmare_mantleofthe_night_chestplate' && event.slotType == 'chest') {
        event.addModifier($ISSAttributeRegistry.ELDRITCH_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
        event.addModifier($ISSAttributeRegistry.MAX_MANA.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 65, 'addition'))
    }
    if (event.itemStack.id == 'born_in_chaos_v1:nightmare_mantleofthe_night_leggings' && event.slotType == 'legs') {
        event.addModifier($ISSAttributeRegistry.ELDRITCH_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
        event.addModifier($ISSAttributeRegistry.MAX_MANA.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 65, 'addition'))
    }
    if (event.itemStack.id == 'born_in_chaos_v1:nightmare_mantleofthe_night_boots' && event.slotType == 'feet') {
        event.addModifier($ISSAttributeRegistry.ELDRITCH_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
        event.addModifier($ISSAttributeRegistry.MAX_MANA.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 65, 'addition'))
    }

//Froststalker Helmet
if (event.itemStack.id == 'alexsmobs:froststalker_helmet' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.ICE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ICE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Anubis
if (event.itemStack.id == 'armoroftheages:anubis_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:anubis_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:anubis_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:anubis_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Faraon
if (event.itemStack.id == 'armoroftheages:pharaoh_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:pharaoh_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:pharaoh_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:pharaoh_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.FIRE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.FIRE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}

//Centurion
if (event.itemStack.id == 'armoroftheages:centurion_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.LIGHTNING_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.LIGHTNING_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:centurion_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.LIGHTNING_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.LIGHTNING_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:centurion_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.LIGHTNING_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.LIGHTNING_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:centurion_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.LIGHTNING_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.LIGHTNING_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Paladin
if (event.itemStack.id == 'armoroftheages:holy_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.HOLY_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.HOLY_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:holy_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.HOLY_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.HOLY_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:holy_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.HOLY_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.HOLY_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:holy_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.HOLY_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.HOLY_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Knight
if (event.itemStack.id == 'armoroftheages:iron_plate_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.EVOCATION_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.EVOCATION_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:iron_plate_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.EVOCATION_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.EVOCATION_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:iron_plate_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.EVOCATION_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.EVOCATION_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:iron_plate_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.EVOCATION_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.EVOCATION_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Ninja
if (event.itemStack.id == 'armoroftheages:japanese_light_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:japanese_light_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:japanese_light_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:japanese_light_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.07, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.07, 'multiply_base'))
}

//Enderium
if (event.itemStack.id == 'majruszsdifficulty:enderium_helmet' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('e4dd8336-51e6-4c7c-967d-9c7075d037ce'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('85c643b3-f924-412c-9567-435f2d69103f'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'majruszsdifficulty:enderium_chestplate' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('1818a6c2-82d9-4b68-af47-a8f327f296ea'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('e5ceed8b-3689-4252-9869-2d4d8de79af2'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'majruszsdifficulty:enderium_leggings' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('d93d469f-fa22-4fae-a9f9-5bacef0e6919'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('52b8f4cc-08e4-4b4b-93e4-95977d731ddb'), 'Weapon modifier', 0.07, 'multiply_base'))
}
if (event.itemStack.id == 'majruszsdifficulty:enderium_boots' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.ENDER_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4521b06d-efa2-4d4c-9c2b-cc5a57ac624b'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ENDER_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('7a5e1c13-c5b7-49d5-88a9-ed101e7773a0'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Samuraj
if (event.itemStack.id == 'armoroftheages:o_yoroi_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.BLOOD_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.BLOOD_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:o_yoroi_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.BLOOD_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.BLOOD_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:o_yoroi_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.BLOOD_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.BLOOD_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:o_yoroi_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.BLOOD_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.BLOOD_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Quetzalcoatl
if (event.itemStack.id == 'armoroftheages:quetzalcoatl_armor_head' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.NATURE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.NATURE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:quetzalcoatl_armor_chest' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.NATURE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.NATURE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:quetzalcoatl_armor_legs' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.NATURE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.NATURE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'armoroftheages:quetzalcoatl_armor_feet' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.NATURE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.NATURE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Viking
if (event.itemStack.id == 'luckys_armory:plated_armor_helmet' && event.slotType == 'head') {
    event.addModifier($ISSAttributeRegistry.ICE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('c6dd8230-0007-4c27-b912-a9a4cfd947b6'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ICE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ea06-aa83-11ef-8e0e-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'luckys_armory:plated_armor_chestplate' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.ICE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('4fcc68bc-4757-4b35-8315-5eab6062188a'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ICE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ecb8-aa83-11ef-b83f-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'luckys_armory:plated_armor_leggings' && event.slotType == 'legs') {
    event.addModifier($ISSAttributeRegistry.ICE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('9a342dab-c4eb-4aba-8dba-5701c7da9f74'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ICE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ed62-aa83-11ef-8132-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}
if (event.itemStack.id == 'luckys_armory:plated_armor_boots' && event.slotType == 'feet') {
    event.addModifier($ISSAttributeRegistry.ICE_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('843ea379-0e9e-4b1d-a957-bab84faba1dc'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ICE_MAGIC_RESIST.get(), new $AttributeModifier(UUID.fromString('cff7ede4-aa83-11ef-b428-325096b39f47'), 'Weapon modifier', 0.1, 'multiply_base'))
}

//Unsettling Kimono
if (event.itemStack.id == 'alexsmobs:unsettling_kimono' && event.slotType == 'chest') {
    event.addModifier($ISSAttributeRegistry.BLOOD_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('d258d8da-a6eb-4881-bc54-3bc0543e1ae2'), 'Weapon modifier', 0.15, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.ELDRITCH_SPELL_POWER.get(), new $AttributeModifier(UUID.fromString('dae8a3d4-2acf-45f7-8c25-356d1e95c1f0'), 'Weapon modifier', 0.1, 'multiply_base'))
    event.addModifier($ISSAttributeRegistry.MAX_MANA.get(), new $AttributeModifier(UUID.fromString('817ef5c9-895c-4f3d-a3ab-d0795ebafe1a'), 'Weapon modifier', 100, 'addition'))
}

})



//if (event.itemStack.id == 'irons_spellbooks:graybeard_staff') {
        // You can also remove modifiers
        //event.removeModifier($ISSAttributeRegistry.MANA_REGEN.get(), new $AttributeModifier(UUID.fromString("667ad88f-901d-4691-b2a2-3664e42026d3"), "Weapon modifier", .25, 'multiply_base'))
    //}