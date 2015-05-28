import React from 'react'
import AltContainer from 'alt/AltContainer';
import AppStore from '../stores/AppStore'
import Apps from './Apps'
import AppFilter from './AppFilter'

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <AltContainer store={AppStore}>
          <h2>All Apps</h2>
          <AppFilter/>
          <Apps/>
        </AltContainer>
      </div>
    )
  }
})

module.exports = Home
