import alt from "../alt"
import getEventSource from '../lib/eventSource'

class LogActions {

  updateLogs(log) {
    this.dispatch(log);
  }

  addApp(app) {
    //create new eventsource
    let es = getEventSource(app, this.actions.updateLogs)
  }
}

module.exports = alt.createActions(LogActions);
