/**
 * Created by Matija on 7.1.2015..
 */
angular.module('home.controllers', ['localStorage.services'])

    .controller('HomeCtrl',['$scope','LocalStorageService',
        function($scope,LocalStorageService) {

            var init=function(){
                $scope.language=LocalStorageService.getLanguage();
            };

            init();
        }
    ]);