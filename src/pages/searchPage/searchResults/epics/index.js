import { combineEpics } from 'redux-observable'

import loadEpic from './load'
import resetEpic from './reset'

export default combineEpics(
  loadEpic,
  resetEpic
)
