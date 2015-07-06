import {
  LOAD_APPS,
  LOAD_APP,
  LOAD_APP_CONFIG,
  LOAD_GROUPS
} from './constants'

const initialState = {
  apps: [],
  currentApp: null,
  currentAppConfig: null,
  groups: []
}

export default function apps (state=initialState, action) {
  console.log('reduce: apps', state, action)
  switch (action.type) {
    case LOAD_APPS:
      return {
        ...state,
        apps: action.apps
      }
    case LOAD_APP:
      return {
        ...state,
        currentApp: action.app
      }
    case LOAD_APP_CONFIG:
      return {
        ...state,
        currentAppConfig: action.config
      }
    case LOAD_GROUPS:
      return {
        ...state,
        groups: action.groups
      }
    default:
      return state
  }
}
