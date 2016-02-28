var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/api', function (req, res) {
  var task = [
    {
      cardNumber: 'Card-Id: 5',
      title: 'GYMMMMMMMMM',
      priority: 'Priority: High',
      status: 'Status: Queue',
      createdBy: 'Created By: Chaz',
      assignedTo: 'Assigned To: Chaz'
    }
  ];
  res.json(task);
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});