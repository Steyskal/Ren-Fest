/**
 * Created by Toni on 26.1.2015..
 */


angular.module('maps.controllers',['data.services','localStorage.services','uiGmapgoogle-maps'])
    .controller('MapCtrl',['$scope','DataService','LocalStorageService',
        function($scope,  DataService, LocalStorageService) {

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


                //TODO:povuci iz localStorage tj preko DataServisa
               $scope.markers = [
                   {
                       idKey:1,
                       latitude: 46.1594043,
                       longitude: 16.8329347,
                       icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
                       title: 'Renesansni festival Koprivnica'
                   },
                   {
                       idKey:2,
                       latitude: 46.1618589,
                       longitude: 16.8326043,
                       icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red.png',
                       title: 'Zrinski trg'
                   },
                   {   idKey:3,
                       latitude: 46.159927,
                       longitude: 16.833827,
                       icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red.png',
                       title: 'Kraljevska pozornica'
                   },
                   {   idKey:4,
                       latitude: 46.160061,
                       longitude: 16.834085,
                       icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red.png',
                       title: 'Viteška pozornica'
                   }
                   ,
                   {   idKey:5,
                       latitude: 46.159422,
                       longitude: 16.834042,
                       icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red.png',
                       title: 'Kuhinja kraljevih kuhara'
                   }

               ];

               $scope.windowOptions = {
                   show: false
               };

               $scope.onClick = function() {
                   $scope.windowOptions.show = !$scope.windowOptions.show;
               };

               $scope.closeClick = function() {
                   $scope.windowOptions.show = false;
               };


        /* TODO: iz servisa pozove se ono za trenutnu poziciju, stavi se na kartu ta pozicija
            var currentPosition={
                idKey:6,
                latitude: 46.1618589,
                longitude: 16.8326043,
                icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
                title: 'Moja pozicija'
            };

            $scope.markers.push(currentPosition); */



        }
    ]);