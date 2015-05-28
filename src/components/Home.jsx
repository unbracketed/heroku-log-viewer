import React from 'react'
import AltContainer from 'alt/AltContainer';
import AppsStore from '../stores/AppsStore'
import Apps from './Apps'
import AppFilter from './AppFilter'

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <AltContainer store={AppsStore}>
          <h2>All Apps</h2>
          <AppFilter/>
          <Apps/>
        </AltContainer>
      </div>
    )
  }
})

module.exports = Home
