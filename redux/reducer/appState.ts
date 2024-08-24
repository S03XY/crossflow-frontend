import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transferSection: false,
};

const AppStateReducer = createSlice({
  initialState,
  name: "AppState Reducer",
  reducers: {
    updateAppState: (
      state,
      action: {
        type: string;
        payload: {
          transferSection?: boolean;
        };
      }
    ) => {
      if (action.payload.transferSection !== undefined)
        state.transferSection = action.payload.transferSection;
    },
  },
});

export const { updateAppState } = AppStateReducer.actions;

export default AppStateReducer.reducer;
