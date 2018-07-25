const initialState = {};

const search = (state = {}, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        productSearch: {
          query: action.query
        }
      };
    default:
      return state;
  }
};

const productDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return search(state, action);
    default:
      return state;
  }
};

export default productDetail;
