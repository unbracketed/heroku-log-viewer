import React from 'react'
import AltContainer from 'alt/AltContainer'
import GroupsStore from '../stores/GroupsStore'
import AddGroupForm from './AddGroupForm'


const GroupList = React.createClass({
  render: function () {
    const groups = this.props.groups
    let groupsList = 'No groups'
    if (groups.length) {
      groupsList = <ul>{groups.map(grp => <li key={grp.name}>{grp.name}</li>)}</ul>
    }
    return (
      <div>
        <h2>App Groups</h2>
        <AddGroupForm/>
        <ul>{groupsList}</ul>
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
