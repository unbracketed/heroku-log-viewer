import React from 'react'
import GroupsActions from '../actions/GroupsActions'


module.exports = React.createClass({

  displayName: 'AddOrgForm',

  handleSubmit: function (e) {
    e.preventDefault()
    const groupName = React.findDOMNode(this.refs.name).value.trim()
    GroupsActions.addGroup(groupName)
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Group name" ref="name" />
        <button type="submit" onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
})
