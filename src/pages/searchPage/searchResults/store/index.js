import { ReduxHotModule } from 'redux-hot-module'

const ml = new ReduxHotModule('searchPageSearchResults')

// param actions
ml.addParamAction('items', [])
ml.addParamAction('loading', false)

// reset action
ml.addResetAction('reset')

export const {
  namespace,
  reducer,
  withModuleProps,
  types: {
    SEARCH_PAGE_SEARCH_RESULTS_ITEMS,
    SEARCH_PAGE_SEARCH_RESULTS_LOADING,
    SEARCH_PAGE_SEARCH_RESULTS_RESET
  },
  actions: {
    itemsAction,
    loadingAction,
    resetAction
  }
} = ml.create()
