
angular.module('contact.controllers', ['localStorage.services'])

    .controller('ContactCtrl',['$scope','LocalStorageService',
            function($scope,LocalStorageService) {

                $scope.contacts=[];
                var contactsData=LocalStorageService.getContacts();

                angular.forEach(contactsData,function(value,key){
                    key=="header"? $scope.header=value : $scope.contacts.push(value);
                });
            }
        ]);
