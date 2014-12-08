/**
 * Created by Matija on 7.12.2014..
 */

angular.module('localStorage.services', ['ngStorage'])

    .factory('localStorageService', function($rootScope, $localStorage) {
        /*
        var data;
        var contacts;
        var contactsEng;
        var renaissance;
        var renaissanceEng;

        var contacts =
        {
            address: '',
            email: '',
            fax: '',
            telephone: '',
            web: ''
        }*/


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
            setContactsEng: function(value){
                $localStorage.contactsEng=value;
            },
            getContactsEng:function(){
                return $localStorage.contactsEng;
            },
            setRenaissance: function(value){
                $localStorage.renaissance=value;
            },
            getRenaissance:function(){
                return $localStorage.renaissance;
            }



        }

    });