import React from 'react'
import Router from 'react-router'
import _ from 'lodash'
const {Link} = Router
import AltContainer from 'alt/AltContainer'
import AppsStore from '../stores/AppsStore'

const AppDetail = React.createClass({
    render: function () {
      console.log('AppDetail', this.props, this.state)
      const app = this.props.currentApp
      if (app) {

      return (
        <div>
            <h2>{app.name}</h2>
            <Link to="appLogs" params={{appName: app.name}}>View Logs</Link>
            <Link to="appConfig" params={{appName: app.name}}>Config Vars</Link>
            <table>
              <tbody>

                <tr>
                  <td>
                    git_url
                  </td>
                  <td>
                    {app.git_url}
                  </td>
                </tr>

                <tr>
                  <td>
                    released_at
                  </td>
                  <td>
                    {app.released_at}
                  </td>
                </tr>

                <tr>
                  <td>
                    updated_at
                  </td>
                  <td>
                    {app.updated_at}
                  </td>
                </tr>


              </tbody>
            </table>
        </div>
      )
    }
    else {
      return <div>loading yall</div>
    }
    }
})




module.exports = React.createClass({
   componentDidMount: function() {
     AppsStore.getApp(this.props.params.appName)
   },

  render: function () {
    console.log('APPINFO', this.props, this.context)
    let appName = this.props.params.name
    return (
        <AltContainer store={AppsStore}>
          <AppDetail />
        </AltContainer>
    )
  }
})
