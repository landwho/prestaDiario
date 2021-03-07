'use strict';

angular.module('myApp.planes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planes', {
    templateUrl: 'pages/planes/planes.view.html',
    controller: 'PlanesCtrl'
  });
}])

.controller('PlanesCtrl', ['$scope','$http', '$rootScope', function($scope, $http, $rootScope) {

  $scope.storage = localStorage.getItem("user");
  if(!$scope.storage){ window.location.href = "/#!/login";  } else { $rootScope.user= true; }


  $rootScope.logOut = function (){
    window.location.reload(); 
    localStorage.removeItem('user');
    localStorage.clear();
  };

}]);