import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GetProducts } from "../Redux/Products/action";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  let obj = {
    params: {
      q: query,
    },
  };

  useEffect(() => {
    dispatch(GetProducts(obj));
  }, [query]);

  return (
    <DIV>
      <h2>Navbar</h2>
      <Link className="link" to={"/"}>
        HomePage
      </Link>
      <Link className="link" to={"/admin"}>
        Admin
      </Link>
      <Link className="link" to={"/login"}>
        Login
      </Link>
      <Link className="link" to={"/edit/:id"}>
        EditPage
      </Link>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  gap: 20px;
  align-items: center;
  margin: auto;

  .link :hover {
    cursor: pointer;
    font-size: large;
    color: red;
    background-color: blue;
  }
`;
