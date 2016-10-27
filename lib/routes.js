//This code is only ran on the client side.
if (Meteor.isClient) {
    //After logging-in, run this function.
    Accounts.onLogin(function () {
        //Redirect to FlowRouter route named 'recipe-book'.
        FlowRouter.go('recipe-book');
    });

    //After logging-out, run this function.
    Accounts.onLogout(function () {
        //Redirect to FlowRouter route named 'home'.
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function (context, redirect) {
    //Check if a user is NOT logged in.
    if (!Meteor.userId()) {
        //If no logged-in user, redirect back to 'home' route.
        FlowRouter.go('home');
    }
}]);

/*
 Handle route for http://site.com/

 IE: The base directory of the site.
 */
FlowRouter.route('/', {
    name: 'home', //The name of the route, must be unique.
    action(){
        //Check if someone is logged-in when landing in the base dir.
        if (Meteor.userId()) {
            //If logged-in, redirect to the 'recipe-book' route.
            FlowRouter.go('recipe-book');
        } else {
            BlazeLayout.render('HomeLayout');
        }
    }
});

/*
 Handle route for http://site.com/recipe-book
 */
FlowRouter.route('/recipe-book', {
    name: 'recipe-book', //The name of the route, must be unique.
    action(){
        /*
         Load 'MainLayout' template, and load 'Recipes' template
         in the 'main' section.
         */
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

/*
 Handle route for http://site.com/recipe/{id}
 */
FlowRouter.route('/recipe/:_id', {
    name: 'recipe', //The name of the route, must be unique.
    action(){
        /*
         Load 'MainLayout' template, and load 'RecipeSingle'
         template in the 'main' section.
         */
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});

/*
 Handle route for http://site.com/menu
 */
FlowRouter.route('/menu', {
    name: 'menu', //The name of the route, must be unique.
    action(){
        /*
         Load 'MainLayout' template, and load 'Menu'
         template in the 'main' section.
         */
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

/*
 Handle route for http://site.com/shopping-list
 */
FlowRouter.route('/shopping-list', {
    name: 'shopping-list', //The name of the route, must be unique.
    action(){
        /*
         Load 'MainLayout' template, and load 'ShoppingList'
         template in the 'main' section.
         */
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
});