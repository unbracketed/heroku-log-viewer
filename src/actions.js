import 'whatwg-fetch'
import * as constants from './constants'


export function loadApps () {
  console.log('loadApps')
  return dispatch => {
    console.log('loadApps in fetch')
    fetch('http://localhost:14000/apps')
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.LOAD_APPS,
      apps: res.data
    }))
  }
}
