import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface MetricsState {
  readonly totalInvoices: number;
  readonly approved: number;
  readonly rejected: number;
  readonly draft: number;
}

const initialState: MetricsState = {
  totalInvoices: 0,
  approved: 0,
  rejected: 0,
  draft: 0
};

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    setMetrics: (state, action: PayloadAction<MetricsState>) => ({
      ...state,
      ...action.payload
    })
  }
});

export const { setMetrics } = metricsSlice.actions;
export const metricsReducer = metricsSlice.reducer;
