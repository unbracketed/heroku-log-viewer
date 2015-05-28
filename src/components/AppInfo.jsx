import React from 'react'

module.exports = React.createClass({
  render: function () {
    console.log(this.props, this.context)
    return (
      <h2>{this.props.params.name} Details</h2>
    )
  }
})
