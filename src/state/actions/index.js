import api from '../../api/connection';

/**
 * Action types
 */
export const ITEMS_SEARCH_FAILURE = 'ITEMS_SEARCH_FAILURE';
export const ITEMS_SEARCH_REQUEST = 'ITEMS_SEARCH_REQUEST';
export const ITEMS_SEARCH_SUCCESS = 'ITEMS_SEARCH_SUCCESS';

export const RECEIVE_SEARCH_ITEMS = 'RECEIVE_SEARCH_ITEMS';

/**
 * Action creators
 */
export function itemsSearchFailure() {
  return {
    type: ITEMS_SEARCH_FAILURE
  };
}

export function itemsSearchRequest(query) {
  return { type: ITEMS_SEARCH_REQUEST, query };
}

export function itemsSearchSuccess() {
  return {
    type: ITEMS_SEARCH_SUCCESS,
    lastFetchedOn: Date.now()
  };
}

export function receiveSearchItems(response) {
  return {
    type: RECEIVE_SEARCH_ITEMS,
    response
  };
}

export function fetchSearchItems(query) {
  return dispatch => {
    // init search actions
    dispatch(itemsSearchRequest(query));
    api.connection
      .get(`${api.endpoints.search}?q=${query}`)
      .then(response => {
        dispatch(itemsSearchSuccess());
        dispatch(receiveSearchItems(response.data));
      })
      .catch(() => {
        dispatch(itemsSearchFailure());
      });
  };
}
