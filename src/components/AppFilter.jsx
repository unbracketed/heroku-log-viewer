import React from 'react'

const AppFilter = React.createClass({

  getInitialState: function () {
    return {value: ''}
  },

  handleChange: function (event) {
    this.setState({value: event.target.value});
    //AppActions.updateFilter(event.target.value)
    //TODO
  },

  render: function () {
    const value = this.state.value
    return <input type="text" value={value} onChange={this.handleChange} />
  }
})

module.exports = AppFilter
