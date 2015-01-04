/**
 * Created by Matija on 3.1.2015..
 */

angular.module('data.services', [])

    .factory('DataService',function(){
            return {
                getData:function(retrievedData){
                    var data=[];
                    angular.forEach(retrievedData,function(value,key){
                        data.push(value);
                    });
                    return data;
                },
                getEventsData:function(retrievedData,day){
                    var eventsData;
                    var data=[];
                    switch (day){
                        case "day1":
                            eventsData=retrievedData.day1;
                            break;
                        case "day2":
                            eventsData=retrievedData.day2;
                            break;
                        case "day3":
                            eventsData=retrievedData.day3;
                            break;
                    }
                    angular.forEach(eventsData,function(value,key){
                        data.push(value);
                    });
                    return data;
                },
                getEventsDetailsData:function(retrievedData){
                    var data=[];
                    angular.forEach(retrievedData,function(information,key){
                        angular.forEach(information,function(value,key){
                            data.push(value);
                        });
                    });
                    return data;
                }
            }
    });