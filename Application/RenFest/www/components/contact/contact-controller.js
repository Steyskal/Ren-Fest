
angular.module('contact.controllers', ['firebase.services','localStorage.services'])

    .controller('ContactCtrl', function($q,$scope,FirebaseService,localStorageService) {

        $scope.contacts=[];
        var contactsData=localStorageService.getContacts();
        $scope.header = { content: 'Turistička Zajednica Koprivnica'};

        angular.forEach(contactsData,function(value,key){
            $scope.contacts.push(value);
        });


       /* $scope.header = { content: 'Turistička Zajednica Koprivnica'};

        $scope.contacts = [
            { title: 'Adresa', information: 'Trg bana Josipa Jelačića 7, 48000 Koprivnica' },
            { title: 'Telefon', information: '+385 48 621 433' },
            { title: 'Fax', information: '+385 48 623 178' },
            { title: 'E-mail', information: 'tzg-koprivnica@kc.t-com.hr' }
        ];
        $scope.website={ web:'Web',url1:'http://www.koprivnicatourism.com/',site1:'www.koprivnicatourism.com',
            url2:'http://www.renesansnifestival.hr/',site2:'www.renesansnifestival.hr'}*/

    });
