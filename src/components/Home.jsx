import React, {Component} from 'react'
import { connect } from 'redux/react';
import Apps from './Apps'
import AppFilter from './AppFilter'


export default class Home extends Component {

  render() {
    console.log('Home', this.props)
    const { children } = this.props

    return (
      <div>
        {children ? children : (
          <div>
            <h2>All Apps</h2>
            <AppFilter/>
            <Apps/>
          </div>
        )}
      </div>
    )
  }
}

module.exports = Home
