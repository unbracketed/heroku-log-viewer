import alt from '../alt'
import LogActions from '../actions/LogActions'


class LogStore {
  constructor() {
    this.logs = [];
    this.bindListeners({
      handleUpdateLogs: LogActions.UPDATE_LOGS
    })
  }
  handleUpdateLogs(log){
    this.logs.push(log)
  }
}

module.exports = alt.createStore(LogStore, 'LogStore');
