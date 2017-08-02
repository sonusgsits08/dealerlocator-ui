var app = angular.module("app", []);

app.controller("appController", function($scope, $q, $http) {
     $scope.showDealerDetails = function (){
        $scope.payload = {
           "contactNo":$scope.contactNo,
           "radius":$scope.radius,
           "modelNo":$scope.modelNo,
           "serviceType":[$scope.serviceType],
           "address": {
              "zip":$scope.pincode,
              "streetAddress":$scope.streetAddress,
              "city":$scope.city,
              "stateCode":$scope.stateCode,
              "state":$scope.state,
              "country":$scope.country,
           }
        };
        console.log("hello world " + $scope.payload.contactNo);
         //var url = "https://api.github.com/users/sonusgsits08/repos";
         // var url = "http://localhost:8080/findStores";
        // var url ='http://pun-dwivedia-m.ds.ad.adp.com:8080/findStores';
         var url="http://c13dcsssvc995.dslab.ad.adp.com:8080/findStores"
        //  var config = {
        //     method:'POST',
        //     headers: {'Content-Type': 'application/json; charset=utf-8','Access-Control-Allow-Origin':'*',
        //        'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Credentials':true}
        // };
         $http.post(url,$scope.payload).then(function (response) {
            $scope.responseData = response.data;
            console.log("response is"+response.data.storeDetails[0].storeName);
         })
      }
   });