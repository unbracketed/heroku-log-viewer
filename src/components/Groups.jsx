import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react'
import { prepareRoute } from '../lib/decorators'
import { loadGroups } from '../actions'
import AddGroupForm from './AddGroupForm'


@prepareRoute(async function ({store, params}) {
  return await store.dispatch(loadGroups())
})
@connect(state => ({groups: state.groups}))
class Groups {
  render () {
    const groups = this.props.groups
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
        <h2>App Groups</h2>
        <AddGroupForm/>
        <ul>{groupsList}</ul>
        {this.props.error}

        ==chil=={this.props.children}====
      </div>
    )
  }
}

module.exports = Groups
