import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const loginUser = createAsyncThunk("user", async (body) => {
  try {
    const response = await axios.post("YOUR_API_URL", body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
      state.isAuthenticated = true;
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
      state.isAuthenticated = true;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isAuthenticated = true;
    },
    [loginUser.fulfilled]: (state, { peyload: { user, token } }) => {
      state.isAuthenticated = false;
      state.token = token;
      state.user = user;
      localStorage.setItem("token", JSON.stringify("token"));
      localStorage.setItem("token", JSON.stringify("token"));
    },
    [loginUser.rejected]: (state, action) => {
      state.isAuthenticated = true;
    },
  },
});

export const { addToken, addUser } = userSlice.actions;
export default userSlice.reducer;
