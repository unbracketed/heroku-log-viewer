import React, {Component} from 'react'
import { connect } from 'redux/react';
import Apps from './Apps'
import AppFilter from './AppFilter'


export default class Home extends Component {

  render() {
    console.log('Home', this.props)
    return (
      <div>
        <h2>All Apps</h2>
        <AppFilter/>
        <Apps/>
      </div>
    )
  }
}

module.exports = Home
