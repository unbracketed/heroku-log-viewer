import React from 'react'
import { Route } from 'react-router'
import Home from './components/Home'
import AppView from './components/app/View'
import AppDetailHandler from './components/app/Default'
import AppConfigHandler from './components/app/Config'
import AppLogsHandler from './components/app/Logs'
import Group from './components/Group'
import Groups from './components/Groups'

export default (
    <Route path='/' component={Home} >
      <Route path='apps/:appName' component={AppView}>
        <Route path='info' component={AppDetailHandler} />
        <Route path='logs' component={AppLogsHandler} />
        <Route path='config' component={AppConfigHandler} />
      </Route>
      <Route path='groups' component={Groups} />
      <Route path='group/:name' component={Group} />
    </Route>
)
