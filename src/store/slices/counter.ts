import {createSlice} from '@reduxjs/toolkit';

export const CounterActions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
} as const;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    [CounterActions.INCREMENT]: state => {
      if (state.value < 100) return {value: state.value + 1};
      return state;
    },
    [CounterActions.DECREMENT]: state => {
      if (state.value > 0) return {value: state.value - 1};
      return state;
    },
  },
});

export const counterActions = counterSlice.actions;
