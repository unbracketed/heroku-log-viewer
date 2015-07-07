import {
  LOAD_APPS,
  LOAD_APP,
  LOAD_APP_CONFIG,
  LOAD_GROUPS,
  LOAD_GROUP
} from './constants'

const initialState = {
  apps: [],
  currentApp: null,
  currentAppConfig: null,
  groups: [],
  currentGroup: null
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
    case LOAD_GROUP:
      return {
        ...state,
        currentGroup: action.group
      }
    default:
      return state
  }
}
