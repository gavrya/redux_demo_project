import { ofType } from 'redux-observable'
import { switchMap, delay, takeUntil } from 'rxjs/operators'
import { of, concat } from 'rxjs'

import {
  namespace,
  SEARCH_PAGE_SEARCH_FILTERS_SEARCH_EVENT,
  SEARCH_PAGE_SEARCH_FILTERS_RESET
} from '../../searchFilters/store'

import {
  itemsAction, loadingAction
} from '../store'

const items = [
  {
    id: '111',
    image: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/05/Used-Cars-Sale-gear-patrol-full-lead.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=980:*',
    title: 'Some title',
    description: 'Some description'
  },
  {
    id: '222',
    image: 'https://ireland.apollo.olxcdn.com/v1/files/gni42ne13a6v2-UA/image;s=1000x700',
    title: 'Some title',
    description: 'Some description'
  }
]

export default (action$, state$) => action$.pipe(
  ofType(SEARCH_PAGE_SEARCH_FILTERS_SEARCH_EVENT),
  switchMap(() => {
    const state = state$.value
    const { searchText, gender } = state[namespace]

    console.log('searchText: ', searchText)
    console.log('gender: ', gender)

    return concat(
      of(loadingAction(true)),
      of(itemsAction(items)).pipe(
        delay(3000),
        takeUntil(action$.pipe(
          ofType(SEARCH_PAGE_SEARCH_FILTERS_RESET)
        ))
      ),
      of(loadingAction(false))
    )
  })
)
