
angular.module('mapGeolocation.services',[])

    /**
     * @name MapGeolocationService
     * @desc Service for user geolocation
     */
    .factory('MapGeolocationService',['$q',
        function($q) {

            return {
                //TODO: refactor
                /**
                 * @name getLocation
                 * @desc method returns user geolocation
                 * @returns {string} geolocation coordinates
                 */
                getLocation: function () {
                   /* var q = $q.defer();
                    alert(1);
                    window.navigator.geolocation.getCurrentPosition(onSuccess,onError).then(function(response) {
                        alert(2);
                        q.resolve(pos);
                    }, function (error) {
                        q.reject(error);
                    });
                    return q.promise;*/
                    window.navigator.geolocation.getCurrentPosition();

                }
            }
        }
    ]);