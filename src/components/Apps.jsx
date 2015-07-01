import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../lib/decorators'
import actions from '../actions'

@prepareRoute(async function ({store, params}) {
  return await store.dispatch(actions.loadApps())
})
@connect(state => ({apps: state.apps}))
//@connect(state => {console.log('connect', state); return state})
class Apps {

  render () {
    console.log('Apps render', this.props, this.state)


    const { apps } = this.props

    return (
      <div>
        <ul>
          {apps.map(appInfo =>
            <li key={appInfo.name}>
              <Link
                to={`/app/${name}`}
                params={{appName: appInfo.name}}>
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
