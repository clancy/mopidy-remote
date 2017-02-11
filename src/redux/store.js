import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable'
import middleware from './middleware';
import reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  undefined,
  // applyMiddleware() tells createStore() how to handle middleware
  compose(
    applyMiddleware(...middleware),
    autoRehydrate()
  )
);

const persistConfig = {
  whitelist: ['settings'],
  storage: AsyncStorage,
  transforms: [immutableTransform()]
};

persistStore(store, persistConfig, () => {
  console.log('rehydration complete')
})

export default store;
