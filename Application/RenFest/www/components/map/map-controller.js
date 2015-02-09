
angular.module('maps.controllers',['data.services','localStorage.services','uiGmapgoogle-maps','mapGeolocation.services'])

    /**
     * @name MapCtrl
     * @desc Application Controller for map screen
     */
    .controller('MapCtrl',['$scope','DataService','LocalStorageService','MapGeolocationService',
        function($scope,DataService, LocalStorageService, MapGeolocationService) {

              var markersData=LocalStorageService.getMapMarkers();
              $scope.markers=DataService.getData(markersData);

             /**
              * @name init
              * @desc Shows map and markes with data on screen
              */
              var init=function ()
              {
                   $scope.map = {
                       center: {
                           latitude: 46.1617581,
                           longitude: 16.8316687
                       },
                       zoom: 16
                   };

                   $scope.options = {
                       scrollwheel: false
                   };

                   $scope.windowOptions = {
                       show: false
                   };

                   $scope.onClick = function() {
                       $scope.windowOptions.show = !$scope.windowOptions.show;
                   };

                   $scope.closeClick = function() {
                       $scope.windowOptions.show = false;
                   };
              };
                init();
                //TODO:
                // dobim svoju trenutnu lokaciju i u mobu, stavim u polje markera, ali mi ne updejta
                // u viewu, a trebao bi automatski
                // treba se igrati sa $scope.$applay() i $scope.$watch();
                $scope.currentLocation=function()
                {
                    navigator.geolocation.getCurrentPosition(function(position){
                                var key=Math.floor((Math.random()*10000)+1);
                                //alert("a: "+position.coords.latitude + ", b: "+position.coords.longitude + " key:"+key);
                                $scope.markers.push({
                                    idKey:key,
                                    latitude:position.coords.latitude,
                                    longitude:position.coords.longitude,
                                    icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue.png',
                                    title: 'Trenutna pozicija'
                                });
                            //$scope.$apply();
                    },function(error){
                        return;
                    },{maximumAge:60000, timeout:5000, enableHighAccuracy:true});
                    //$scope.$apply();
                    //init();
                };
        }
    ]);