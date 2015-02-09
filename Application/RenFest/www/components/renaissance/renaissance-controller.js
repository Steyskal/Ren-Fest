
angular.module('renaissance.controllers', ['localStorage.services','data.services'])

    /**
     * @name RenaissanceCtrl
     * @desc Application Controller for renaissance screen
     */
    .controller('RenaissanceCtrl',['$scope','LocalStorageService','DataService',
            function($scope,LocalStorageService,DataService){

                /**
                 * @name init
                 * @desc Shows renaissance data on screen
                 */
                var init=function () {
                    var renaissanceData=LocalStorageService.getRenaissance();
                    $scope.renaissance=DataService.getData(renaissanceData);
                };
                init();
            }
        ]);