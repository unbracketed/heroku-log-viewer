import React from "react"


var LogList = React.createClass({
  displayName: 'LogList',

  render: function () {
    const logs = this.props.logs
    return (
      <div>
        {/* TODO use the log ID as key */}
        {logs.slice(logs.length-50).map((log, i) => <p key={i}>{log}</p>)}
      </div>
    )
  }
})

module.exports = LogList
