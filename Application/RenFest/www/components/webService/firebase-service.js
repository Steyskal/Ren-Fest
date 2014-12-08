
angular.module('firebase.services', ['firebase','ngResource'])

    .factory('FirebaseService', function($q, $rootScope, $firebase) {

        var URL="https://renfest.firebaseio.com";
        var ref= new Firebase(URL);
       // var object = $firebase(ref).$asObject();
        var data = $firebase(ref).$asArray();

        return {

            getData: function() {
                var q = $q.defer();
                data.$loaded()
                    .then(
                        function(data){
                            console.error("Success");
                            q.resolve(data);
                        },
                        function(error){
                            console.error("Error:", error);
                            q.reject(error);
                        });
                return q.promise;
            }
        }

    });