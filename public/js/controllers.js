var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'QueueService',
  function($scope, QueueService) {
    $scope.queueLists = QueueService.getQueueLists();
    $scope.QueueService = QueueService;
    $scope.progressLists = QueueService.getProgressLists();
    $scope.doneLists = QueueService.getDoneLists();
  }
]);