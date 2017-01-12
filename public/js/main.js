
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/acasa.html", controller: "PageCtrl"})
    // Pages
    .when("/informatii", {templateUrl: "partials/informatii.html", controller: "PageCtrl"})
    .when("/adauga", {templateUrl: "partials/adauga.html", controller: "PageCtrl"})
    .when("/zoneviz", {templateUrl: "partials/zoneviz.html", controller: "AfiseazaZoneVizController"})
    .when("/zone", {templateUrl: "partials/zone.html", controller: "AfiseazaZoneController"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    
}]);


app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

app.controller('AfiseazaZoneController',function($http,$scope,$window){
    $scope.Zona=function(){
        $http({
			method: 'GET',
			url: 'https://webtech-prj-descopero-daniel95dan.c9users.io/Zona',
                        crossDomain : true,
    xhrFields: {
        withCredentials: true
    }
		}).then(function successCallback(data) {
			$scope.Zona=data.data;
		},
		function errorCallback(response) {
        
});
  };
    $scope.Zona();
});
app.controller('AfiseazaZoneVizController',function($http,$scope,$window){
    $scope.Zoneviz=function(){
        $http({
			method: 'GET',
			url: 'https://webtech-prj-descopero-daniel95dan.c9users.io/Zoneviz',
                        crossDomain : true,
    xhrFields: {
        withCredentials: true
    }
		}).then(function successCallback(data) {
			$scope.Zoneviz=data.data;
		},
		function errorCallback(response) {
        
});
  };
    $scope.Zoneviz();
});


app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});