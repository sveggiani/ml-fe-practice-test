import {
  ITEM_DETAIL_FAILURE,
  ITEM_DETAIL_REQUEST,
  ITEM_DETAIL_SUCCESS,
  RECEIVE_ITEM_DETAIL
} from '../actions';

const initialState = {
  categories: [],
  data: {},
  errorMessage: '',
  fetched: false,
  hasError: false,
  id: '',
  isFetching: false,
  lastFetchedOn: false
};

const itemDetail = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_DETAIL_REQUEST:
      return {
        ...state,
        hasError: false,
        isFetching: true,
        id: action.id
      };
    case ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        fetched: true,
        isFetching: false,
        lastFetchedOn: action.lastFetchedOn
      };
    case ITEM_DETAIL_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
        fetched: false,
        isFetching: false,
        hasError: true
      };
    case RECEIVE_ITEM_DETAIL:
      return {
        ...state,
        categories: action.response.categories,
        data: action.response.item
      };
    default:
      return state;
  }
};

export default itemDetail;
