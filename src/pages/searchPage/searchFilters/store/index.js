import { ReduxHotModule } from 'redux-hot-module'

const ml = new ReduxHotModule('searchPageSearchFilters')

// param actions
ml.addParamAction('searchText', '')
ml.addParamAction('gender', 'other')

// event actions
ml.addEventAction('searchEvent')

// reset action
ml.addResetAction('reset')

export const {
  namespace,
  reducer,
  withModuleProps,
  types: {
    SEARCH_PAGE_SEARCH_FILTERS_SEARCH_TEXT,
    SEARCH_PAGE_SEARCH_FILTERS_GENDER,
    SEARCH_PAGE_SEARCH_FILTERS_SEARCH_EVENT,
    SEARCH_PAGE_SEARCH_FILTERS_RESET
  },
  actions: {
    searchTextAction,
    genderAction,
    searchEventAction,
    resetAction
  }
} = ml.create()
