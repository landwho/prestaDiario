'use strict';

angular.module('myApp.prestamos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prestamos', {
    templateUrl: 'pages/prestamos/prestamos.view.html',
    controller: 'PrestamosCtrl'
  });
}])

.controller('PrestamosCtrl', ['$http','$scope','$rootScope',function($http,$scope,$rootScope) {


  $scope.storage = localStorage.getItem("user");
  if(!$scope.storage){ window.location.href = "/#!/login";}else {$rootScope.user=true;}


  $scope.maxLengthCheck = function (object) {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }


  $scope.checked = false;



$scope.enviarNuevoCliente = function(){

  var date = $scope.date.toLocaleDateString();
  console.log(date);
  $scope.loading=true;
  $scope.checked = true;

  //simpe method post
  $http({
  method: 'POST',
  url: 'https://new-app-mew.herokuapp.com:443/api/react/newclient',
  // url: 'http://localhost:3000/api/react/login',
  headers: {
  'Content-Type': 'application/json'
  },
  data:  JSON.stringify({ 
      fecha: date,
      nombre: $scope.nombre,
      DPI: $scope.DPI,
      direccion:  $scope.direccion,
      telefono: $scope.telefono,
      negocio: $scope.negocio,
      prestamo:$scope.prestamo,
      plan:$scope.plan
  })}).then(function(response) {
    $scope.hideForm=true;
  console.log(response.data);
  window.location.href = "/#!/clientes"; 
  }, 
  function(err) { // optional
  console.log(err); alert("ERROR!",window.location.href = "/#!/clientes");
  }).catch(function(error) {
    alert("ERROR!",window.location.href = "/#!/clientes");
  });


}















}]);