/**
 * Created by Matija on 7.12.2014..
 */

angular.module('localStorage.services', ['ngStorage'])

    .factory('LocalStorageService',['$localStorage',
        function($localStorage) {

            return {

                setData:function(value){
                    $localStorage.data=value;
                },
                getData:function(){
                   return $localStorage.data;
                },
                setContacts: function(value){
                    $localStorage.contacts=value;
                },
                getContacts:function(){
                    return $localStorage.contacts;
                },
                setRenaissance: function(value){
                    $localStorage.renaissance=value;
                },
                getRenaissance:function(){
                    return $localStorage.renaissance;
                },
                setEvents: function(value){
                    $localStorage.events=value;
                },
                getEvents:function(){
                    return $localStorage.events;
                },

                //localization
                setLanguage:function(value){
                    $localStorage.language=value;
                },
                getLanguage:function(){
                    return $localStorage.language;
                }

            }

        }
    ]);