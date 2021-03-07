'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('myApp', [
  'ngRoute',

  'myApp.clientes',
  'myApp.cobros',
  'myApp.CobrosClient',
  'myApp.historial',
  'myApp.home',
  'myApp.ingresos',
  'myApp.login',

  'myApp.planes',
  'myApp.prestamos',
  'myApp.reportes',


  




  'base64',
  'myApp.version'
]); 


myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function() {
             scope.$apply(function() {
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }])
 
 
 myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider,$httpProvider,$base64Provider) {
  $locationProvider.hashPrefix('!');

 	$routeProvider.otherwise({redirectTo: '/login'});


}]);

myApp.service("$db", function () {
    this.query = firebase.firestore;
    this.readCollection = function (reference, $scope, name, callback){
        reference.get().then(
            function (results) {
                var items = [];
                results.forEach(function (doc) {
                    var data = doc.data();
                    data.$id = doc.id;
                    items.push(data);

                    if(angular.isDefined(callback) && angular.isFunction(callback))
                    {
                        callback(data)
                    }
                });
                $scope.$apply(function () {
                    $scope[name] = items;
                })
            }
        )
    }
});

myApp.directive('numberFormatter', ['$filter', function ($filter) {
    var decimalCases = 2,
        whatToSet = function (numb) {
            // var numb;
            var separator;
            var num = numb !== null ? numb : 0;
            var numbe = num !== undefined ? num : 0;


            if ( separator === ',') {
                var str = numbe;
                str = str.replace(',', '.');
                numbe = parseFloat(numb);
            }
            return numbe;
        },
        whatToShow = function (num) {
            return 'Q. ' + $filter('number')(num, decimalCases);
        };

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            ngModel.$parsers.push(whatToSet);
            ngModel.$formatters.push(whatToShow);

            element.bind('blur', function() {
                element.val(whatToShow(ngModel.$modelValue))
            });
            element.bind('focus', function () {
                element.val(ngModel.$modelValue);
            });
        }
    };
}]);



