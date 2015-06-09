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

  //TODO data source err handlers
}

module.exports = alt.createActions(AppActions);
