import { compose } from 'redux'

import { injectReducer, injectEpic } from '../../../store'

import { namespace, withModuleProps, reducer } from './store'
import epic from './epics'

import SearchResults from './components/searchResults'

injectReducer(namespace, reducer)
injectEpic(namespace, epic)

export default compose(withModuleProps)(SearchResults)
