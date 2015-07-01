import React from 'react'
import { Route } from 'react-router'
import History from 'react-router/lib/BrowserHistory'
import { createStore, composeReducers } from 'redux'
import { Provider } from 'redux/react'
import reducers from './reducers'
import Router from './components/Router'
import './components/styles.styl'

const history = new History
const store = createStore(reducers);

React.render(
  <Provider {...{store}}>
    {() => (<Router {...{history}}/>)}
  </Provider>,
  document.body
)
