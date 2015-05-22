var heroku      = require('heroku-client');
var https       = require('https');
var split       = require('split');
var SSE         = require('express-sse');


module.exports = function(token) {
  var hk = heroku.createClient({ token: token });
  var serverEvent = new SSE();

  return {
    stream: function(app) {
      var splitStream = split();

      hk.apps(app).logSessions().create({ tail: true }, function(err, logSession) {
        if (err) splitStream.emit('error', err);

        var logRequest = https.get(logSession.logplex_url);

        logRequest.on('response', function(logResponse) {
          logResponse.pipe(splitStream);
        });

        logRequest.on('error', function(err) {
          splitStream.emit('error', err);
        });
      });

      return splitStream;
    },

    sse: function(app, req, res) {
      var stream = this.stream(app);
      serverEvent.init(req, res);

      stream.on('data', function(data) {
        serverEvent.send(data.toString());
      });

      stream.on('error', end);
      req.socket.on('close', end);

      return stream;

      function end() {
        if (stream.logRequest) stream.logRequest.abort();
        res.end();
      }
    }
  }
};
