import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "./accountRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logoutFunc = async (dispatch) => {
  dispatch(logout());
};

export const register = async (dispatch, newUser) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post(`/auth/register/`, newUser);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
