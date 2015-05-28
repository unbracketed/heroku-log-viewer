import React from 'react'
import AltContainer from 'alt/AltContainer'
import AppStore from '../stores/AppStore'

const AppDetail = React.createClass({
    render: function () {
      const app = this.props.app
      return (
        <div>
            <table>
              <thead>
                {app.name}
              </thead>
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
})

module.exports = React.createClass({
  render: function () {
    console.log('APPINFO', this.props, this.context)
    let appName = this.props.params.name
    return (
      <AltContainer
        stores={
          {
            app: function (props) {
              console.log('app  ', props)
              return {
                store: AppStore,
                value: AppStore.getAppByName(appName)
              }
            }
          }
        }
      >
        <AppDetail/>
      </AltContainer>
    )
  }
})
