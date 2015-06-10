import React from 'react'
import AppsStore from '../../stores/AppsStore'


module.exports = React.createClass({
  getInitialState: function() {
    return AppsStore.getState()
  },
  componentDidMount: function() {
    console.log('CDM', this.props)
    AppsStore.listen(this.onChange)
    //TODO do we have
    AppsStore.getAppConfig(this.props.params.appName)
  },
  componentWillUnmount: function () {
    AppsStore.unlisten(this.onChange)
  },
  onChange: function(state) {
    this.setState(state)
  },
  render: function () {
    console.log('AppConfig', this.props, this.state)
    const config = this.state.appConfig
    return (

      <div>
        <table>
          <tbody>
            {Object.keys(this.state.appConfig).map(k => (<tr key={k}><td>{k}</td><td>{config[k]}</td></tr>))}
          </tbody>
        </table>
      </div>
    )
  }
})
