import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import profileReducer from "./profile/profileSlice";
import predictReducer from "./predict/predictSlice";

export const server = "http://localhost:4000/api/v1";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    predict: predictReducer,
  },
});

export default store;
