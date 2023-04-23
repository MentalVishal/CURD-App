import {
  DELETE_PRODUCTS_SUCSESS,
  GET_PRODUCTS_SUCSESS,
  PATCH_PRODUCTS_SUCSESS,
  POST_PRODUCTS_SUCSESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "../actionTypes";
import axios from "axios";

export const AddProducts = (productsData) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  axios
    .post("http://localhost:8080/products", productsData)
    .then((res) => {
      //console.log(res.data);
      dispatch({ type: POST_PRODUCTS_SUCSESS });
    })
    .catch(() => {
      //console.log(err);
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const GetProducts = (props) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  axios
    .get("http://localhost:8080/products", props)
    .then((res) => {
      dispatch({ type: GET_PRODUCTS_SUCSESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const DeleteProducts = (id) => (dispatch) => {
  let payload = [];
  axios.get("http://localhost:8080/products").then((res) => {
    payload = res.data.filter((el) => el.id !== id);
  });

  dispatch({ type: PRODUCTS_REQUEST });
  axios
    .delete(`http://localhost:8080/products/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCTS_SUCSESS, payload });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};

export const PatchProducts = (id, data) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  return axios
    .patch(`http://localhost:8080/products/${id}`, data)
    .then((res) => {
      dispatch({ type: PATCH_PRODUCTS_SUCSESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};
