'use strict';

angular.module('myApp.cobros', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cobros', {
    templateUrl: 'pages/cobros/cobros.view.html',
    controller: 'CobrosCtrl'
  });
}])

.controller('CobrosCtrl', ['$scope','$http', '$rootScope', function($scope, $http,$rootScope) {


  //console.log($rootScope.user);

  $scope.storage = localStorage.getItem("user");
  console.log($scope.storage);
  if(!$scope.storage){ window.location.href = "/#!/login";  } else { $rootScope.user= true; }
 

  //if($rootScope.veryfy == null){ window.location.href = "/#!/login";}

// Simple GET request example:
$http({
  method: 'GET',
//  url: 'http://localhost:3000/api/react/webclients'
 url: 'https://new-app-mew.herokuapp.com:443/api/react/webclients'
}).then(function successCallback(response) {

	$scope.clientes = response.data;
   	console.log($scope.clientes);
   	
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });



  $rootScope.logOut = function (){
    window.location.reload(); 
    localStorage.removeItem('user');
    localStorage.clear();
  };


	

}]);