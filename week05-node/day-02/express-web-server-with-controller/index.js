var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var layouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

router.get('/', function (req, res) {
  res.render('index');
});
app.set('view engine', 'ejs');
app.use(layouts);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true})); //for parsing application

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
