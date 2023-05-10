import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../Redux/Products/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const dispatch = useDispatch();
  const Post = useSelector((store) => store.productReducer.Post);
  const [searchParams] = useSearchParams();

  let obj = {
    params: {
      creativeFields: searchParams.get("creativeFields"),
      tools: searchParams.get("tools"),
      location: searchParams.get("location"),
      school: searchParams.get("school"),
      assets: searchParams.get("assets"),
      subscriptions: searchParams.get("subscription"),
      _sort: searchParams.get("likes") && "likes",
      _order: searchParams.get("likes"),
    },
  };

  useEffect(() => {
    dispatch(GetProducts(obj));
  }, [searchParams]);

  return (
    <DIV>
      {Post.length > 0 &&
        Post.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(4, 24%);
  gap: 15px;
  // border: 1px solid black;
  div {
    width: 100%;
  }
`;
