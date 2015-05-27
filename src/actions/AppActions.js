import alt from "../alt"

class AppActions {
  updateApps(apps) {
    this.dispatch(apps);
  }
  updateFilter(query) {
    this.dispatch(query)
  }
}

module.exports = alt.createActions(AppActions);
