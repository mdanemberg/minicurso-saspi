'use strict';

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', function($scope, Home) {
    Home.get()
      // then() called when son gets back
      .then(function(data) {
        // promise fulfilled
        $scope.list = data;
      }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);
        console.log(error);
      });
  })

  .controller('Page2Ctrl', function($scope) {
    $scope.name = 'Wow';
  });
