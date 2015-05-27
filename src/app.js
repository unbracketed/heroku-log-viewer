import React from "react"
import AltContainer from 'alt/AltContainer';
import LogStore from './stores/LogStore'
import LogList from './components/LogList'
import AddAppForm from './components/AddAppForm'


//get apps


//render apps to list



React.render(
  (
  <div>

    <AddAppForm/>
    <button>Clear Logs</button>

    <AltContainer store={LogStore}>
      <LogList />
    </AltContainer>
  </div>),
  document.body
)
