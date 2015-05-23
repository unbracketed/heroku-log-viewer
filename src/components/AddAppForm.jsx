import React from 'react'
import LogActions from '../actions/LogActions'


module.exports = React.createClass({
  displayName: 'AddAppForm',
  handleSubmit: function (e) {
    e.preventDefault()
    let appName = React.findDOMNode(this.refs.name).value.trim()
    LogActions.addApp(appName)
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="App name" ref="name" />
        <button type="submit" onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
})
