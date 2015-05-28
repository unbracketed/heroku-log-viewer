import alt from '../alt'
import _ from 'lodash'
import AppActions from '../actions/AppActions'


class AppStore {

  constructor() {
    this.apps = []
    this.filteredApps = []
    this.appFilter = ''

    this.bindListeners({
      handleUpdateApps: AppActions.UPDATE_APPS,
      handleUpdateFilter: AppActions.UPDATE_FILTER,
    })
    this.exportPublicMethods({
      getAppByName: this.getAppByName
    })
  }

  handleUpdateApps(apps) {
    this.apps = apps
    this.filteredApps = _.filter(apps, app => _.includes(app.name, this.appFilter))
  }

  handleUpdateFilter(query) {
    this.appFilter = query
    this.filteredApps = _.filter(this.apps, app => _.includes(app.name, query))
  }

  getAppByName(name) {
    return _.find(this.getState().apps, {name: name})
  }
}

module.exports = alt.createStore(AppStore, 'AppStore');
