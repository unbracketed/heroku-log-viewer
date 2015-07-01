import {LOAD_APPS} from './constants'

export default function apps (state={apps: []}, action) {
  console.log('reduce: apps', state, action)
  switch (action.type) {
    case LOAD_APPS:
      return {
        ...state,
        apps: action.apps
      }
    default:
      return state
  }
}
