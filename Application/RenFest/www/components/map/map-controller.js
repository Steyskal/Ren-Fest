/**
 * Created by Toni on 26.1.2015..
 */


angular.module('maps.controllers',['data.services','localStorage.services','uiGmapgoogle-maps','mapGeolocation.services'])
    .controller('MapCtrl',['$scope','DataService','LocalStorageService','MapGeolocationService',
        function($scope,DataService, LocalStorageService, MapGeolocationService) {

              var markersData=LocalStorageService.getMapMarkers();
              $scope.markers=DataService.getData(markersData);

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


                $scope.currentLocation=function(){
                    MapGeolocationService.getLocation().then(function(pos){
                        alert(2);
                        $scope.markers.push({
                            idKey:100,
                            latitude:pos.coords.latitude,
                            longitude:pos.coords.longitude,
                            icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue.png',
                            title: 'Trenutna pozicija'
                        });
                    })
                };

               init();



        }
    ]);