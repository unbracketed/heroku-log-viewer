import React from 'react'
import request from 'superagent'
import AltContainer from 'alt/AltContainer';
import LogStore from './stores/LogStore'
import AppStore from './stores/AppStore'
import GroupsStore from './stores/GroupsStore'
import AppActions from './actions/AppActions'
import GroupsActions from './actions/GroupsActions'
import LogList from './components/LogList'
import Apps from './components/Apps'
import AppFilter from './components/AppFilter'
import Groups from './components/Groups'


//get apps
request
  .get('http://localhost:14000/apps')
  .set('Accept', 'application/json')
  .end((err, res) => {
    console.log('apps response', err, res.body)
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
  //get groups
}



React.render(
  (
  <div>

    <AltContainer store={GroupsStore}>
      <Groups/>
    </AltContainer>

    <AltContainer store={AppStore}>
      <h2>All Apps</h2>
      <AppFilter/>
      <Apps/>
    </AltContainer>

    <AltContainer store={LogStore}>
      <LogList />
    </AltContainer>


  </div>),
  document.body
)
