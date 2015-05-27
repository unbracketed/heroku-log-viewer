import alt from "../alt"

class AppActions {
  updateApps(apps) {
    this.dispatch(apps);
  }
}

module.exports = alt.createActions(AppActions);
