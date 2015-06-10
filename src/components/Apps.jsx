import React from "react"
import Router from 'react-router'
const Link = Router.Link


var Apps = React.createClass({
  displayName: 'Apps',

  render: function () {
    console.log('Apps render', this.props, this.state)
    return (
      <div>
        <ul>
          {this.props.filteredApps.map(appInfo =>
            <li key={appInfo.name}>
              <Link
                to="appMain"
                params={{appName: appInfo.name}}>
                {appInfo.name}
              </Link>
            </li>)
          }
        </ul>
      </div>
    )
  }
})

module.exports = Apps
