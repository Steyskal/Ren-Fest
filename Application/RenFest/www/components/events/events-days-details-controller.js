/**
 * Created by Matija on 2.1.2015..
 */

angular.module('eventsDayDetails.controllers',[])

    .controller('EventsDayDetailsCtrl',['$scope','$stateParams',function($scope,$stateParams) {

        $scope.detail=[];
        $scope.description=$stateParams.description;
        $scope.img="http://goo.gl/"+$stateParams.img;
        $scope.img2="http://goo.gl/"+$stateParams.img2;
        $scope.time=$stateParams.time;
        $scope.title=$stateParams.title;
        var details=angular.fromJson($stateParams.details);

        angular.forEach(details,function(information,key){
            angular.forEach(information,function(value,key){
                $scope.detail.push(value);
            });
        });

    }]);