
angular.module('starter', ['ionic',
    'localStorage.services',
    'firebase.services',
    'contact.controllers',
    'renaissance.controllers',
    'events.services',
    'events.controllers',
    'eventsDays.controllers',
    'eventsDayDetails.controllers',
    'localization.services',
    'pascalprecht.translate'
    ])

    .run(function($ionicPlatform,$ionicPopup,FirebaseService,LocalStorageService,LocalizationService) {
        $ionicPlatform.ready(function() {

            //localization
            LocalizationService.getLanguage().then(function(data){
                LocalizationService.setLanguage(data);

                //TODO:refactor
                //check if exist data in localStorage
                if(LocalStorageService.getData()==null){
                    //if not exist check internet connection
                    if(window.Connection) {
                        //fetch data
                        if(navigator.connection.type != Connection.NONE) {
                            FirebaseService.getData(LocalStorageService.getLanguage()).then(function(data){
                                LocalStorageService.setData(data);
                                LocalStorageService.setContacts(data.$getRecord('contacts'));
                                LocalStorageService.setRenaissance(data.$getRecord('renaissance'));
                                LocalStorageService.setEvents(data.$getRecord('events'));
                            });
                            //turn on internet
                        }else{
                            $ionicPopup.alert({
                                title:"Internet",
                                content:"{{'content'| translate}}"
                            }).then(function(res){
                                if(res)
                                    navigator.app.exitApp();
                            });
                        }
                    }
                }
            });

            //update data
            if(LocalStorageService.getData()!=null){
                if(window.Connection) {
                    if(navigator.connection.type != Connection.NONE) {
                        LocalizationService.getLanguage().then(function(data){
                            LocalizationService.setLanguage(data);
                            FirebaseService.getData(LocalStorageService.getLanguage()).then(function(data){
                                LocalStorageService.setData(data);
                                LocalStorageService.setContacts(data.$getRecord('contacts'));
                                LocalStorageService.setRenaissance(data.$getRecord('renaissance'));
                                LocalStorageService.setEvents(data.$getRecord('events'));
                            });
                        });
                    }
                }
            }

            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

        });
    })

    .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
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
                abstract:true,
                views: {
                    'menuContent' :{
                        templateUrl: "components/events/events.html",
                        controller: "EventsCtrl"
                    }
                }
            })

            .state('app.events.day1', {
                url: "/day1/:day",
                views: {
                    'tab-day1' :{
                        templateUrl: "components/events/tab-days.html",
                        controller: "EventsDaysCtrl"
                    }
                }
            })

            .state('app.events.day1Details', {
                url: "/day1/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day1' :{
                        templateUrl: "components/events/tab-days-details.html",
                        controller: "EventsDayDetailsCtrl"
                    }
                }
            })

            .state('app.events.day2', {
                url: "/day2/:day",
                views: {
                    'tab-day2' :{
                        templateUrl: "components/events/tab-days.html",
                        controller: "EventsDaysCtrl"
                    }
                }
            })

            .state('app.events.day2Details', {
                url: "/day2/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day2' :{
                        templateUrl: "components/events/tab-days-details.html",
                        controller: "EventsDaysCtrl"
                    }
                }
            })

            .state('app.events.day3', {
                url: "/day3/:day",
                views: {
                    'tab-day3' :{
                        templateUrl: "components/events/tab-days.html",
                        controller: "EventsDaysCtrl"
                    }
                }
            })

            .state('app.events.day3Details', {
                url: "/day3/:description/:details/:time/:title/:img/:img2",
                views: {
                    'tab-day3' :{
                        templateUrl: "components/events/tab-days-details.html",
                        controller: "EventsDayDetailsCtrl"
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


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

        //TODO: stavi u ekstra .js
        //localization config
        $translateProvider.translations('en', {
            app_name: "Renaissance festival",

            //menu
            menu_name:"Menu",
            menu_ren_fest: "Renaissance festival",
            menu_about_ren_fest:"About renaissance ",
            menu_event:"Events",
            menu_map:"Map",
            menu_sponsors:"Sponsors",
            menu_contact:"Contacts",

            //tabs
            day1:"Fri 28.8.",
            day2:"Sat 29.8.",
            day3:"Sun 30.8.",

            //internet connection popup alert
            title:"Enable internet",
            content:"For first usage please enable internet connection."
        });

        $translateProvider.translations('hr', {
            app_name: "Renesansni festival",

            //menu
            menu_name:"Izbornik",
            menu_ren_fest: "Renesansni festival",
            menu_about_ren_fest:"O renesansi",
            menu_event:"Raspored programa",
            menu_map:"Karta",
            menu_sponsors:"Sponzori",
            menu_contact:"Kontakt",

            //tabs
            day1:"Pet 28.8.",
            day2:"Sub 29.8.",
            day3:"Ned 30.8.",


            //internet connection popup alert
            title:"Uključite internet",
            content:"Prilikom prvog korištenja molimo vas da uključite internet."

        });

        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    })

