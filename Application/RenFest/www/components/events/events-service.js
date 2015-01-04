/**
 * Created by Matija on 3.1.2015..
 */

angular.module('events.services', [])

    .factory('EventsService',['$rootScope',
        function($rootScope) {
            return {
                getEventsData:function(data,day){
                    var eventsData;
                    $rootScope.events=[];
                    switch (day){
                        case "day1":
                            eventsData=data.day1;
                            break;
                        case "day2":
                            eventsData=data.day2;
                            break;
                        case "day3":
                            eventsData=data.day3;
                            break;
                    }
                    angular.forEach(eventsData,function(value,key){
                        $rootScope.events.push(value);
                    });
                    return $rootScope.events;
                }
            }
        }
    ]);