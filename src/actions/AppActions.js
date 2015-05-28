import alt from "../alt"

class AppActions {
  receiveApps(apps) {
    console.log('receiveApps', apps)
    this.dispatch(apps.data);
  }
  updateFilter(query) {
    this.dispatch(query)
  }
}

module.exports = alt.createActions(AppActions);
