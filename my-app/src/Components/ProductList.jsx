
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from '../Redux/Products/action';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

export const ProductList = () => {
    const dispatch = useDispatch();
    const Products = useSelector((store)=> store.productReducer.Products);
    const [searchParams] = useSearchParams();

    let obj = {
        params : {
            gender: searchParams.getAll("gender"),
            category : searchParams.getAll("category"),
            _sort : "price",
            _order : searchParams.get("order")
        }
    }

    useEffect(()=>{
        dispatch(GetProducts(obj));
    },[searchParams])


  return (
    <DIV>
        {Products.length > 0 && Products.map((el)=>{
           return <ProductCard key={el.id} {...el} />
        })}
    </DIV>
  )
}

const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: auto;
   // border: 1px solid black;
`
