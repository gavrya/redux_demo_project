import { compose } from 'redux'

import { injectReducer } from '../../../store'

import { namespace, withModuleProps, reducer } from './store'
import withMappedProps from './hocs/withMappedProps'
import SearchFilters from './components/searchFilters'

injectReducer(namespace, reducer)

export default compose(withModuleProps, withMappedProps)(SearchFilters)
