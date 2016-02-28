var myApp = angular.module('myApp');

myApp.service('QueueService', [QueueService]);

function QueueService () {
  var cardNumber = 0;

  var queueLists = this.queueLists = [
    {
      cardNumber: ++cardNumber,
      title: 'Wash Clothes',
      priority: 'medium',
      status: 'queue',
      createdBy: 'Chaz',
      assignedTo: 'Chaz'
    },
    {
      cardNumber: ++cardNumber,
      title: 'Walk the Dog',
      priority: 'high',
      status: 'queue',
      createdBy: 'Chaz',
      assignedTo: 'Chaz'
    },
    {
      cardNumber: ++cardNumber,
      title: 'Wash Car',
      priority: 'medium',
      status: 'queue',
      createdBy: 'Chaz',
      assignedTo: 'Chaz'
    },
    {
      cardNumber: ++cardNumber,
      title: 'Code Code Code',
      priority: 'high',
      status: 'queue',
      createdBy: 'Chaz',
      assignedTo: 'Chaz'
    }
  ];

  this.addCard = function (title, priority, status, createdBy, assignedTo) {
    var newCard = {
      cardNumber: ++cardNumber,
      title: title,
      priority: priority,
      status: status,
      createdBy: createdBy,
      assignedTo: assignedTo
    };
  };

  this.getQueueLists = function () {
    return queueLists;
  };

  this.getCard = function (index) {
    if (index < 0 || index >= queueLists.length) {
      return null;
    }

    return queueLists[index];
  };
}