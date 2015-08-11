import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { prepareRoute } from '../lib/decorators'
import { loadApps } from '../actions'

@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadApps())
})
@connect(state => ({apps: state.apps}))
class Apps {

  render () {
    console.log('Apps', this.props)
    const { apps } = this.props
    return (
      <div>
        <ul>
          {apps && apps.map(appInfo =>
            <li key={appInfo.name}>
              <Link to={`/apps/${appInfo.name}`}>
                {appInfo.name}
              </Link>
            </li>)
          }
        </ul>
      </div>
    )
  }
}

module.exports = Apps
