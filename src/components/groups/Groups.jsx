import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../../lib/decorators'
import { loadGroups } from '../../actions'
import AddGroupForm from './AddGroupForm'


@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadGroups())
})
@connect(state => ({
  groups: state.groups,
  currentGroup: state.currentGroup
}))
class Groups {
  render () {
    const { groups, currentGroup } = this.props
    let groupsList = 'No groups'
    if (groups.length) {
      groupsList = (
        <ul>
          {groups.map(grp => (
              <li key={grp.name}><Link to={`/groups/${grp.slug}`}>{grp.name}</Link></li>
            )
          )}
        </ul>
      )
    }
    return (
      <div>
        <h2>{currentGroup ? currentGroup.name : 'Groups'}</h2>
        {!currentGroup && groupsList}
        {this.props.children}
      </div>
    )
  }
}

module.exports = Groups
