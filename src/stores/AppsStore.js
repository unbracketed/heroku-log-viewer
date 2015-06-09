import alt from '../alt'
import _ from 'lodash'
import AppActions from '../actions/AppActions'
import AppsSource from '../sources/AppsSource'


class AppsStore {

  constructor() {
    this.apps = []
    this.filteredApps = []
    this.appFilter = ''

    //TODO
    this.appConfig = {}

    this.registerAsync(AppsSource)
    this.bindListeners({
      handleUpdateApps: AppActions.RECEIVE_APPS,
      handleUpdateFilter: AppActions.UPDATE_FILTER,
      handleUpdateAppConfig: AppActions.RECEIVE_APP_CONFIG
    })
    this.exportPublicMethods({
      getAppByName: this.getAppByName
    })
  }

  handleUpdateApps(apps) {
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

  getAppByName(name) {
    return _.find(this.getState().apps, {name: name})
  }
}

module.exports = alt.createStore(AppsStore, 'AppsStore');
