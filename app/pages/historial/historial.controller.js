'use strict';

angular.module('myApp.historial', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/historial/:id/:name/:DPI/:phone/:interes', {
    templateUrl: 'pages/historial/historial.view.html',
    controller: 'HistorialCtrl'
  });
}])

.controller('HistorialCtrl',  ['$scope','$http', '$routeParams', '$rootScope', function($scope, $http, $routeParams,$rootScope) {

 
  $scope.storage = localStorage.getItem("user");
  if(!$scope.storage){ window.location.href = "/#!/login";  } else { $rootScope.user= true; }
  


$scope.id = $routeParams.id;
$scope.nombre = $routeParams.name;
$scope.DPI = $routeParams.DPI;
$scope.phone = $routeParams.phone;
$scope.interes = $routeParams.interes;




  $http({ method: 'GET', url: 'https://new-app-mew.herokuapp.com:443/api/react/historial/client/'+$scope.id})
    .then(function successCallback(response) {
    $scope.detail = response.data[0];
    //console.log($scope.detail);
    }, function errorCallback(err) {
      console.log(err)
    });

    $rootScope.logOut = function (){
      window.location.reload(); 
      localStorage.removeItem('user');
      localStorage.clear();
    };
	

}]);