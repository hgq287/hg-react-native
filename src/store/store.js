import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {reduxStorage} from './storage';

import { homeSlice } from '../centralized/homeSlice';
import { authSlice } from '../centralized/authSlice';

const rootReducer = combineReducers({
  'home': homeSlice.reducer,
  'auth': authSlice.reducer,
});

const persistConfig = {
  key: 'app',
  storage: reduxStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export const persistor = persistStore(store);

export const AppState = store.getState;
export const AppDispatch = store.dispatch;
