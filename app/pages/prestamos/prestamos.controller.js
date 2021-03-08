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

  $scope.planes =[
    {plan:24},
    {plan:48}
  ];
  $scope.prestamos =[
    {prestamo:  500},
    {prestamo: 1000},
    {prestamo: 1500},
    {prestamo: 2000},
    {prestamo: 2500},
    {prestamo: 3000}
  ]

  



$scope.enviarNuevoCliente = function(){
  var date;
  var date = $scope.date.toLocaleDateString();
  //console.log(date);


  console.log($scope.planInt =parseInt($scope.plan));
  console.log($scope.prestamosInt =parseInt($scope.prestamo));
  console.log("POST CLIENT");

  console.log(date);





/*
var data ={ 
  fecha: $scope.date.toLocaleDateString(),
  nombre: $scope.nombre,
  DPI: $scope.DPI,
  direccion:  $scope.direccion,
  telefono: $scope.telefono,
  negocio: $scope.negocio,
  prestamo:$scope.prestamosInt,
  plan:$scope.planInt
}



console.log(data);

if($scope.date==undefined){
  $scope.fechaERROR="* Campo obligatorio";
}
if(data.nombre==undefined){
  $scope.nombreERROR="* Campo obligatorio";
}
if(data.DPI==undefined){
  $scope.dpiERROR="* Campo obligatorio";
}
if(data.telefono==undefined){
  $scope.telefonoError="* Campo obligatorio";
}
if(data.prestamo==NaN){
  $scope.prestamoERROR="* Campo obligatorio";
}
else{
  $scope.fechaERROR="";
}
*/


$scope.hideForm = true;
$scope.loading=true;
if($scope.DPI==undefined){
  $scope.dpiERROR="* Campo obligatorio";
}
if($scope.telefono==undefined){
  $scope.telefonoError="* Campo obligatorio";
}

else{ 

  $scope.loading=true;
  $scope.hideForm = true;
  $scope.checked= true;

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
      prestamo:$scope.prestamosInt,
      plan:$scope.planInt
  })
}).then(function(response) {
    $scope.hideForm=true;
  console.log(response.data);
  window.location.href = "/#!/clientes"; 
  }, 
  function(err) { // optional
  console.log(err); alert("ERROR!",window.location.href = "/#!/clientes");
  }).catch(function(error) {
    alert("ERROR!");
  });



}







}








gsap.to("rect", {
  scale: 0.5,
  transformOrigin: "center",
  duration: 1,
  stagger: { yoyo: true, repeat: -1, each: 0.4 }
});










}]);