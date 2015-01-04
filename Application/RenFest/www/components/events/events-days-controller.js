/**
 * Created by Matija on 2.1.2015..
 */

angular.module('eventsDays.controllers',['events.services'])

    .controller('EventsDaysCtrl',['$scope','EventsService','$stateParams',
        function ($scope,EventsService,$stateParams) {

             $scope.day=$stateParams.day;
             EventsService.getEventsData(eventsData,$stateParams.day);

         }
    ]);


