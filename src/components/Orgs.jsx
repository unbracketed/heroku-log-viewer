import React from 'react'
import AddOrgForm from './AddOrgForm'

const Orgs = React.createClass({
  render: function () {
    const orgs = this.props.orgs
    let orgsList = 'No organizations'
    if (orgs.length) {
      orgsList = orgs.map(org => <p key={org.name}>{org.name}</p>)
    }
    return (
      <div>
        <h2>Organizations</h2>
        {orgsList}
        <AddOrgForm/>
      </div>
    )
  }
})

module.exports = Orgs
