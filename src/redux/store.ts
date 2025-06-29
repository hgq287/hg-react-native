import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { homeSlice } from './slices/homeSlice';
import { authSlice } from './slices/authSlice';
import { userSlice } from './slices/userSlice';

const rootReducer = combineReducers({
  'auth': authSlice.reducer,
  'home': homeSlice.reducer,
  'user': userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;