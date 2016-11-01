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
        //Call the server-side 'toggleMenuItem' function.
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    /*
     Trigger on a 'click' event of an element with class 'fa-trash'.
     */
    "click .fa-trash": function () {
        //Call the server-side 'deleteRecipe' function.
        Meteor.call('deleteRecipe', this._id);
    },
    /*
     Trigger on a 'click' event of an element with class 'fa-pencil'.
     */
    "click .fa-pencil": function () {
        /*
         Set the Session variable 'editMode' to the opposite of what it's currently set to.
         */
        Session.set('editMode', !Session.get('editMode'));
    }
});