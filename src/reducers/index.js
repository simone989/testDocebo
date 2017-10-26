import { combineReducers } from 'redux';
import downloadReducer from './downloadReducer';
import filterReducer from './filterReducer';

const appReducer = combineReducers({
  data: downloadReducer,
  filterFunction: filterReducer
});

export default appReducer;
