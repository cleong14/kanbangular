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

    $scope.addCard = function (title, priority, createdBy, assignedTo) {
      Cards.createCard({
        Title: title,
        Priority: priority,
        Status: 'Queue',
        CreatedBy: createdBy,
        AssignedTo: assignedTo
      })
      .then(function (res) {
        Cards.getCards()
        .then(function (res) {
          console.log(res.data);
          $scope.cards = res.data;
        });
      });
    };

    $scope.delete = function (id) {
      Cards.deleteCard(id)
      .then(function (res) {
        Cards.getCards()
        .then(function (res) {
          $scope.cards = res.data;
        });
      });
    };

    $scope.updateStatus = function (status, card) {
      card.Status = status;
    };
  }
]);