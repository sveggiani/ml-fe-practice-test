import {
  ITEMS_SEARCH_FAILURE,
  ITEMS_SEARCH_REQUEST,
  ITEMS_SEARCH_SUCCESS,
  RECEIVE_SEARCH_ITEMS
} from '../actions';

const initialState = {
  categories: [],
  data: [],
  errorMessage: '',
  fetched: false,
  hasError: false,
  isFetching: false,
  lastFetchedOn: false,
  query: ''
};

const itemsSearch = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_SEARCH_REQUEST:
      return {
        ...state,
        hasError: false,
        isFetching: true,
        query: action.query
      };
    case ITEMS_SEARCH_SUCCESS:
      return {
        ...state,
        fetched: true,
        isFetching: false,
        lastFetchedOn: action.lastFetchedOn
      };
    case ITEMS_SEARCH_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
        fetched: false,
        isFetching: false,
        hasError: true
      };
    case RECEIVE_SEARCH_ITEMS:
      return {
        ...state,
        categories: action.response.categories,
        data: action.response.items
      };
    default:
      return state;
  }
};

export default itemsSearch;
