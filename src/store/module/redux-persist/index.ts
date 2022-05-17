import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducers = persistReducer(
    {
      key: 'CookingApp',
      storage: AsyncStorage,
      whitelist: ['ingredients'],
      timeout: undefined,
    },
    reducers,
  );
  return persistedReducers;
};
