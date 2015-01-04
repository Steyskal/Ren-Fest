angular.module('firebase.services', ['firebase'])
    .factory('FirebaseService',['$q','$rootScope','$firebase',
            function($q, $rootScope, $firebase) {
                return {
                    getData: function(lang) {
                        var URL="https://renfest.firebaseio.com/"+lang;
                        var ref= new Firebase(URL);
                        var data = $firebase(ref).$asArray();
                        var q = $q.defer();
                        data.$loaded()
                            .then(
                                function(data){
                                    q.resolve(data);
                                },
                                function(error){
                                    q.reject(error);
                                });
                        return q.promise;
                    }
                }
            }
     ]);