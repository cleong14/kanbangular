var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var sequelize = require('sequelize');
var passport = require('passport');
var config = require('./config');
var methodOverride = require('method-override');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var CONFIG = require('./config/config.json');
var isAuthenticated = require('./middleware/is-authenticated');
var db = require('./models');
var crypto = require('crypto');

// var cryptoSecret = 'mystical crypto';
// var hash = crypto.createHmac('sha256', cryptoSecret)
//                   .update('I love cupcakes')
//                   .digest('hex');

// console.log(hash);

db.sequelize.sync();

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({strict: false}));

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.resolve(__dirname + '/public')));

app.use(morgan('dev'));

passport.use(new LocalStrategy(
  function (username, password, done) {
    var isAuthenticated = authenticate(username, password);
    isAuthenticated
    .then(function(user) {
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));

// passport.use(new LocalStrategy(
//   function (username, password, done) {
//     db.User.find({ where: {username: username, password: crypto.createHash('sha256', 'abcdefg').update(password).digest("hex") } })
//       .then(function (user) {
//         if (user !== null) {
//           console.log('[AUTH] Success with username: ' + user.username + ' and password (md5-hash): ' + user.password);
//           return done(null, user);
//         }
//         else {
//           console.log('[AUTH] Error with username: ' + username + ' and password:' + password);
//           console.log('[AUTH] md5-hash of passed password: ' + crypto.createHash('md5').update(password).digest("hex"));
//           return done(null, false);
//         }
//     });
//   }
// ));

passport.serializeUser(function (user, done) {
  return done(null, user);
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
});

var auth = function (req, res, next) {
  if (!req.isAuthenticated()){
    console.log('[AUTH] Error 401');
    res.send(401);
  }else{
    console.log('[AUTH] Success by Session');
    next();
  }
};

app.get('/', function (req, res) {
  res.render('login');
});

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/welcome',
    failureRedirect: '/create-user'
  })
);

function authenticate (username, password) {
  return db.User.findOne({
    where: {
      username: username
    }
  })
  .then(function (user) {
    if (user.password === password) {
      return user;
    }
    return false;
  })
  .catch(function (err) {
    console.log(err);
  });
}

function isAuthenticated (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  return next();
}

app.get('/dashboard', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'kanban.html'));
});

app.get('/create-user', function (req, res) {
  res.render('create-user');
});

app.post('/create-user', function (req, res) {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(function (user) {
    res.render('welcome', {user: user.username});
  });
});

app.get('/welcome', function (req, res) {
  res.render('welcome', {user: req.user.username});
});

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
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