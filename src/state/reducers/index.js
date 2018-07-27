import { combineReducers } from 'redux';

import itemDetail from './itemDetail';
import itemsSearch from './itemsSearch';

const rootReducer = combineReducers({
  itemDetail,
  itemsSearch
});

export default rootReducer;
