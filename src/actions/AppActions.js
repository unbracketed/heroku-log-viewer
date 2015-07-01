
class AppActions {

  receiveApps(apps) {
    console.log('receiveApps', apps)
    this.dispatch(apps.data);
  }

  updateFilter(query) {
    this.dispatch(query)
  }

  loadingApp() {
    console.log('loadingApp', arguments)
    this.dispatch('loading app')
  }

  receiveApp(app) {
    this.dispatch(app.data)
  }

  receiveAppConfig(appConfig) {
    this.dispatch(appConfig.data)
  }

  //TODO data source err handlers
}

module.exports = TODO 
