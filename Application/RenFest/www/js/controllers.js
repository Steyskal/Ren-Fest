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
})

.controller('RenaissanceCtrl', function($scope){
  //TODO refactor: fetch data from local storage
  $scope.header = { content: 'Renesansni festival' };

  $scope.information = [
    {title: 'Očuvanje tradicije', content: 'Povijesni mega spektakl Renesansni festival sljubljivanje je kasno srednjovjekovnih povijesnih fakata i originalnosti Koprivnice, Podravine i Hrvatske s baštinskim vrijednostima zapadnoeuropskog kulturnog civilizacijskog kruga (čiji je dio i Hrvatska), koje se manifestiraju kroz brojne nastupajuće viteške, obrtničke i muzičke skupine iz gotovo deset europskih zemalja. Manifestacije je pravi primjer razvijanja europskog identiteta Grada i Regije.' },
    {title: 'O festivalu', content: 'Renesansni festival okuplja oko 1000 originalno kostimiranih sudionika iz zemlje i inozemstva (Slovenije, Italije, Mađarske, Slovačke, Češke, Austrije, Njemačke, Rusije, Poljske) od kojih ćemo izdvojiti neke: Koprivnički mušketiri i haramije, vitezovi, srednjovjekovni obrtnici, kuhari, krčmari, dame, kmetovi, zabavljači, gutači vatre i drugi.' }
  ];
});