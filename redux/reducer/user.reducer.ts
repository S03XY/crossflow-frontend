import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
  domain: "",
};

const UserReducerSlice = createSlice({
  initialState,
  name: "user details",
  reducers: {
    updateUserDetails: (
      state,
      action: {
        type: string;
        payload: { isRegistered?: boolean; domain?: string };
      }
    ) => {
      if (action.payload.isRegistered)
        state.isRegistered = action.payload.isRegistered;
      if (action.payload.domain) state.domain = action.payload.domain;
    },
  },
});

export const { updateUserDetails } = UserReducerSlice.actions;
export default UserReducerSlice.reducer;
