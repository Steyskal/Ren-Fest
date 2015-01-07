
angular.module('contact.controllers', ['localStorage.services','data.services'])

    .controller('ContactCtrl',['$scope','LocalStorageService','DataService',
            function($scope,LocalStorageService,DataService) {

                var init=function(){
                    var contactsData=LocalStorageService.getSpecificData('contacts');
                    $scope.contacts=DataService.getData(contactsData);
                };

                init();
            }
    ]);
