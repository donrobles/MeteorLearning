//When the 'RecipeSingle" template is created, run this code.
Template.RecipeSingle.onCreated(function () {
    var self = this;
    //autorun resets the subscriptions of 'self'
    self.autorun(function () {
        var id = FlowRouter.getParam('_id');
        self.subscribe('singleRecipe', id);
    });
});

/*
 'recipe' is a cursor of the returned recipe of the 'Recipes'
 collection.
 */
Template.RecipeSingle.helpers({
    recipe: ()=> {
        //Grab the 'id' from the URL using FlowRouter
        var id = FlowRouter.getParam('_id');
        /*
         Find recipe in 'Recipes' collection matching the
         id from the URL.
         */
        return Recipes.findOne({_id: id});
    }
});