import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface InvoiceSummary {
  readonly id: string;
  readonly invoiceNumber: string;
  readonly status: 'draft' | 'submitted' | 'approved' | 'rejected';
  readonly total: number;
  readonly issuedOn: string;
}

export interface InvoicesState {
  readonly items: InvoiceSummary[];
  readonly isLoading: boolean;
}

const initialState: InvoicesState = {
  items: [],
  isLoading: false
};

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices: (state, action: PayloadAction<InvoiceSummary[]>) => ({
      ...state,
      items: action.payload,
      isLoading: false
    }),
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload
    })
  }
});

export const { setInvoices, setLoading } = invoicesSlice.actions;
export const invoicesReducer = invoicesSlice.reducer;
