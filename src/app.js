import React from "react"
import AltContainer from 'alt/AltContainer';
import LogStore from './stores/LogStore'
import LogList from './components/LogList'
import AddAppForm from './components/AddAppForm'


React.render(
  (
  <div>
    <AddAppForm/>
    <AltContainer store={LogStore}>
      <LogList />
    </AltContainer>
  </div>),
  document.body
)
