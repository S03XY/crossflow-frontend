import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
};

const UserReducerSlice = createSlice({
  initialState,
  name: "user details",
  reducers: {
    updateUserDetails: (
      state,
      action: { type: string; payload: { isRegistered?: boolean } }
    ) => {
      if (action.payload.isRegistered)
        state.isRegistered = action.payload.isRegistered;
    },
  },
});

export const { updateUserDetails } = UserReducerSlice.actions;
export default UserReducerSlice.reducer;
