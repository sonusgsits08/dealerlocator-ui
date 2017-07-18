var app = angular.module("app", []);

// app.controller("appController", function() {

   app.controller("appController", function($scope, $q, $http) {
      $scope.showDealerDetails = function(POST_API) {
         console.log("hello world " + $scope.pincode);
         var url = "https://api.github.com/users/sonusgsits08/repos";
         $http.get(url)
             .then(function (response) {
                $scope.apiResponse = $scope.responseData ;

                angular.forEach($scope.apiResponse,function (value,key) {
                   console.log("key:"+key+" project name: "+value.name);
                });
             })
      };
      // mock
      $scope.responseData = {
         "stores": [{
            "storeId": "S123456789",
            "storeName": "xyz dealer",
            "physicalAddress": {
               "streetAddress": "6315 E Auto Park Dr ",
               "city": "Mesa",
               "state": "Arizona",
               "stateCode": "AZ",
               "country": "",
               "postalCode": "85206",
               "phone": {
                  "code": "555",
                  "phoneNumber": "1234567"
               }
            },
            "formatted_address": "6315 E Auto Park Dr, Mesa, AZ 85206, USA",
            "location": {
               "lat": 33.38,
               "lng": -111.69
            },
            "distanceFromUser": 5,
            "place_id": "ChIJ301Sj7SvK4cRMwe9l-d6Ung"
         },
            {
               "storeId": "S423847268",
               "storeName": "abc dealer",
               "physicalAddress": {
                  "streetAddress": "1234 N ABC Park",
                  "city": "New York",
                  "state": "New York",
                  "stateCode": "NY",
                  "country": "",
                  "postalCode": "77777",
                  "phone": {
                     "code": "333",
                     "phoneNumber": "2136998"
                  }
               },
               "formatted_address": "1234 N ABC Park, New York, NY 77777, USA",
               "location": {
                  "lat": 44.38,
                  "lng": 99.69
               },
               "distanceFromUser": 12,
               "place_id": "vqwhefvqwjhvbqwkjb-d6Ung"
            },
            {
               "storeId": "S39847938",
               "storeName": "PQR dealer",
               "physicalAddress": {
                  "streetAddress": "2222 S Some Park",
                  "city": "Portland",
                  "state": "Oregon",
                  "stateCode": "OR",
                  "country": "",
                  "postalCode": "88888",
                  "phone": {
                     "code": "222",
                     "phoneNumber": "5837468"
                  }
               },
               "formatted_address": "2222 S Some Park, Portland, OR 88888, USA",
               "location": {
                  "lat": 77.38,
                  "lng": 55.69
               },
               "distanceFromUser": 9,
               "place_id": "jqwhefbqjwhefefwfvjwh-d6Ung"
            }
         ]
      }
   });

// });