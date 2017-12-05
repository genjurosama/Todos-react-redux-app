// @flow
/* eslint-disable react/jsx-wrap-multilines */

// IMPORTS
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import App from './app.jsx'
import reducer from './reducers'
import mySaga from './actions/tasksSaga'




// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(logger,sagaMiddleware),
)

sagaMiddleware.run(mySaga)


const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppContainer>
      <Router>
        <AppComponent />
      </Router>
    </AppContainer>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), document.getElementById('root'))
