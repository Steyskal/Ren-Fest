
angular.module('sponsors.controllers',['data.services','localStorage.services'])

    /**
     * @name SponsorsCtrl
     * @desc Application Controller for sponsors screen
     */
    .controller('SponsorsCtrl',['$scope','DataService','LocalStorageService',
        function ($scope,DataService,LocalStorageService)
        {
            /**
             * @name init
             * @desc Shows sponsors data on screen
             */
            var init=function(){
                var sponsorsData=LocalStorageService.getSponsors();
                $scope.sponsors=DataService.getData(sponsorsData);
            };
            init();
        }
    ]);