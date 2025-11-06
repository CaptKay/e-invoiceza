import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../features/auth/authSlice';
import { invoicesReducer } from '../features/invoices/invoicesSlice';
import { metricsReducer } from '../features/metrics/metricsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    invoices: invoicesReducer,
    metrics: metricsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
