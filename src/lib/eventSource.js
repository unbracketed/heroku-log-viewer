import LogActions from '../actions/LogActions'

module.exports = function (appName, action) {

  //TODO SSE host
  var source = new EventSource('http://localhost:14000/logs/' + appName);
  source.addEventListener('message', function(message) {
    action(message)
  });
  return source
}
