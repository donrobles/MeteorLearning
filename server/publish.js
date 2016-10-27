/*
 Create a Publication named 'recipes'.

 A Publication can be subscribed to by clients. When a collection is
 updated, Publications push changes to subscribed clients.
 */
//Create a Publication name 'recipes'
Meteor.publish('recipes', function () {
    /*
     Return recipes matching with an author matching the userId
     */
    return Recipes.find({author: this.userId});
});

//Create a Publication named 'singleRecipe'
Meteor.publish('singleRecipe', function (id) {
    check(id, String); //Make sure 'id' is of type String
    /*
     Return recipes matching with an author matching the userId
     */
    return Recipes.find({_id: id});
});