/**
 * Created by Toni on 26.1.2015..
 */


angular.module('maps.controllers',['data.services','localStorage.services','uiGmapgoogle-maps'])
    .controller('MapCtrl',['$scope','DataService','LocalStorageService',
        function($scope,  DataService, LocalStorageService) {
            $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        }
    ]);