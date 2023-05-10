import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  //console.log(location);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  return (
    <>
      {!isAuth ? (
        <Navigate state={location.pathname} to={"/login"} />
      ) : (
        children
      )}
    </>
  );
};

export const PrivateUser = ({ children }) => {
  const location = useLocation();
  const data = JSON.parse(localStorage.getItem("loginUser"));

  return (
    <>
      {data == undefined ? (
        <Navigate state={location.pathname} to={"/userlogin"} />
      ) : (
        children
      )}
    </>
  );
};
