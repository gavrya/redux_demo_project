import { combineReducers } from 'redux'
import { logWarn, logDir } from './logger'

const hotReducers = (store) => {
  const reducers = {}

  const injectReducer = (name, reducer) => {
    if (reducers[name]) {
      logWarn(`Replacing reducer: "${name}"`)
    } else {
      logWarn(`Injecting reducer: "${name}"`)
    }

    reducers[name] = reducer

    store.replaceReducer(combineReducers(reducers))

    logDir(Object.keys(reducers))
  }

  const ejectReducer = (name) => {
    if (reducers[name]) {
      logWarn(`Ejecting reducer: "${name}"`)
    } else {
      logWarn(`Skipping. No reducer to eject: "${name}"`)
    }

    if (reducers[name]) {
      delete reducers[name]

      store.replaceReducer(combineReducers(reducers))
    }

    logDir(Object.keys(reducers))
  }

  return {
    injectReducer,
    ejectReducer
  }
}

export default hotReducers
