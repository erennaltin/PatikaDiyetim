import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import UserReducer from './reducers/UserReducer';
import DietReducer from './reducers/DietReducer';
import NotificationReducer from './reducers/NotificationReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {combineReducers} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['notification'],
};

const combinedReducers = combineReducers({
  user: UserReducer,
  diet: DietReducer,
  notification: NotificationReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: {
    store: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
