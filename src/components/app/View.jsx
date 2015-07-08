import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadApp } from '../../actions'

@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadApp(params.appName))
})
@connect(state => ({currentApp: state.currentApp}))
class AppView {

  render () {
    const {
      children,
      params: {
        appName
      }
    } = this.props

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
          App
        </section>
      </div>
    )
  }
}

module.exports = AppView
