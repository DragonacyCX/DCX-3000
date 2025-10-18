ServerEvents.recipes(event => {
    //Przetapianie bryłek miedzi
    event.blasting('create:copper_nugget', 'spelunkery:raw_copper_nugget', 0.1, 10)
    event.smelting('create:copper_nugget', 'spelunkery:raw_copper_nugget', 0.1, 20)


})