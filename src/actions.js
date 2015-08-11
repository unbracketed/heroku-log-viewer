import 'whatwg-fetch'
import * as constants from './constants'

var loadApps = function () {
  console.log('loadApps')
  return dispatch => {
    console.log('loadApps running')
    fetch('http://localhost:14000/apps')
    .then(res => res.json())
    .then(res => {console.log('loadApps: ', res); return res})
    .then(res => dispatch({
      type: constants.LOAD_APPS,
      apps: res
    }))
  }
}

var loadApp = function (appName) {
  return dispatch => {
    fetch(`http://localhost:14000/apps/${appName}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.LOAD_APP,
      app: res
    }))
  }
}

var loadAppConfig = function (appName) {
  return dispatch => {
    fetch(`http://localhost:14000/apps/${appName}/config`)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.LOAD_APP_CONFIG,
      config: res
    }))
  }
}

var loadGroups = function () {
  console.log('load groups')
  return dispatch => {
    console.log('load groups running')
    fetch(`http://localhost:8000/groups/`)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.LOAD_GROUPS,
      groups: res.results
    }))
  }
}

var loadGroup = function (groupSlug) {
  return dispatch => {
    fetch(`http://localhost:8000/groups/${groupSlug}/`)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.LOAD_GROUP,
      group: res
    }))
  }
}

export {
  loadApps,
  loadApp,
  loadAppConfig,
  loadGroups,
  loadGroup
}
