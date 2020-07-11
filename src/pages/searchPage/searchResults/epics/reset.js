import { ofType } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

import { SEARCH_PAGE_SEARCH_FILTERS_RESET } from '../../searchFilters/store'
import { resetAction } from '../store'

export default action$ => action$.pipe(
  ofType(SEARCH_PAGE_SEARCH_FILTERS_RESET),
  mapTo(resetAction())
)
