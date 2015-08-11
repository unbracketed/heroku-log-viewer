import React from 'react'
import History from 'react-router/lib/BrowserHistory'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Router from './components/Router'
import './styles/mdl/material.min.js'

const history = new History
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)


React.render(
  <Provider {...{store}}>
    {() => (<Router {...{history}}/>)}
  </Provider>,
  document.body
)
