import React from "react"
import Router from 'react-router'
const Link = Router.Link


var Apps = React.createClass({
  displayName: 'Apps',

  render: function () {
    return (
      <div>
        <ul>
          {this.props.filteredApps.map(appInfo =>
            <li>
              <Link
                key={appInfo.name}
                to="appInfo"
                params={{name: appInfo.name}}>
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
