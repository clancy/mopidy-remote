import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggerMiddleware from './middleware/loggerMiddleware';
import MopidyEpics from '../Modules/Mopidy/Epics';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import reducers from './reducers';

const rootEpic = combineEpics(
  ...MopidyEpics
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
