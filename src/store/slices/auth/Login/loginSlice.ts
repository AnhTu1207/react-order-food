import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { login } from "api/auth";

interface InitialState {
  token: string;
  userId: string;
}

const initialState: InitialState = {
  token: "",
  userId: "",
};

export const loginSlice = createSlice({
  initialState,
  name: "auth/login",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, () => {});
    builder.addCase(login.rejected, () => {});
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.token = action.payload.data.accessToken;
        state.userId = action.payload.data.id;
      }
    });
  },
});

export const loginSelector = (rootState: RootState) => rootState.login;
