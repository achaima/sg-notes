var express = require('express');
var router = require('./config/router');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true})); //for parsing application

app.use(router);

app.listen(port, function() {
  console.log('App is running on port', port);
});
