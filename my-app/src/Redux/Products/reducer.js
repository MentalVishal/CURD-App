import React from "react";
import {
  DELETE_PRODUCTS_SUCSESS,
  GET_PRODUCTS_SUCSESS,
  PATCH_PRODUCTS_SUCSESS,
  POST_PRODUCTS_SUCSESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case POST_PRODUCTS_SUCSESS: {
      return { ...state, isLoading: false };
    }
    case GET_PRODUCTS_SUCSESS: {
      return { ...state, isLoading: false, Products: payload };
    }
    case DELETE_PRODUCTS_SUCSESS: {
      return { ...state, isLoading: false, Products: payload };
    }
    case PATCH_PRODUCTS_SUCSESS: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
