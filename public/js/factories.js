var myApp = angular.module('myApp');

myApp.factory('Cards', [
  '$http',
  function ($http) {
    return {
      getCards: function() {
        return $http({
          method: 'GET',
          url: '/api/cards'
        });
      }
    };
  }
]);