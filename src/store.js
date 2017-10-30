import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import appReducer from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  appReducer,
  {},
  applyMiddleware(logger, ReduxThunk) /* Add Middleware to the store*/
);

export default store;
