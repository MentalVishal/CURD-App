import React from "react";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { ProductList } from "../Components/ProductList";
import { SideBar } from "../Components/SideBar";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <DIV>
      <ProductList />
      <div className="sidebar">
        <SideBar />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  .sidebar {
    //border: 1px solid black;
    width: 250px;
  }
`;
