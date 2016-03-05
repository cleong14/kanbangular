var myApp = angular.module('myApp');

myApp.factory('Cards', [
  '$http',
  function ($http) {
    return {
      getCards: function() {
        // this $http is long hand
        return $http({
          method: 'GET',
          url: '/api/cards'
        });
      },

      createCard: function (data) {
        // this $http is short hand
        return $http.post(
          '/api/cards',
          data
        );
      },

      deleteCard: function (id) {
        return $http.post(
          '/api/cards/' + id + '/delete'
        );
      }
    };
  }
]);