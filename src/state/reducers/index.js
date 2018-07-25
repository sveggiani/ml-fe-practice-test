import { combineReducers } from 'redux';

import productDetail from './productDetail';
import itemsSearch from './itemsSearch';

const rootReducer = combineReducers({
  productDetail,
  itemsSearch
});

export default rootReducer;
