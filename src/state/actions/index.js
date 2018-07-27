import api from '../../api/connection';

/**
 * Action types
 */
export const ITEMS_SEARCH_FAILURE = 'ITEMS_SEARCH_FAILURE';
export const ITEMS_SEARCH_REQUEST = 'ITEMS_SEARCH_REQUEST';
export const ITEMS_SEARCH_SUCCESS = 'ITEMS_SEARCH_SUCCESS';
export const RECEIVE_SEARCH_ITEMS = 'RECEIVE_SEARCH_ITEMS';

export const ITEM_DETAIL_FAILURE = 'ITEM_DETAIL_FAILURE';
export const ITEM_DETAIL_REQUEST = 'ITEM_DETAIL_REQUEST';
export const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';
export const RECEIVE_ITEM_DETAIL = 'RECEIVE_ITEM_DETAIL';

/**
 * Action creators
 */

// Items search
export function itemsSearchFailure(message) {
  return {
    type: ITEMS_SEARCH_FAILURE,
    message
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
      .catch(error => {
        const errorMessage =
          error.response && error.response.status === 404
            ? 'No se encontraron productos para su búsqueda :('
            : 'Ocurrió un error desconocido. Por favor intente nuevamente';
        dispatch(itemsSearchFailure(errorMessage));
      });
  };
}

// Items detail
export function itemDetailFailure(message) {
  return {
    type: ITEM_DETAIL_FAILURE,
    message
  };
}

export function itemDetailRequest(id) {
  return { type: ITEM_DETAIL_REQUEST, id };
}

export function itemDetailSuccess() {
  return {
    type: ITEM_DETAIL_SUCCESS,
    lastFetchedOn: Date.now()
  };
}

export function receiveItemDetail(response) {
  return {
    type: RECEIVE_ITEM_DETAIL,
    response
  };
}

export function fetchItemDetail(id) {
  return dispatch => {
    // init search actions
    dispatch(itemDetailRequest(id));
    api.connection
      .get(`${api.endpoints.detail}/${id}`)
      .then(response => {
        dispatch(itemDetailSuccess());
        dispatch(receiveItemDetail(response.data));
      })
      .catch(error => {
        const errorMessage =
          error.response && error.response.status === 404
            ? 'No encontró el producto solicitado :('
            : 'Ocurrió un error desconocido. Por favor intente nuevamente';
        dispatch(itemDetailFailure(errorMessage));
      });
  };
}
