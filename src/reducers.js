import { LOAD_APPS, LOAD_APP } from './constants'

const initialState = {
  apps: [],
  currentApp: null
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
    default:
      return state
  }
}
