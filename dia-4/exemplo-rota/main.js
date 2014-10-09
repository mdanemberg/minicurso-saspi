var myApp = angular.module('cursoApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        templateUrl: 'teste.html',
        controller: 'testeController'
      }
    )

    .when('/foo',
      {
        templateUrl: 'teste2.html',
        controller: 'teste2Controller'
      }
    )

    .otherwise({
        redirectTo: '/'
    });
});

// Controller
myApp.controller('testeController', function($scope) {
  $scope.page = 'Pagina 1';
});

myApp.controller('teste2Controller', function($scope) {
  $scope.page = 'Pagina 2';
});
