import type { store } from '../../store';

export type TypeDispatch = typeof store.dispatch;
export type TypeState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
