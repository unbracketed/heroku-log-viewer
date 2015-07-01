import 'whatwg-fetch'
import * as constants from './constants'
console.log('CONST', constants)

var loadApps = function () {
  return dispatch => {
    fetch('http://localhost:14000/apps')
    .then(res => res.json())
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

export { loadApps, loadApp, loadAppConfig }
