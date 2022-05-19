import {persistStore} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';

import PersistReducer from './module/redux-persist/index';
import rootReducer from './module/reducer';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(
  PersistReducer(rootReducer),
  applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);

export default store;
