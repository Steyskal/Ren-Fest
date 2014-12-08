// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic',
    'localStorage.services',
    'firebase.services',
    'contact.controllers',
    'renaissance.controllers'
    ])

    .run(function($ionicPlatform,$ionicPopup,FirebaseService,localStorageService) {
        $ionicPlatform.ready(function() {


            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            //check if exist data in localStorage
            if(localStorageService.getData()==null){
                //if not exist check interent connection
                if(window.Connection) {
                    //turn on internet
                    if(navigator.connection.type == Connection.NONE) {
                        $ionicPopup.alert({
                            title: "Uključite internet",
                            content: "Prilikom prvog korištenja molimo vas da uključite internet."
                        });
                    //fetch data
                    }else{
                        FirebaseService.getData().then(function(data){
                            localStorageService.setData(data);
                            localStorageService.setContacts(data.$getRecord('contacts'));
                            localStorageService.setRenaissance(data.$getRecord('renaissance'));
                        });
                    }
                }
                //update data
            }else{
                if(window.Connection) {
                    if(navigator.connection.type != Connection.NONE) {
                        FirebaseService.getData().then(function(data){
                            localStorageService.setData(data);
                            localStorageService.setContacts(data.$getRecord('contacts'));
                            localStorageService.setRenaissance(data.$getRecord('renaissance'));
                        });
                    }
                }
            }

        });
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/home.html"
                    }
                }
            })

            .state('app.renaissance', {
                url: "/renaissance",
                views: {
                    'menuContent' :{
                        templateUrl: "components/renaissance/renaissance.html",
                        controller: "RenaissanceCtrl"
                    }
                }
            })

            .state('app.events', {
                url: "/events",
                views: {
                    'menuContent' :{
                        templateUrl: "components/events/events.html"
                    }
                }
            })

            .state('app.map', {
                url: "/map",
                views: {
                    'menuContent' :{
                        templateUrl: "components/map/map.html"
                    }
                }
            })

            .state('app.sponsors', {
                url: "/sponsors",
                views: {
                    'menuContent' :{
                        templateUrl: "components/sponsors/sponsors.html"
                    }
                }
            })

            .state('app.contact', {
                url: "/contact",
                views: {
                    'menuContent' :{
                        templateUrl: "components/contact/contact.html",
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.language', {
                url: "/language",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/language.html"
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });

