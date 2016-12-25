import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogicMiddleware } from 'redux-logic'

import './index.css'
import App from './App'
import reducer from './reducers'
import logic from './logics'

const logicMiddleware = createLogicMiddleware(logic)

const store = createStore(
  reducer,
  applyMiddleware(logicMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
