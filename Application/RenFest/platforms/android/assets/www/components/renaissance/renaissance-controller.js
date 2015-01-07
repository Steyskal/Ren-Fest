
angular.module('renaissance.controllers', ['localStorage.services','data.services'])

    .controller('RenaissanceCtrl',['$scope','LocalStorageService','DataService',
            function($scope,LocalStorageService,DataService){

                var init= function () {
                    var renaissanceData=LocalStorageService.getSpecificData('renaissance');
                    $scope.renaissance=DataService.getData(renaissanceData);
                };

                init();
            }
        ]);