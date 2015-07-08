import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../lib/decorators'
import { loadApps } from '../actions'

@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadApps())
})
@connect(state => ({apps: state.apps}))
class Apps {

  render () {
    const { apps } = this.props
    return (
      <div>
        <h2>Apps</h2>
        <ul>
          {apps.map(appInfo =>
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
