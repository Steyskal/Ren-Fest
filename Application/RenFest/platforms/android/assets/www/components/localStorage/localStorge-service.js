/**
 * Created by Matija on 7.12.2014..
 */

angular.module('localStorage.services', ['ngStorage'])

    .factory('LocalStorageService',['$localStorage',
        function($localStorage) {

            return {
                // Saving data to localStorage
                setData:function(value){
                    $localStorage.data=value;
                },
                // Fetch data from localStorage
                getData:function(){
                   return $localStorage.data;
                },
                //Fetch specfic data from localStorage, etc. Events
                getSpecificData:function(name){
                   return $localStorage.data.$getRecord(name);
                },
                //Saving smartphone language to localStorage
                setLanguage:function(value){
                    $localStorage.language=value;
                },
                //Fetch smartphone language
                getLanguage:function(){
                    return $localStorage.language;
                }

            }

        }
    ]);