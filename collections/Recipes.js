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

/*
 Create a 'SimpleSchema' named 'Ingredient' that can be attached to a collection
 or used elsewhere.
 */
Ingredient = new SimpleSchema({
    name: {
        type: String,
    },
    amount: {
        type: String
    }
});

/*
 Create a 'SimpleSchema' named 'RecipeSchema' that can be attached to a collection
 or used elsewhere.
 */
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

/*
 Meteor functions can be called from elsewhere.
 */
Meteor.methods({
    toggleMenuItem: function (id, currentState) {
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    }
});

//Attach the 'RecipeSchema' schema to the 'Recipes' collection.
Recipes.attachSchema(RecipeSchema);