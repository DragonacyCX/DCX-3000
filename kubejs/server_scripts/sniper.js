/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!

  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.


//Sniper
  console.log('Hello! The recipe event has fired!')
  event.recipes.createMechanicalCrafting('gunswithoutroses:diamond_sniper', // arg 1: output
  [
    'DL ',
    'SDT',
    ' FI'
  ],
  {
    D: 'minecraft:diamond',
    L: 'minecraft:spyglass',
    I: 'create:iron_sheet',
    S: 'minecraft:stick',
    T: 'create:precision_mechanism',
    F: 'warriorsofpastepoch:musket'
})

})