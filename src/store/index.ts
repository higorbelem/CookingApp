import {createStore} from 'redux';

import PersistReducer from './module/redux-persist/index';
import rootReducer from './module/reducer';

export default createStore(PersistReducer(rootReducer));
