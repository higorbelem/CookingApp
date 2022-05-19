import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducers = persistReducer(
    {
      key: '@com.cookingapp',
      storage: AsyncStorage,
      blacklist: [],
    },
    reducers,
  );
  return persistedReducers;
};
