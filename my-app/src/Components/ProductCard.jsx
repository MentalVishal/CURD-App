import { useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";
import { DeleteProducts, GetProducts } from "../Redux/Products/action";
import { Link } from "react-router-dom";

export const ProductCard = ({
  name,
  image,
  brand,
  price,
  category,
  gender,
  id,
}) => {
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(DeleteProducts(id));
  };

  return (
    <DIV>
      <img src={image} alt="image" />
      <h2>Name : {name}</h2>
      <h3>Brand : {brand}</h3>
      <p>Gender : {gender}</p>
      <p>Category : {category}</p>
      <h2>Price : {price}</h2>
      <button onClick={handelDelete}>DELETE</button>
      <br />
      <button>
        <Link to={`/edit/${id}`}>EDIT</Link>
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  margin: 10px;
  //border: 1px solid blue;
  img {
    width: 100%;
    height: 50%;
  }
`;
