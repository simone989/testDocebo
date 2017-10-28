import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import filterReducer from './filterReducer';

const appReducer = combineReducers({
  data: mainReducer,
  filterFunction: filterReducer
});

export default appReducer;
