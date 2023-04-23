import React from "react";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS } from "../actionTypes";

const initialState = {
  isLoading: false,
  isAuth: false,
  isError: false,
  token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCSESS: {
      return { ...state, isLoading: false, isAuth: true, token: payload };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
