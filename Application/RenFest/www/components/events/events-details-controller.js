/**
 * Created by Matija on 2.1.2015..
 */

angular.module('eventsDetails.controllers',['data.services'])

    .controller('EventsDetailsCtrl',['$scope','$stateParams','DataService',
        function($scope,$stateParams,DataService) {
            $scope.detail=[];
            $scope.description=$stateParams.description;
            $scope.img="http://goo.gl/"+$stateParams.img;
            $scope.img2="http://goo.gl/"+$stateParams.img2;
            $scope.time=$stateParams.time;
            $scope.title=$stateParams.title;
            var details=angular.fromJson($stateParams.details);
            $scope.detail=DataService.getEventsDetailsData(details);
        }
    ]);