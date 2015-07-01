import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadApp } from '../../actions'
import _ from 'lodash'

@prepareRoute(async function ({store, params}) {
  console.log('prepR', params)
  return await store.dispatch(loadApp(params.appName))
})
@connect(state => ({currentApp: state.currentApp}))
class AppView {

  render () {
    console.log('AppView render', this.props, this.state)
    const { currentApp } = this.props

    return (
      <div>
        <header>
            <Link to='/'>Apps</Link>
            <h2>{currentApp.name}</h2>
        </header>
        <section>
          <table>
            <tbody>
              {_.pairs(currentApp).map(([k, v]) => <tr><td>{k}</td><td>{v}</td></tr>)}
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

module.exports = AppView
