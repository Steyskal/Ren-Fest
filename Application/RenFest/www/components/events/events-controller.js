/**
 * Created by Matija on 2.1.2015..
 */

angular.module('events.controllers',['data.services','localStorage.services'])
    .controller('EventsCtrl',['$scope','DataService','$stateParams','LocalStorageService',
        function ($scope,DataService,$stateParams,LocalStorageService) {
             var eventsData=LocalStorageService.getEvents();
             $scope.day=$stateParams.day;
             $scope.events=DataService.getEventsData(eventsData,$stateParams.day);
         }
    ]);


