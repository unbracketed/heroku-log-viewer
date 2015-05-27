import React from 'react'
import OrgActions from '../actions/OrgActions'


module.exports = React.createClass({
  displayName: 'AddOrgForm',
  handleSubmit: function (e) {
    e.preventDefault()
    const orgName = React.findDOMNode(this.refs.name).value.trim()
    OrgActions.addOrg(orgName)
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Organization name" ref="name" />
        <button type="submit" onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
})
