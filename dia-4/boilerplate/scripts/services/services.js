'use strict';

angular.module('myApp.services', [])
  .factory('Home', function($http, $q) {
    return {
      get: function() {
        // the $http API is based on the deferred/promise APIs exposed by the $q service
        // so it returns a promise for us by default
        return $http.get('request.json')
          .then(function(response) {
              return response.data;
            }, function(response) {
            // something went wrong
            return $q.reject(response.data);
          });
      }
    };
  });
