import React from 'react'
import request from 'superagent'
import AltContainer from 'alt/AltContainer';
import LogStore from './stores/LogStore'
import AppStore from './stores/AppStore'
import OrgStore from './stores/OrgStore'
import AppActions from './actions/AppActions'
import OrgActions from './actions/OrgActions'
import LogList from './components/LogList'
import Apps from './components/Apps'
import AppFilter from './components/AppFilter'
import Orgs from './components/Orgs'


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
const orgs = localStorage.getItem('organizations')
if (orgs) {
  OrgActions.updateOrgs(JSON.parse(orgs))
  //get groups
}



React.render(
  (
  <div>

    <AltContainer store={OrgStore}>
      <Orgs/>
    </AltContainer>

    <h2>All Apps</h2>
    <AltContainer store={AppStore}>
      <AppFilter/>
      <Apps/>
    </AltContainer>

    <AltContainer store={LogStore}>
      <LogList />
    </AltContainer>


  </div>),
  document.body
)
