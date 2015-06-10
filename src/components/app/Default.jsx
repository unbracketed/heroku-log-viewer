import React from 'react'
import Router from 'react-router'
import _ from 'lodash'
const {Link} = Router
import AltContainer from 'alt/AltContainer'
import AppsStore from '../../stores/AppsStore'


const AppDetail = React.createClass({

    render: function () {
      console.log('AppDetail', this.props, this.state)

      const app = this.props.currentApp
      if (app) {

        return (
          <div>
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
    } else {
      return <div>loading yall</div>
    }
  }
})



module.exports = React.createClass({

  //TODO use data source utils
  componentDidMount: function() {
   AppsStore.getApp(this.props.params.appName)
  },
  //-------------------------

  render: function () {
    console.log('APPINFO', this.props, this.context)

    return (
        <AltContainer store={AppsStore}>
          <AppDetail />
        </AltContainer>
    )
  }
})
