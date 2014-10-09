'use strict';

angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services'])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .when('/page2', {
        templateUrl: 'views/page2.html',
        controller: 'Page2Ctrl'
      });
  });
