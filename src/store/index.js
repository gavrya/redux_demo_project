import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import hotReducers from './hotReducers'
import hotEpics from './hotEpics'

const epicMiddleware = createEpicMiddleware()

const middlewares = [epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({ collapsed: true })

  middlewares.push(loggerMiddleware)
}

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  const reduxDevToolsCompose = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  if (typeof reduxDevToolsCompose === 'function') {
    composeEnhancers = reduxDevToolsCompose({ name: 'React SPA' })
  }
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore((state) => state, {}, enhancer)

const { injectReducer, ejectReducer } = hotReducers(store)
const { injectEpic, ejectEpic } = hotEpics(store, epicMiddleware)

export {
  store, injectReducer, ejectReducer, injectEpic, ejectEpic
}
