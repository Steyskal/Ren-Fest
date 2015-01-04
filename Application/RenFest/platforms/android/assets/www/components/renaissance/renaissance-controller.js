
angular.module('renaissance.controllers', ['localStorage.services'])

    .controller('RenaissanceCtrl',['$scope','LocalStorageService',
            function($scope,LocalStorageService){

                $scope.renaissance=[];
                var renaissanceData=LocalStorageService.getRenaissance();

                angular.forEach(renaissanceData,function(value,key){
                    key=="header"? $scope.header=value : $scope.renaissance.push(value);

                });

            }
        ]);