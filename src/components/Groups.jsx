import React from 'react'
import AddGroupForm from './AddGroupForm'

const Groups = React.createClass({
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

module.exports = Groups
