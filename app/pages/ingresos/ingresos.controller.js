'use strict';

angular.module('myApp.ingresos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: 'pages/ingresos/ingresos.view.html',
    controller: 'IngresosCtrl'
  });
}])

.controller('IngresosCtrl', ['$scope','$http', '$rootScope', function($scope, $http, $rootScope) {


  $scope.storage = localStorage.getItem("user");
  if(!$scope.storage){ window.location.href = "/#!/login";}else {$rootScope.user=true;}



  $http({
    method: 'GET',
   // url: 'http://localhost:3000/api/react/capital'
   url: 'https://new-app-mew.herokuapp.com:443/api/react/capital'
  }).then(function successCallback(response) {
  
    $scope.capital = response.data[0];
      
      
    }, function errorCallback(err) {
      console.log(err);
    });



    $http({
      method: 'GET',
     // url: 'http://localhost:3000/api/react/countClient'
     url: 'https://new-app-mew.herokuapp.com:443/api/react/countClient'
    }).then(function successCallback(response) {
    
      $scope.countClient = response.data[0];
      
        
      }, function errorCallback(err) {
        console.log(err);
      });





$rootScope.logOut = function (){
  window.location.reload(); 
  localStorage.removeItem('user');
  localStorage.clear();
};



}]);