import { createStore, combineReducers, applyMiddleware } from 'redux'
import HomeStateReducer from '../Modules/Home/HomeState';
import AboutStateReducer from '../Modules/About/AboutState';
import loggerMiddleware from './middleware/loggerMiddleware';
import {pingEpic} from '../Modules/About/AboutState';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';

const reducers = {
  home: HomeStateReducer,
  about: AboutStateReducer
};

const rootEpic = combineEpics(
  pingEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(
    epicMiddleware,
    loggerMiddleware)
)

export default store;
