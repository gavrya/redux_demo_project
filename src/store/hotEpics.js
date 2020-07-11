import { combineEpics, ofType } from 'redux-observable'
import { BehaviorSubject } from 'rxjs'
import { switchMap, takeUntil } from 'rxjs/operators'
import { logWarn, logDir } from './logger'

export const EPIC_REPLACE = '@@epic/EPIC_REPLACE'

const createRootEpic = (epics) => {
  const epic$ = new BehaviorSubject(combineEpics(...Object.values(epics)))

  return (action$, ...rest) => epic$.pipe(
    switchMap((epic) => epic(action$, ...rest)),
    takeUntil(action$.pipe(ofType(EPIC_REPLACE)))
  )
}

const hotEpics = (store, epicMiddleware) => {
  const epics = {}

  const injectEpic = (name, epic$) => {
    if (epics[name]) {
      logWarn(`Replacing epic: "${name}"`)
    } else {
      logWarn(`Injecting epic: "${name}"`)
    }

    epics[name] = epic$

    if (process.env.NODE_ENV !== 'test') {
      store.dispatch({ type: EPIC_REPLACE })
      epicMiddleware.run(createRootEpic(epics))
    }

    logDir(Object.keys(epics))
  }

  const ejectEpic = (name) => {
    if (epics[name]) {
      logWarn(`Ejecting epic: "${name}"`)
    } else {
      logWarn(`Skipping. No epic to eject: "${name}"`)
    }

    delete epics[name]

    if (process.env.NODE_ENV !== 'test') {
      store.dispatch({ type: EPIC_REPLACE })
      epicMiddleware.run(createRootEpic(epics))
    }

    logDir(Object.keys(epics))
  }

  return {
    injectEpic,
    ejectEpic
  }
}

export default hotEpics
