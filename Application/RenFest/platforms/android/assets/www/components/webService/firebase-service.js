angular.module('firebase.services', ['firebase'])
    .factory('FirebaseService',['$q','$firebase',
            function($q,$firebase) {
                return {
                    //Fetch and synchronize data from web service
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