Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    //Allow 'insert' when userId exists.
    insert: function (userId, doc) {
        //return userId only if it exists.
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Ingredient = new SimpleSchema({
    name: {
        type: String,
    },
    amount: {
        type: String
    }
});

RecipeSchema = new SimpleSchema({
    //Create a "name" object with properties.
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredients: {
        /*
         Setting a schema as an array for a field type of another schema
         automatically creates increment/decrement functionality on the
         front-end.
         */
        type: [Ingredient]
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    toggleMenuItem: function (id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    }
});

Recipes.attachSchema(RecipeSchema);