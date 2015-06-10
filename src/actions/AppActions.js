import alt from "../alt"

class AppActions {
  receiveApps(apps) {
    console.log('receiveApps', apps)
    this.dispatch(apps.data);
  }
  updateFilter(query) {
    this.dispatch(query)
  }
  receiveAppConfig(appConfig) {
    this.dispatch(appConfig.data)
  }

  loadingApp() {
    console.log('loadingApp', arguments)
    this.dispatch('loading app')
  }

  receiveApp(app) {
    this.dispatch(app.data)
  }

  //TODO data source err handlers
}

module.exports = alt.createActions(AppActions);
