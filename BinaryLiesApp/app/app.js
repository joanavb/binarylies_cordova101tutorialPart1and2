var app = angular.module('BinaryLiesApp', ['ionic', 'angularMoment', 'ngCordova']);

//Your services
app.service('postsService', PostsService);

//Yours controllers
app.controller("AppController", AppController);
app.controller("PostsController", PostsController);

app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('app', {
              url: "/app",
              abstract: true,
              templateUrl: "app/templates/menu.html",
              controller: 'AppController'
          })
          .state('app.posts', {
              url: "/posts",
              views: {
                  'menuContent': {
                      templateUrl: "app/templates/posts.html",
                      controller: 'PostsController'
                  }
              }
          })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/posts');
});

var onDeviceReady = function () {
    console.log("Application start");
    angular.bootstrap(document.body, ['BinaryLiesApp']);

}

document.addEventListener('deviceready', onDeviceReady.bind(this), false);