angular.module('starter.controllers', [])

.controller('ContactCtrl', function($scope) {
  //TODO refactor: fetch data from local storage
  $scope.contacts = [
    { title: 'Adresa', information: 'Trg bana Josipa Jelačića 7, 48000 Koprivnica' },
    { title: 'Telefon', information: '+385 48 621 433' },
    { title: 'Fax', information: '+385 48 623 178' },
    { title: 'E-mail', information: 'tzg-koprivnica@kc.t-com.hr' },
    { web:'Web',url1:'www.koprivnicatourism.com',url2:'www.renesansnifestival.hr'}
  ];
  $scope.website={ web:'Web',url1:'http://www.koprivnicatourism.com/',site1:'www.koprivnicatourism.com',
      url2:'http://www.renesansnifestival.hr/',site2:'www.renesansnifestival.hr'}
});

