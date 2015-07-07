import React from 'react'
import { Route } from 'react-router'
import Home from './components/Home'
import AppView from './components/app/View'
import AppConfig from './components/app/Config'
import AppLogs from './components/app/Logs'
import Group from './components/groups/Group'
import Groups from './components/groups/Groups'

export default (
    <Route path='/' component={Home} >
      <Route path='apps/:appName' component={AppView}>
        <Route path='logs' component={AppLogs} />
        <Route path='config' component={AppConfig} />
      </Route>
      <Route path='groups' component={Groups}>
        <Route path=':groupSlug' component={Group} />
      </Route>
    </Route>
)
