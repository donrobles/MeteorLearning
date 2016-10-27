//When the 'ShoppingList" template is created, run this code.
Template.ShoppingList.onCreated(function () {
    var self = this;
    //autorun resets the subscriptions of 'self'
    self.autorun(function () {
        self.subscribe('recipes'); //Receive updates from the 'recipes' publication in 'public.js'.
    });
});

//'shoppingList' will be a cursor for all returned 'Recipes'
Template.ShoppingList.helpers({
    shoppingList: ()=> {
        //Return only the recipes that have 'inMenu' set to true.
        return Recipes.find({inMenu: true});
    }
});