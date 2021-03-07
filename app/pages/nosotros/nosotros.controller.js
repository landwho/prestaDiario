'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'pages/nosotros/nosotros.view.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl',  ['$scope','$http', function($scope, $http) {

// Simple GET request example:
$http({
  method: 'GET',
  url: 'http://localhost:3000/api/react/clients'
}).then(function successCallback(response) {
   	console.log(response.data);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



	

}]);