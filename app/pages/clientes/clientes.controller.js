'use strict';

angular.module('myApp.clientes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clientes', {
    templateUrl: 'pages/clientes/clientes.view.html',
    controller: 'ClientesCtrl'
  });
}])

.controller('ClientesCtrl', ['$scope','$http', '$rootScope', function($scope, $http,$rootScope) {

  $scope.storage = localStorage.getItem("user");
  if(!$scope.storage){ window.location.href = "/#!/login";  } else { $rootScope.user= true; }
 

// Simple GET request example:
$http({
  method: 'GET',
 //url: 'http://localhost:3000/api/react/webclients'
 url: 'https://new-app-mew.herokuapp.com:443/api/react/webclients'
}).then(function successCallback(response) {

	  $scope.clientes = response.data;
    console.log($scope.clientes)
   	
  }, function errorCallback(err) {
    console.log(err);
  });


  $rootScope.logOut = function (){
    window.location.reload(); 
    localStorage.removeItem('user');
    localStorage.clear();
  };


	

}]);