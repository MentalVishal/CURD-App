import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AdminLogin } from "../Redux/Authautication/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  console.log(location);

  const handelSubmit = () => {
    const userData = {
      email,
      password,
    };
    dispatch(AdminLogin(userData)).then((res) => {
      navigate(location.state);
    });
    // setEmail("");
    // setPassword("");
  };

  return (
    <DIV isAuth={isAuth}>
      <h2>{isAuth ? "Login Successful" : "Login to Continue"}</h2>

      <h1>LOGIN</h1>
      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handelSubmit}>Submit</button>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  width: 50%;
  margin: auto;
  padding: 15px;

  input {
    font-size: large;
  }
  button {
    font-size: large;
    margin-top: 10px;
    border: none;
    height: 35px;
  }
  button:hover {
    background-color: red;
    cursor: pointer;
    color: white;
  }
  h2 {
    color: ${({ isAuth }) => (isAuth ? "green" : "red")};
  }
`;
