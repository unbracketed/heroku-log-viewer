import React from "react"


var LogList = React.createClass({
  displayName: 'LogList',

  render: function () {
    const logs = this.props.logs
    return (
      <div>
        {logs.slice(logs.length-50).map(log => <p>{log}</p>)}
      </div>
    )
  }
})

module.exports = LogList
