import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadApp } from '../../actions'
import _ from 'lodash'

@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadApp(params.appName))
})
@connect(state => ({currentApp: state.currentApp}))
class AppView {

  render () {
    const { currentApp, params: {appName} } = this.props

    let content = null
    if (this.props.children) {
      content = this.props.children
    } else if (currentApp) {
      content = (

          <table>
            <tbody>
              {_.pairs(currentApp).map(([k, v]) =>
                <tr key={k}>
                  <td>{k}</td><td>{v}</td>
                </tr>
              )}
            </tbody>
          </table>

      )
    } else {
      content = <div>Loading..</div>
    }
    return (
      <div>
        <header>
            <h2>{appName}</h2>
            <nav>
              <Link to={`/apps/${appName}`}>Info</Link>
              <Link to={`/apps/${appName}/config`}>Config</Link>
            </nav>
        </header>
        <section>
          {content}
        </section>
      </div>
    )
  }
}

module.exports = AppView
