import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utilities/setup-store";

export interface AppState {
  initialized: boolean;
}

const initialState: AppState = {
  initialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const { setAppInitialized } = appSlice.actions;
export const appReducer = appSlice.reducer;
export const selectAppInitialized = (state: RootState) => state.app.initialized;
