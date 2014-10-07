var myApp = angular.module('cursoApp', []);

myApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
});

// Controller
myApp.controller('testeController', function($scope, $filter, Produtos) {
  $scope.produtos = Produtos.all();
  $scope.nome = $filter('reverse')('Matheus');
});

// Services
myApp.factory('Produtos', function($http) {
  // $http.get(...)
  // Request back-end
  var produtos = [
    {nome: 'Televisão', valor: 1500, desc: 'Lorem ipsum dolor sit amet'},
    {nome: 'Rádio', valor: 500, desc: 'Lorem ipsum dolor sit amet'},
    {nome: 'Computador', valor: 3500, desc: 'Lorem ipsum dolor sit amet'}
  ];

  return {
    all: function() {
      return produtos;
    },
    one: function(id) {
      return produtos[id];
    },
    create: function(Produto) {
      // $http.post(produto)
    }
  }
});

// Directives
myApp.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      element.addClass(attrs.enter);
    });
  };
});

myApp.directive("leave", function () {
  return function (scope, element, attrs) {
    element.bind("mouseleave", function () {
      element.removeClass(attrs.enter);
    });
  };
});
