import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
