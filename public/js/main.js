
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/acasa.html", controller: "PageCtrl"})
    // Pages
    .when("/informatii", {templateUrl: "partials/informatii.html", controller: "PageCtrl"})
    .when("/adauga", {templateUrl: "partials/adauga.html", controller: "AdaugaController"})
    .when("/zoneviz", {templateUrl: "partials/zoneviz.html", controller: "AfiseazaZoneVizController"})
    .when("/zone", {templateUrl: "partials/zone.html", controller: "AfiseazaZoneController"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"});
    
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
    $scope.modifica=function(idz,perioadanoua){
       var object = {};
       object["Perioada"] =perioadanoua;
       if(!perioadanoua){alert ("Perioada nu a fost introdusa!")} else{
            
          $http({
			method: 'PUT',
			url: 'https://webtech-prj-descopero-daniel95dan.c9users.io/Zoneviz/'+idz,
                        crossDomain : true,
                        data:JSON.stringify(object),
    xhrFields: {
        withCredentials: true
    }
		}).then(function successCallback(data) {
                    alert("Noua perioada este "+perioadanoua);
		},
		function errorCallback(response) {
                    alert("Perioada nu a fost modificata!");
    
});
window.location.reload();
    }
    };
    $scope.sterge = function(id) {
        var object = {};
        
            $http({
                method: 'DELETE',
                url: 'https://webtech-prj-descopero-daniel95dan.c9users.io/Zoneviz/'+id,
                crossDomain: true,
                data: JSON.stringify(object),
                xhrFields: {
                    withCredentials: true
                }
            }).then(function successCallback(data) {
                },
                function errorCallback(response) {
                    alert("Zona Vizitata a fost stearsa!");

                });
   window.location.reload();     
    };
    
});
app.controller('AdaugaController', function($http, $scope, $window) {
    $scope.creare = function() {

        var object1 = {};
        object1["Nume"] = $scope.nume;
        object1["Perioada"] = $scope.perioada;
        $http({
            method: 'POST',
            url: 'https://webtech-prj-descopero-daniel95dan.c9users.io/Zoneviz',
            crossDomain: true,
            data: JSON.stringify(object1),
            xhrFields: {
                withCredentials: true
            }
        }).then(function successCallback(data) {
                alert("Zona vizitata creata");
                $scope.nume = " ";
                $scope.perioada = " ";


            },
            function errorCallback(response) {
                alert("Eroare server!");

            });
    };
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
  });
});