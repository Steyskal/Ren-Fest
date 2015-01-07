/**
 * Created by Matija on 2.1.2015..
 */

angular.module('localization.services',['localStorage.services'])

    .factory('LocalizationService',['$q','$translate','LocalStorageService',
        function($q,$translate,LocalStorageService) {
            return {
                //Method returns language that is used on smartphone
                getLanguage: function () {
                    var q = $q.defer();
                    if (typeof navigator.globalization !== "undefined") {
                        navigator.globalization.getPreferredLanguage(function (language)
                        {
                            $translate.use((language.value).split("-")[0]).then(function (data)
                            {
                                q.resolve(data);
                            }, function (error) {
                                q.reject(error);
                            });
                        });
                    }
                    return q.promise;
                },
                // Method save smartphone language into localStorage
                setLanguage: function (lang) {
                    switch (lang) {
                        case "hr":
                            LocalStorageService.setLanguage(lang);
                            break;
                        default :
                            LocalStorageService.setLanguage("en");
                    }
                }
            }
        }
    ]);