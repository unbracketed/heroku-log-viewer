import axios from 'axios'
//import AppsActions from '../actions/AppActions'

const AppsSource = {

  getApps: {

    remote(state) {
      return axios.get('http://localhost:14000/apps')
    },

    success: AppsActions.receiveApps,
    error: AppsActions.fetchAppsFailed
  },

  getApp: {
    remote(state, appName) {
      console.log('getApp')
      return axios.get(`http://localhost:14000/apps/${appName}`)
    },
    loading: AppsActions.loadingApp,
    success: AppsActions.receiveApp,
    error: AppsActions.fetchAppFailed
  },

  getAppConfig: {
    remote(state, appName) {
      return axios.get(`http://localhost:14000/apps/${appName}/config`)
    },
    success: AppsActions.receiveAppConfig,
    error: AppsActions.fetchAppsFailed
  }


}

module.exports = AppsSource
