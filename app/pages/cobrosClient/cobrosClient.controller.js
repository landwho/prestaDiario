'use strict';

angular.module('myApp.CobrosClient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cobroscl/:id/:pagoDiario/:nombre/:totalPayConInteres/:deudaTotal/:plan/:prestamo', {
    templateUrl: 'pages/cobrosClient/cobrosClient.view.html',
    controller: 'CobrosClientCtrl'
  });
}])

.controller('CobrosClientCtrl',  ['$scope','$http', '$routeParams', '$rootScope', function($scope, $http, $routeParams,$rootScope) {

 
    $scope.storage = localStorage.getItem("user");
    console.log($scope.storage);
    if(!$scope.storage){ window.location.href = "/#!/login";  } else { $rootScope.user= true; }
  

    $rootScope.logOut = function (){
        window.location.reload(); 
        localStorage.removeItem('user');
        localStorage.clear();
      };

    $scope.id = $routeParams.id;
    $scope.nombre = $routeParams.nombre;

    $scope.pagoDiario = $routeParams.pagoDiario;
    $scope.debe = $routeParams.deudaTotal;
    $scope.paln = $routeParams.plan;

    $scope.interes = $routeParams.totalPayConInteres;
    $scope.prestamo = $routeParams.prestamo;

    console.log($scope.nombre);
    console.log($scope.pagoDiario);
    console.log($scope.debe);
    console.log($scope.interes);
    console.log($scope.abono);
   
 



// $scope.sendData = function(){
//     var date = $scope.date;
//     let day = date.getDate()
//     let month = date.getMonth() + 1
//     let year = date.getFullYear()
//     if(month < 10 && day<10){console.log(`0${day}/0${month}/${year}`)}
//     else if(day>=10 && month < 10){console.log(`${day}/0${month}/${year}`)}
//     else if(day<10 && month >= 10){console.log(`0${day}/${month}/${year}`)}
//     else{console.log(`${day}/${month}/${year}`)}
// }

   
$scope.cobrar = function(){

   var date = $scope.date;
   let day = date.getDate()
   let month = date.getMonth() + 1
   let year = date.getFullYear()
   
   $scope.loading=true;
   $scope.hideLogin=true;


   if(month < 10 && day<10){
    var date1 = `0${day}/0${month}/${year}`;

    //simpe method post
    $http({
      method: 'PUT',
      url: 'https://new-app-mew.herokuapp.com:443/api/react/cobrar/'+$scope.id,
    // url: 'http://localhost:3000/api/react/login',
      headers: {
      'Content-Type': 'application/json'
    },
      data:  JSON.stringify({ 
          id:                 $scope.id,
          fecha:              date1,
          deudaTotal:         $scope.debe,
          pago:               $scope.abono,
          plan:               $scope.paln,
          cantidadprestada:   $scope.prestamo,
          totalPayConInteres: $scope.interes
      })}).then(function(response) {
      console.log(response.data);
      window.location.href = "/#!/cobros"; 
    }, 
    function(err) { // optional
    console.log(err);
    });




  }//end if


  else if(day>=10 && month < 10){
    var date2 = `${day}/0${month}/${year}`;
    //simpe method post
    $http({
      method: 'PUT',
      url: 'https://new-app-mew.herokuapp.com:443/api/react/cobrar/'+$scope.id,
    // url: 'http://localhost:3000/api/react/login',
      headers: {
      'Content-Type': 'application/json'
    },
      data:  JSON.stringify({ 
          id:                 $scope.id,
          fecha:              date2,
          deudaTotal:         $scope.debe,
          pago:               $scope.abono,
          plan:               $scope.paln,
          cantidadprestada:   $scope.prestamo,
          totalPayConInteres: $scope.interes
      })}).then(function(response) {
      console.log(response.data);
      window.location.reload(); 
    }, 
    function(err) { // optional
    console.log(err);
    });
  }//end else if


  else if(day<10 && month >= 10){
    var date3 = `0${day}/${month}/${year}`;
    //simpe method post
    $http({
      method: 'PUT',
      url: 'https://new-app-mew.herokuapp.com:443/api/react/cobrar/'+$scope.id,
    // url: 'http://localhost:3000/api/react/login',
      headers: {
      'Content-Type': 'application/json'
    },
      data:  JSON.stringify({ 
          id:                 $scope.id,
          fecha:              date3,
          deudaTotal:         $scope.debe,
          pago:               $scope.abono,
          plan:               $scope.paln,
          cantidadprestada:   $scope.prestamo,
          totalPayConInteres: $scope.interes
      })}).then(function(response) {
      console.log(response.data);
      window.location.reload(); 
    }, 
    function(err) { // optional
    console.log(err);
    });
  }//end else if



  else{
    var date4 = `${day}/${month}/${year}`;
    //simpe method post
    $http({
      method: 'PUT',
      url: 'https://new-app-mew.herokuapp.com:443/api/react/cobrar/'+$scope.id,
    // url: 'http://localhost:3000/api/react/login',
      headers: {
      'Content-Type': 'application/json'
    },
      data:  JSON.stringify({ 
          id:                 $scope.id,
          fecha:              date4,
          deudaTotal:         $scope.debe,
          pago:               $scope.abono,
          plan:               $scope.paln,
          cantidadprestada:   $scope.prestamo,
          totalPayConInteres: $scope.interes
      })}).then(function(response) {
      console.log(response.data);
      window.location.reload();
    }, 
    function(err) { // optional
    console.log(err);
    });
  }//end else
    






}//end function cobrar

   














	

}]);