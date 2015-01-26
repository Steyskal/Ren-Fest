/**
 * Created by Toni on 26.1.2015..
 */


angular.module('maps.controllers',['data.services','localStorage.services'])
    .controller('MapCtrl',['$scope','DataService','LocalStorageService',
        function($scope,  DataService, LocalStorageService, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatLng = new google.maps.LatLng(46.1638, 16.8332);

        var mapOptions = {
            center: myLatLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    });

}]);