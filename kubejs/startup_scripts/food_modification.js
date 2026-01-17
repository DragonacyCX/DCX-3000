ItemEvents.modification(event => {

//Clears Rotten Stink
event.modify('twilightdelight:refreshing_ice_cream', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:mint_candies', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:mint_chocolate', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:cooked_mint_chops', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:mint_chops', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:mint_leaves', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('born_in_chaos_v1:mint_candy', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('alexscaves:frostmint', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('abnormals_delight:mint_cake_slice', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:mint_milkshake', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})
event.modify('neapolitan:mint_ice_cream', item => {
    item.foodProperties = food => 
    {food.removeEffect('born_in_chaos_v1:rotten_smell')}})

})
