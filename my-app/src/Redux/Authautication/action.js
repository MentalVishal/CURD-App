import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS } from "../actionTypes";
import axious from "axios";

export const AdminLogin = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axious
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCSESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
