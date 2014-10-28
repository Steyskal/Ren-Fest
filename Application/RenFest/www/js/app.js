// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.introduction', {
                url: "/introduction",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/introduction.html"
//          controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.schedule', {
                url: "/schedule",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/schedule.html"
                    }
                }
            })


            .state('app.event', {
                url: "/schedule/:eventId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/event.html",
                        controller: 'SchedulesCtrl'
                    }
                }
            })

            .state('app.map', {
                url: "/map",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/map.html"
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/introduction');
    });

