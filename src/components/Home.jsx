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
            <Link to="/apps">Apps</Link>
            <Link to="/groups">Groups</Link>
          </nav>
        </header>
        {children
          ? children
          : (<section>
                <h2>Heroku Manager</h2>
             </section>)
        }
      </div>
    )
  }
}

module.exports = Home
