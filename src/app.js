import React from 'react'
import Router from 'react-router'
import AppActions from './actions/AppActions'
import GroupsActions from './actions/GroupsActions'
import AppsStore from './stores/AppsStore'
import Home from './components/Home'
import AppInfo from './components/AppInfo'
import AppConfig from './components/AppConfig'
import AppLogs from './components/AppLogs'
import Group from './components/Group'
import Groups from './components/Groups'
import styles from './components/styles.styl'
const {DefaultRoute, Route, RouteHandler, Link} = Router


//AppsStore.getApps()


//get organizations
const groups = localStorage.getItem('groups')
if (groups) {
  GroupsActions.updateGroups(JSON.parse(groups))
}



const App = React.createClass({
  render: function () {
    return (
      <div>
        <nav>
          <Link to="/"> Apps </Link>
          <Link to="groups"> Groups </Link>
        </nav>
        <RouteHandler/>
      </div>
    )
  }
})

const routes = (
  <Route handler={App} path='/'>
    <DefaultRoute handler={Home} />
    <Route name="appInfo" path='/apps/:name' handler={AppInfo} />
    <Route name="appLogs" path='/apps/:appName/logs' handler={AppLogs} />
    <Route name="appConfig" path='/apps/:appName/config' handler={AppConfig} />
    <Route name="groups" path='/groups' handler={Groups} />
    <Route name="group" path='/group/:name' handler={Group} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
})
