import React from 'react'
import GroupsStore from '../stores/GroupsStore'
import AltContainer from 'alt/AltContainer';

const Group = React.createClass({
  render: function () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <AltContainer store={GroupsStore}>
          <Groups/>
        </AltContainer>
      </div>
    )
  }
})

module.exports = Group
