/**
 * Created by Matija on 2.1.2015..
 */

angular.module('eventsDays.controllers',['data.services'])
    .controller('EventsDaysCtrl',['$scope','DataService','$stateParams',
        function ($scope,DataService,$stateParams) {
             $scope.day=$stateParams.day;
             $scope.events=DataService.getEventsData(eventsData,$stateParams.day);
         }
    ]);


