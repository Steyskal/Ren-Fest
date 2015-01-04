/**
 * Created by Matija on 2.1.2015..
 */

angular.module('events.controllers', ['localStorage.services'])

    .controller('EventsCtrl',['$scope','LocalStorageService',
        function($scope,LocalStorageService) {
            eventsData=LocalStorageService.getEvents();
        }
    ]);
