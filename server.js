var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', function (req, res) {
  res.render('/index.html');
});

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});