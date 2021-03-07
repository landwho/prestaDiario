'use strict';

angular.module('myApp.reportes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/getreport', {
    templateUrl: 'pages/reportes/reportes.view.html',
    controller: 'ReportesCtrl'
  });
}])

.controller('ReportesCtrl', ['$scope','$http', '$rootScope', function($scope, $http, $rootScope) {

  $scope.storage = localStorage.getItem("user");
  if(!$scope.storage){ window.location.href = "/#!/login";  } else { $rootScope.user= true; }


  $rootScope.logOut = function (){
    window.location.reload(); 
    localStorage.removeItem('user');
    localStorage.clear();
  };






  $scope.getReport2 = function(){



var date2 = "02/06/2019";


// Simple GET request example:
$http({
    method: 'POST',
  //  url: 'http://localhost:3000/api/react/webclients'
   url: 'https://new-app-mew.herokuapp.com:443/api/react/datereport',
  
   data:  JSON.stringify({ 
    // fechaprestamo:      $scope.date,
    fechaprestamo:   date2

})}).then(function successCallback(response) {
  
      $scope.reporte = response.data;
      console.log($scope.reporte)
         
    }, function errorCallback(err) {
      console.log(err);
    });


}








$scope.getReport = function(){

    var date = $scope.date;
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    


    //#1
    if(month < 10 && day<10){
     var date1 = `0${day}/0${month}/${year}`;
     //simpe method post
     $http({
        method: 'POST',
        //  url: 'http://localhost:3000/api/react/webclients'
         url: 'https://new-app-mew.herokuapp.com:443/api/react/datereport',
        
         data:  JSON.stringify({ 
          // fechaprestamo:      $scope.date,
          fechaprestamo:   date1
       })}).then(function(response) {
        $scope.reportToDate = response.data[0];
       console.log($scope.reportToDate);

       $scope.grandTotal = 0;

       for(var i = 0 ; i<$scope.reportToDate.length; i++){
           var product = $scope.reportToDate[i];
           $scope.grandTotal += (product.total);
           console.log($scope.grandTotal);
       }
       
      // return total;
       
      // console.log(total);


    
     }, 
     function(err) { // optional
     console.log(err);
     });
   }//end if
 
 

   //#2
   else if(day>=10 && month < 10){
     var date2 = `${day}/0${month}/${year}`;
     //simpe method post
     $http({
        method: 'POST',
        //  url: 'http://localhost:3000/api/react/webclients'
         url: 'https://new-app-mew.herokuapp.com:443/api/react/datereport',
        
         data:  JSON.stringify({ 
          // fechaprestamo:      $scope.date,
          fechaprestamo:   date2
       })}).then(function(response) {
        $scope.reportToDate = response.data[0];

        $scope.grandTotal = 0;

       for(var i = 0 ; i<$scope.reportToDate.length; i++){
           var product = $scope.reportToDate[i];
           $scope.grandTotal += (product.total);
           console.log($scope.grandTotal);
       }
     
     }, 
     function(err) { // optional
     console.log(err);
     });
   }//end else if
 


   //#3
   else if(day<10 && month >= 10){
     var date3 = `0${day}/${month}/${year}`;
     //simpe method post
     $http({
        method: 'POST',
        //  url: 'http://localhost:3000/api/react/webclients'
         url: 'https://new-app-mew.herokuapp.com:443/api/react/datereport',
        
         data:  JSON.stringify({ 
          // fechaprestamo:      $scope.date,
          fechaprestamo:   date3
       })}).then(function(response) {
        $scope.reportToDate = response.data[0];

        $scope.grandTotal = 0;

        for(var i = 0 ; i<$scope.reportToDate.length; i++){
            var product = $scope.reportToDate[i];
            $scope.grandTotal += (product.total);
            console.log($scope.grandTotal);
        }
      
     }, 
     function(err) { // optional
     console.log(err);
     });
   }//end else if
 
 
 

   //#4
   else{
     var date4 = `${day}/${month}/${year}`;
     //simpe method post
     $http({
        method: 'POST',
        //  url: 'http://localhost:3000/api/react/webclients'
         url: 'https://new-app-mew.herokuapp.com:443/api/react/datereport',
        
         data:  JSON.stringify({ 
          // fechaprestamo:      $scope.date,
          fechaprestamo:   date4
       })}).then(function(response) {
        $scope.reportToDate = response.data[0];
        
        $scope.grandTotal = 0;

        for(var i = 0 ; i<$scope.reportToDate.length; i++){
            var product = $scope.reportToDate[i];
            $scope.grandTotal += (product.total);
            console.log($scope.grandTotal);
        }//end of for
     }, 
     function(err) { // optional
     console.log(err);
     });
   }//end else
     
 
 
 
 
 
 
 }//end function cobrar
 









//  $scope.imprSelec = function (nombre) 
// { 
// var articulo = document.getElementById($scope.grandTotal); 
// var ventimp = window.open(' ','impresion','no','no','50','no','no','no','no','no','no','no','no','50'); 
// ventimp.document.write(
//    " <h1>Reporte</h1> "+
//   '<table class="responsive">'+
//   '<thead>'+
//       '<tr>'+
//           '<th class="theadColor">Fecha</th>'+
//           '<th class="theadColor">Cliente</th>'+
//           '<th class="theadColor">Abono</th>'+
//       '</tr>'+
//   '</thead>'+
  

// '<tr class="pointer" '+ ng-repeat+'='+'r in reportToDate | filter:searchText' +' >'+
//   '    <td data-label="Codigo">{{r.pago  }}</td>'+
//   '  <td data-label="Plan">{{r.cliente}}</td>'+
//   '<td data-label="Plan">'+Q.{{r.abonos | number:2}}+'</td>'+
//   '</tr>'+
//   '<tr class="totalBackGroundColor">  '+
//   '  <td class="totalBackGroundColor">  TOTAL</td> '+
//   ' <td class="totalBackGroundColor"> </td> '+
//   '<td class="totalBackGroundColor"> Q.{{grandTotal | number:2}}</td> '+
//  ' </tr>'+


  
//   '</table>'
   
//    +$scope.grandTotal
    
    
//     ); 
// ventimp.document.close(); 
// ventimp.print( ); 
// ventimp.close(); 
// } 







}]);