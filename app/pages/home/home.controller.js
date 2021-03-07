'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.view.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl',  ['$scope','$http', function($scope, $http) {




	

}]);