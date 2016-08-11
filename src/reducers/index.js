import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import list from './list';
import filters from './filters';

export default combineReducers({
  list,
  filters,
  routing: routerReducer
});
