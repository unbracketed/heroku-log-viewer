import React from 'react'
import AltContainer from 'alt/AltContainer'
import GroupsStore from '../stores/GroupsStore'
import AddGroupForm from './AddGroupForm'


const GroupList = React.createClass({
  render: function () {
    const groups = this.props.groups
    let groupsList = 'No groups'
    if (groups.length) {
      groupsList = groups.map(grp => <p key={grp.name}>{grp.name}</p>)
    }
    return (
      <div>
        <h2>App Groups</h2>
        {groupsList}
        <AddGroupForm/>
        {this.props.error}
      </div>
    )
  }
})

const Groups = React.createClass({
  render: function () {
    return (
      <AltContainer store={GroupsStore}>
        <GroupList/>
      </AltContainer>
    )
  }
})

module.exports = Groups
