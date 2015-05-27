import alt from '../alt'
import AppActions from '../actions/AppActions'


class AppStore {
  constructor() {
    this.apps = [];

    this.bindListeners({
      handleUpdateApps: AppActions.UPDATE_APPS,
    })
  }

  handleUpdateApps(apps) {
    this.apps = apps
  }

}

module.exports = alt.createStore(AppStore, 'AppStore');
