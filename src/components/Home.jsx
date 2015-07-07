import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react';
import Apps from './Apps'
import AppFilter from './AppFilter'


export default class Home extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <header>
          <nav>
            <Link to="/">Apps</Link>
            <Link to="/groups">Groups</Link>
          </nav>
        </header>
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
