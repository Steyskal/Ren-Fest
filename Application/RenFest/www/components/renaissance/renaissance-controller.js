

angular.module('renaissance.controllers', ['firebase.services','localStorage.services'])

.controller('RenaissanceCtrl', function($q,$scope,FirebaseService,localStorageService){

        $scope.renaissance=[];
        var renaissanceData=localStorageService.getRenaissance();
        $scope.header = { content: 'Renesansni festival'};

        angular.forEach(renaissanceData,function(value,key){
            $scope.renaissance.push(value);
        });


   /* $scope.header = { content: 'Renesansni festival' };

    $scope.renaissance = [
        {title: 'Očuvanje tradicije', information: 'Povijesni mega spektakl Renesansni festival sljubljivanje je kasno srednjovjekovnih povijesnih fakata i originalnosti Koprivnice, Podravine i Hrvatske s baštinskim vrijednostima zapadnoeuropskog kulturnog civilizacijskog kruga (čiji je dio i Hrvatska), koje se manifestiraju kroz brojne nastupajuće viteške, obrtničke i muzičke skupine iz gotovo deset europskih zemalja. Manifestacije je pravi primjer razvijanja europskog identiteta Grada i Regije.' },
        {title: 'O festivalu', information: 'Renesansni festival okuplja oko 1000 originalno kostimiranih sudionika iz zemlje i inozemstva (Slovenije, Italije, Mađarske, Slovačke, Češke, Austrije, Njemačke, Rusije, Poljske) od kojih ćemo izdvojiti neke: Koprivnički mušketiri i haramije, vitezovi, srednjovjekovni obrtnici, kuhari, krčmari, dame, kmetovi, zabavljači, gutači vatre i drugi.' }
    ];*/
});