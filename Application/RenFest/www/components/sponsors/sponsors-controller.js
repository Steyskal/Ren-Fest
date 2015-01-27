/**
 * Created by Matija on 25.1.2015..
 */

angular.module('sponsors.controllers',['data.services','localStorage.services'])
    .controller('SponsorsCtrl',['$scope','DataService','LocalStorageService',
        function ($scope,DataService,LocalStorageService)
        {
            var init=function(){
                var sponsorsData=LocalStorageService.getSponsors();
                $scope.sponsors=DataService.getData(sponsorsData);
            };
            init();
        }
    ]);