
angular.module('renaissance.controllers', ['localStorage.services','data.services'])

    .controller('RenaissanceCtrl',['$scope','LocalStorageService','DataService',
            function($scope,LocalStorageService,DataService){
                var renaissanceData=LocalStorageService.getRenaissance();
                $scope.renaissance=DataService.getData(renaissanceData);
            }
        ]);