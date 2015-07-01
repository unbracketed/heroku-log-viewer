import _ from 'lodash'
// import AppActions from '../actions/AppActions'
// import AppsSource from '../sources/AppsSource'


class AppsStore {

  constructor() {
    this.apps = []
    this.filteredApps = []
    this.appFilter = ''
    this.loadingApp = false
    this.currentApp = null

    //TODO
    this.appConfig = {}

    this.registerAsync(AppsSource)
    this.bindListeners({
      handleUpdateApps: AppActions.RECEIVE_APPS,
      handleUpdateFilter: AppActions.UPDATE_FILTER,
      handleUpdateAppConfig: AppActions.RECEIVE_APP_CONFIG,
      handleUpdateApp: AppActions.RECEIVE_APP,
      handleLoadingApp: AppActions.LOADING_APP
    })
  }

  handleUpdateApps(apps) {
    console.log('handleUpdateApps', apps)
    this.apps = apps
    this.filteredApps = _.filter(apps, app => _.includes(app.name, this.appFilter))
  }

  handleUpdateAppConfig(config) {
    console.log('handleUpdateAppConfig', config)

    //find or add app
      //if add, update local storage
    this.setState({appConfig: config})

  }

  //TODO filtered apps is a derived property of apps
  handleUpdateFilter(query) {
    this.appFilter = query
    this.filteredApps = _.filter(this.apps, app => _.includes(app.name, query))
  }

  handleUpdateApp(app) {
    this.apps.push(app)
    this.currentApp = app
    this.loadingApp = false
  }

  handleLoadingApp() {
    this.loadingApp = true
  }

}

module.exports = alt.createStore(AppsStore, 'AppsStore');
