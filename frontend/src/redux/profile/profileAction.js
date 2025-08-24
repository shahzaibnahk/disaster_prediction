import axios from "axios";
import {
  getMyProfileFail,
  getMyProfileRequest,
  getMyProfileSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
} from "./profileSlice";
import { server } from "../store";

export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch(getMyProfileRequest());
    const { data } = await axios.get(`${server}/me`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(getMyProfileSuccess(data));
  } catch (error) {
    dispatch(getMyProfileFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const { data } = await axios.get(`${server}/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(logoutSuccess(data));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};
