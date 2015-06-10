import React from 'react'
import Router from 'react-router'
const {Link, RouteHandler} = Router

const AppView = React.createClass({
  render: function() {
    console.log('AppView render', this.props, this.state)
    const appName = this.props.params.appName
    return (
      <div>
        <header>
            <h2>{appName}</h2>
        </header>
        <nav>
            <Link to="appMain" params={{appName}}>Detail</Link>
            <Link to="appLogs" params={{appName}}>View Logs</Link>
            <Link to="appConfig" params={{appName}}>Config Vars</Link>
        </nav>
        <section>
            <RouteHandler />
        </section>
      </div>
    )
  }
})

module.exports = AppView
