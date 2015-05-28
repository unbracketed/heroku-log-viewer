import React from 'react'
import Router from 'react-router'
import request from 'superagent'
import AppActions from './actions/AppActions'
import GroupsActions from './actions/GroupsActions'
import Home from './components/Home'
import AppInfo from './components/AppInfo'
import AppLogs from './components/AppLogs'
import Group from './components/Group'
import Groups from './components/Groups'
import styles from './components/styles.styl'
const {DefaultRoute, Route, RouteHandler, Link} = Router


//get apps
request
  .get('http://localhost:14000/apps')
  .set('Accept', 'application/json')
  .end((err, res) => {
    res.body.sort((a,b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0;
    })
    AppActions.updateApps(res.body)
  })


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
    <Route name="appLogs" path='/apps/:name/logs' handler={AppLogs} />
    <Route name="groups" path='/groups' handler={Groups} />
    <Route name="group" path='/group/:name' handler={Group} />
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
})
