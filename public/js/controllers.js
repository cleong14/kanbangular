var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'QueueService',
  'Cards',
  function($scope, QueueService, Cards) {
    $scope.cards = [];
    $scope.currentCard = {};

    Cards.getCards()
      .then(function (res) {
        console.log(res.data);
        $scope.cards = res.data;
      }
    );

    $scope.addCard = function (title, priority, createdBy, assignedTo) {
      console.log(angular.element(document).find('input'));
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

    $scope.update = function (id) {
      Cards.updateCard(id)
      .then(function (res) {
        Cards.getCards()
        .then(function (res) {
          $scope.cards = res.data;
        });
      });
    };

    $scope.updateStatus = function (id, status, card) {
      card.Status = status;
      Cards.updateStatus(id, status)
      .then(function (res) {
        Cards.getCards()
        .then(function (res) {
          $scope.cards = res.data;
        });
      });
    };
  }
]);

// blur and focus to double click text and itll turn it into an input field