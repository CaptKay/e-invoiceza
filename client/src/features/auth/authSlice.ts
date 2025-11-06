import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  readonly token: string | null;
  readonly tenantId: string | null;
  readonly userEmail: string | null;
}

const initialState: AuthState = {
  token: null,
  tenantId: null,
  userEmail: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; tenantId: string; userEmail: string }>
    ) => ({
      ...state,
      token: action.payload.token,
      tenantId: action.payload.tenantId,
      userEmail: action.payload.userEmail
    }),
    clearCredentials: () => initialState
  }
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
