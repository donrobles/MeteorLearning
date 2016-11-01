/*
 On creation of the 'Recipe' template, run this code.
 */
Template.Recipe.onCreated(function () {
    this.editMode = new ReactiveVar(false);
    /*
     Alternative way to set reactive variable.

     this.editMode = new ReactiveVar();
     this.editMode.set(false);
     */
});

/*
 Helper functions for the 'Recipe' template.
 */
Template.Recipe.helpers({
    //Used in the quickForm in Recipe.html
    updateRecipeId: function () {
        return this._id;
    },
    editMode: function () {
        /*
         Return the value of the 'editMode' variable of the instance
         of the Template.
         */
        return Template.instance().editMode.get();
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
    "click .fa-pencil": function (event, template) {
        /*
         Set the reactive template variable 'editMode' to the opposite
         of what it's currently set to.
         */
        template.editMode.set(!template.editMode.get());
    }
});