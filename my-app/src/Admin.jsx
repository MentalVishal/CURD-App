import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { AddProducts } from './Redux/Products/action';

export const Admin = () => {

    const initialState = {
        name: "",
        image: "",
        brand: "",
        price: "",
        category: "",
        gender: "",
    }
    const [Products, setProducts] = useState(initialState);

    const handelChange = (e) => {
        const { name, value } = e.target;
        setProducts((prev) => {
            return { ...prev, [name]: name === "price" ? +value : value }
        });
    }

    const dispatch = useDispatch();
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(AddProducts(Products));
        setProducts(initialState)
    }

    return (
        <DIV>
            <h1>Add Product</h1>
            <form onSubmit={handelSubmit}>
                <input value={Products.name} type="text" name="name" placeholder="Product Name" onChange={(e) => handelChange(e)} />
                <input value={Products.image} type="text" name="image" placeholder="Product Image" onChange={(e) => handelChange(e)} />
                <input value={Products.brand} type="text" name="brand" placeholder="Product Brand" onChange={(e) => handelChange(e)} />
                <input value={Products.price} type="number" name="price" placeholder="Product Price" onChange={(e) => handelChange(e)} />
                <select value={Products.category} name="category" onChange={(e) => handelChange(e)}>
                    <option value="">Select Category</option>
                    <option value="top-wear">Top Wear</option>
                    <option value="t-shirt">T-Shirt</option>
                    <option value="jeans">Jeans</option>
                </select>
                <select value={Products.gender} name="gender" onChange={(e) => handelChange(e)}>
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <input id='submit' type="Submit" value="Add Product" />
            </form>
        </DIV>
    )
}

const DIV = styled.div`
    width: 50%;
    margin: auto;
    border: 1px solid gray;
    padding: 30px;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 15px;
        font-size: large;
        
    }
    input{
        width: 80%;
        margin: auto;
        font-size: larger;
    }
    select{
        width: 80%;
        margin: auto;
        font-size: larger;
    }
    #submit{
        border: 0px;
        cursor: pointer;
        margin-top: 10px;
        width: 200px;
        height: 35px;
    }
    #submit:hover{
        background-color: red;
        color: white;
    }
`