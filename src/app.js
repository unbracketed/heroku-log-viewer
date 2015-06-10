import React from 'react'
import Router from 'react-router'
import AppActions from './actions/AppActions'
import GroupsActions from './actions/GroupsActions'
import AppsStore from './stores/AppsStore'
import Home from './components/Home'
import AppView from './components/app/View'
import AppDetailHandler from './components/app/Default'
import AppConfigHandler from './components/app/Config'
import AppLogsHandler from './components/app/Logs'
import Group from './components/Group'
import Groups from './components/Groups'
import styles from './components/styles.styl'
const {DefaultRoute, Route, RouteHandler, Link} = Router


//get Groups
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
    <Route name="appMain" path='apps/:appName' handler={AppView}>
      <DefaultRoute handler={AppDetailHandler} />
      <Route name="appLogs" path='logs' handler={AppLogsHandler} />
      <Route name="appConfig" path='config' handler={AppConfigHandler} />
    </Route>
    <Route name="groups" path='/groups' handler={Groups} />
    <Route name="group" path='/group/:name' handler={Group} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
})
