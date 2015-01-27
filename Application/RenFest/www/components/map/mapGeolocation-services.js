/**
 * Created by Matija on 27.1.2015..
 */

angular.module('mapGeolocation.services',[])

    .factory('MapGeolocationService',['$q',
        function($q) {
            return {
                //Method returns users geolocation
                getLocation: function () {
                    var q = $q.defer();
                    navigator.geolocation.getCurrentPosition(function(pos) {
                        q.resolve(pos);
                    }, function (error) {
                        q.reject(error);
                    });
                    return q.promise;
                }
            }
        }
    ]);