var myApp = angular.module('myApp');

myApp.service('QueueService', [QueueService]);

function QueueService () {
  var cardNumber = 0;
  var low = 'Low';
  var medium = 'Medium';
  var high = 'High';
  var blocker = 'Blocker';
  var progress = 'In Progress';
  var done = 'Done';
  var myself = 'Chaz';

  var queueLists = this.queueLists = [
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Wash Clothes',
      priority: 'Priority: '+ low,
      status: 'Status: Queue',
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    },
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Walk the Dog',
      priority: 'Priority: '+ high,
      status: 'Status: Queue',
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    },
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Wash Car',
      priority: 'Priority: '+ medium,
      status: 'Status: Queue',
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    },
    {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: 'Code Code Code',
      priority: 'Priority: '+ high,
      status: 'Status: Queue',
      createdBy: 'Created By: ' + myself,
      assignedTo: 'Assigned To: ' + myself
    }
  ];

  var progressLists = this.progressLists = [

  ];

  this.addCard = function (title, priority, createdBy, assignedTo) {
    var newCard = {
      cardNumber: 'Card-Id: ' + ++cardNumber,
      title: title,
      priority: 'Priority: '+ priority,
      status: 'Status: Queue',
      createdBy: 'Created By: ' + createdBy,
      assignedTo: 'Assigned To: ' + assignedTo
    };
    queueLists.push(newCard);
  };

  this.getQueueLists = function () {
    return queueLists;
  };

  this.getProgressLists = function () {
    return progressLists;
  };

  this.getCard = function (index) {
    if (index < 0 || index >= queueLists.length) {
      return null;
    }
    return queueLists[index];
  };

  this.updateStatus = function (status, $index) {
    var listArr = this.queueLists;

    console.log(this.queueLists[$index]);

    if (status === 'Queue') {

    }

    if (status === 'In Progress') {
      console.log(progressLists);
      progressLists.push(this.queueLists[$index]);
      console.log(progressLists);
    }

    if (status === 'Done') {

    }
  };
}