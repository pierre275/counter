import {store} from './store';

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
