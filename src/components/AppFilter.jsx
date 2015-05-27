import React from 'react'
import AppActions from '../actions/AppActions'

const AppFilter = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    AppActions.updateFilter(event.target.value)
  },
  render: function() {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
})

module.exports = AppFilter
