import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    signedIn: null,
    credentials: null,
  },
  reducers: {
    signIn: (state, { payload }) => {
      state.signedIn = true;
      state.credentials = payload;
    },
    signingOut: (state) => {
      state.signedIn = null;
      state.credentials = null;
    },
  },
});

export default user;
export const { signIn, signingOut } = user.actions;
