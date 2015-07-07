import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadGroup } from '../../actions'

@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadGroup(params.groupSlug))
})
@connect(state => ({group: state.currentGroup}))
class Group {
  render () {
    const { group } = this.props
    if (group) {

      return (
        <div>
          <ul>
              {group.apps.map(app => (
                <li key={app.name}>
                  <Link to={`/apps/${app.name}`}>{app.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

module.exports = Group
