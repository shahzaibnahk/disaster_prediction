import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: null,
    isAuthenticated: false,
  },

  reducers: {
    getMyProfileRequest: (state) => {
      state.loading = true;
    },

    getMyProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },

    getMyProfileFail: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getMyProfileRequest,
  getMyProfileSuccess,
  getMyProfileFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
} = profileSlice.actions;
export default profileSlice.reducer;
