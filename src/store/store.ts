import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './slices/counter';

export const store = configureStore({
  devTools: true,
  reducer: {
    counter: counterSlice.reducer,
  },
});
