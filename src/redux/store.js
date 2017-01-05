import { createStore, combineReducers, applyMiddleware } from 'redux'
import HomeStateReducer from '../Modules/Home/HomeState';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';

const reducers = {
  home: HomeStateReducer
};

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware)
)

export default store;
