import React from "react"
import Alt from "alt"
import herokuLogStream from "./lib/heroku"

var LogList = React.createClass({
  displayName: 'LogList',
  render: function () {
    return (
      <div>Logs Yo
      {this.props.logs.map(log => <p>{log}</p>)}
      </div>
    )
  }
})



React.render(<LogList logs={[]}/>, document.body)


var logs = [];

//TODO get app from path
var source      = new EventSource('http://localhost:14000/logs/oneup-prod');
source.addEventListener('message', function(message) {
  console.log(message)
  //TODO call action creator
  logs.push(message)
  React.render(<LogList logs={logs}/>, document.body)

});
