import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { store } from "../Redux/store";
import { PatchProducts } from "../Redux/Products/action";

export const EditPage = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.productReducer.Products);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  //console.log(products);

  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setPrice(data.price);
  }, []);

  const handelUpdate = () => {
    const data = { price };
    dispatch(PatchProducts(id, data)).then(() => {
      alert("Price Updated Successful");
    });
  };

  return (
    <div>
      <h1>EditPage</h1>
      <br />
      <div>
        <h1>Update Price</h1>
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handelUpdate}>Update</button>
      </div>
    </div>
  );
};
