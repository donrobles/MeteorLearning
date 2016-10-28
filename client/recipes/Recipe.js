/*
 Helper functions for the 'Recipe' template.
 */
Template.Recipe.helpers({
    updateRecipeId: function () {
        return this._id;
    }
});

/*
 Event functions for the 'Recipe' template.
 */
Template.Recipe.events({
    /*
     Trigger on a 'click' event of an element with class 'toggle-menu'.
     */
    'click .toggle-menu': function () {
        //Meteor calls the 'toggleMenuItem' function.
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    }
});