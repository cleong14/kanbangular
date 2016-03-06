var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var sequelize = require('sequelize');
var db = require('./models');
var faker = require('faker');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({strict: false}));

app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/api/cards', function (req, res) {
  db.Card.findAll({})
  .then(function(cards) {
    res.json(cards);
  });
});

app.get('/api/cards/:id', function (req, res) {
  db.Card.find({
    where: {
      id: req.params.id
    }
  })
  .then(function (task) {
    res.json(task);
  });
});

app.post('/api/cards', function (req, res) {
  console.log(req);
  db.Card.create({
    Title: req.body.Title,
    Priority: req.body.Priority,
    Status: req.body.Status,
    CreatedBy: req.body.CreatedBy,
    AssignedTo: req.body.AssignedTo
  })
  .then(function (card) {
    res.json(card);
  });
});

app.post('/api/cards/:id/delete', function (req, res) {
  db.Card.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (task) {
    console.log('Deleted!');
    res.json(task);
  });
});

app.put('/api/cards/:id', function (req, res) {
  var newValues = req.body;

  var query = {
    where: { id: req.params.id },
    returning: true
  };

  db.Card.update(newValues, query)
    .then(function (task) {
      res.json(task);
    }
  );
});

// create get and post to grab data and post data
// post is db.card create?
// get is db.findAll

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});