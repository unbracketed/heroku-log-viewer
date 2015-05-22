var express = require('express');
var logSession = require('../src/lib/heroku');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/logs/:app', function(req, res) {
  var token   = process.env.HEROKU_API_TOKEN;
  var session = logSession(token);
  session.sse(req.params.app, req, res);
});

var PORT = process.env.PORT || 14000
var server = app.listen(PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Heroku log SSE endpoint: http://%s:%s', host, port);

});
