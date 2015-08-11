import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import Apps from './Apps'
import AppFilter from './AppFilter'


export default class Home extends Component {

  render() {
    const { children } = this.props

    return (

<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--overlay-drawer-button">
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Heroku Manager</span>
    <nav className="mdl-navigation">
      <Link className="mdl-navigation__link" to="/apps">Apps</Link>
      <Link className="mdl-navigation__link" to="/groups">Groups</Link>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">
        {children
          ? children
          : (<div><section>
                <h2>Heroku Manager</h2>
             </section>
             <div height="500px">Manage stuff</div></div>
             )
        }
      </div>
  </main>
</div>


    )
  }
}

module.exports = Home
