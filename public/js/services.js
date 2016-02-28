var myApp = angular.module('myApp');

myApp.service('QueueService', [QueueService]);

function QueueService () {
  var cardNumber = 0;
  var low = 'Low';
  var medium = 'Medium';
  var high = 'High';
  var queue = 'Queue';
  var progress = 'In Progress';
  var done = 'Done';
  var myself = 'Chaz';

  var queueLists = this.queueLists = [
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Wash Clothes',
      priority: 'Priority: '+ low,
      status: 'Status: ' + queue,
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    },
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Walk the Dog',
      priority: 'Priority: '+ high,
      status: 'Status: ' + queue,
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    },
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Wash Car',
      priority: 'Priority: '+ medium,
      status: 'Status: ' + queue,
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    },
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Code Code Code',
      priority: 'Priority: '+ high,
      status: 'Status: ' + queue,
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    }
  ];

  this.addCard = function (title, priority, status, createdBy, assignedTo) {
    var newCard = {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: title,
      priority: 'Priority: '+ priority,
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