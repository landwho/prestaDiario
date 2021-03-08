

'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login/login.view.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$http','$rootScope', '$db',function($scope, $http,$rootScope,$db) {

 
  $scope.storage = localStorage.getItem("user");
  //console.log($scope.storage);

  if($scope.storage){ 
   window.location.href = "/#!/dashboard"; 
   $rootScope.user= false;  
  } 
  //else { $rootScope.user= false; }

if(!$scope.storage){ 
  window.location.href = "/#!/login";
  $rootScope.user= false; 
  }

$scope.loading;


 $scope.login = function(){

  $scope.email;
  $scope.pass;
  $scope.loading=true;
  $scope.hideLogin=true;
  //console.log( $scope.email);
  //console.log( $scope.pass);


  //simpe method post
  $http({
    method: 'POST',
    url: 'https://new-app-mew.herokuapp.com:443/api/react/login',
   // url: 'http://localhost:3000/api/react/login',
    headers: {
      'Content-Type': 'application/json'
  },
    data:  JSON.stringify({ 
          usuario: $scope.email,
          password: $scope.pass,
    })}).then(function(response) {

    if(response.data.length >0){
    
      $rootScope.user = response.data;
      localStorage.setItem("user",response.data);
      window.location.href = "/#!/dashboard"; 
      localStorage.setItem(  "user", JSON.stringify($rootScope.user) );
      }
      $scope.loading=false;
      $scope.hideLogin=false;
      $scope.message ="* Usuario invalido";
      //console.log(response.data);
  }, 
  function(err) { // optional
    $scope.loading=false;
    $scope.hideLogin=false;
  console.log(err);
  });

 }; 


$rootScope.logOut = function (){
  window.location.reload(); 
  localStorage.removeItem('user');
  localStorage.clear();
};


  
  }]);