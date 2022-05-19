import {persistStore} from 'redux-persist';
import {createStore} from 'redux';

import PersistReducer from './module/redux-persist/index';
import rootReducer from './module/reducer';

const store = createStore(PersistReducer(rootReducer));

export const persistor = persistStore(store);

export default store;
