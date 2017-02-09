import { createStore, combineReducers, applyMiddleware } from 'redux'
import middleware from './middleware';
import reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(...middleware)
)

export default store;
