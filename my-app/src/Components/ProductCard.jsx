import { useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";
import { AiTwotoneEye, AiTwotoneLike } from "react-icons/ai";
import { DeleteProducts, GetProducts } from "../Redux/Products/action";
import { Link } from "react-router-dom";

export const ProductCard = ({
  image,
  pName,
  pOwner,
  likes,
  views,
  creativeFields,
  tools,
  location,
  school,
  assets,
  subscriptions,
  id,
}) => {
  const dispatch = useDispatch();

  // const handelDelete = () => {
  //   dispatch(DeleteProducts(id));
  // };

  return (
    <DIV>
      <img src={image} alt="image" />

      <div className="main">
        <div className="fdiv">
          <h4>{pName}</h4>
          <p>{pOwner}</p>
        </div>
        <div className="sdiv">
          <h5>
            <span className="livi">
              <AiTwotoneLike /> {likes}
            </span>{" "}
            <span className="livi">
              <AiTwotoneEye /> {views}
            </span>
          </h5>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 24%;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  //border: 1px solid blue;
  p {
    color: #90666d;
    font-size: smaller;
    line-height: 0%;
  }
  .livi {
    cursor: pointer;
    margin-left: 10px;
    color: #90666d;
  }
  .main {
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: normal;
  }
  .sdiv {
    //border: 1px solid yellow;
    text-align: right;
    margin-right: 3px;
    width: 35%;
  }
  .fdiv {
    //border: 1px solid red;
    line-height: 0px;
    width: 65%;
  }
  img {
    width: 100%;
    border-radius: 5px;
    //border: 1px solid gray;
  }
  //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
