
angular.module('contact.controllers', ['localStorage.services','data.services'])

    .controller('ContactCtrl',['$scope','LocalStorageService','DataService',
            function($scope,LocalStorageService,DataService) {
                var contactsData=LocalStorageService.getContacts();
                $scope.contacts=DataService.getData(contactsData);
            }
        ]);
