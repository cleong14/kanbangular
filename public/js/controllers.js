var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'QueueService',
  'Cards',
  function($scope, QueueService, Cards) {
    $scope.cards = [];
    Cards.getCards()
      .then(function (res) {
        console.log(res.data);
        $scope.cards = res.data;
      }
    );
    $scope.updateStatus = function (status, card) {
      card.Status = status;
    };
  }
]);