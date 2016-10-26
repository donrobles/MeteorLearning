if (Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) { //Check that a user is logged in.
        FlowRouter.go('home');
    }
}]);

/*
 Handle route for http://site.com/
 */
FlowRouter.route('/', {
    name: 'home', //The name of the route, must be unique.
    action(){
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        } else {
            // GAnalytics.pageview();
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
        // GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

/*
 Handle route for http://site.com/recipe/{id}
 */
FlowRouter.route('/recipe/:_id', {
    name: 'recipe', //The name of the route, must be unique.
    action(){
        // GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});