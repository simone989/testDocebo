import { combineReducers } from 'redux';
import mainReducer from './mainReducer';


const appReducer = combineReducers({
  data: mainReducer //http://redux.js.org/docs/recipes/reducers/UsingCombineReducers.html  Create a single reducers
});

export default appReducer;
