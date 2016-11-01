//Events for the NewRecipe template.
Template.NewRecipe.events({
    //'click' even on element with class 'fa-close'
    'click .fa-close': function () {
        //Set Session var 'newRecipe' to false.
        Session.set('newRecipe', false);
    }
});