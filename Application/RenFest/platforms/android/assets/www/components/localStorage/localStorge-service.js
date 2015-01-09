/**
 * Created by Matija on 7.12.2014..
 */

angular.module('localStorage.services', ['ngStorage'])

    .factory('LocalStorageService',['$localStorage',
        function($localStorage) {
            return {
                // Saving that data is in localStorage
                setData:function(value){
                    $localStorage.data=value;
                },
                // Return if data is in localStorage
                getData:function(){
                    return $localStorage.data;
                },
                //Saving contacts data in localStorage
                setContacts: function(value){
                    $localStorage.contacts=value;
                },
                //Return contacts data from localStorage
                getContacts:function(){
                    return $localStorage.contacts;
                },
                //Saving renaissance data in localStorage
                setRenaissance: function(value){
                    $localStorage.renaissance=value;
                },
                //Return renaissance data from localStorage
                getRenaissance:function(){
                    return $localStorage.renaissance;
                },
                //Saving events data in localStorage
                setEvents: function(value){
                    $localStorage.events=value;
                },
                //Return events data from localStorage
                getEvents:function(){
                    return $localStorage.events;
                },
                //Saving smartphone language to localStorage
                setLanguage:function(value){
                    $localStorage.language=value;
                },
                //Return smartphone language
                getLanguage:function(){
                    return $localStorage.language;
                }
            }
        }
    ]);