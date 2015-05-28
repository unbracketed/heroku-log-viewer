import React from "react"


var Apps = React.createClass({
  displayName: 'Apps',

  render: function () {
    return (
      <div>
        {this.props.filteredApps.map(appInfo => <p key={appInfo.name}>{appInfo.name}</p>)}
      </div>
    )
  }
})

module.exports = Apps