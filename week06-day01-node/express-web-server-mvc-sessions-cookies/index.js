var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var layouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/sg-mvc');

app.set('view engine', 'ejs');
app.use(function (req, res, next) {
  // simple middleware logging
  //we give app.use an anonymous function. Documentation will show these 3 parameters
  console.log(req.method, req.path);
  next();
});


app.use(session({
  secret: 'secret squirrel',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
  //maxAge is setting an expiry time of a day
}));
app.use(function (req, res, next) {
  var pageViews = parseInt(req.session.pageViews);
  //this views is the name of the cookie. Cookie can have name and value

  if (!pageViews) {
    req.session.pageViews = 0;
  }
  req.session.pageViews += 1;
  //if views hasn't been set then just set it to 0
  //purpose of this above function is to count how many times its been viewed
  next();
});


app.use(layouts);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(router);
//Put this last as by the time the router is processed for the router to use.
app.listen(port, function() {
  console.log('App is running on port', port);
});

module.exports = app;
