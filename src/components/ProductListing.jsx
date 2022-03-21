import React,{useState,useEffect} from 'react'

import ProductComponent from './ProductComponent';
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import {setProducts, SetProducts,removeSelectedProduct, fetchProducts} from '../redux/actions/productActions'
function ProductListing() {

    const products= useSelector((state)=>state.allProducts.products)
    const cart= useSelector((state)=>state.cart)
    
    // const {id,title}=products[0];
    const dispatch= useDispatch()
    // const fetchProducts=async()=>
    // {
    //     const response =await axios.get('https://fakestoreapi.com/products').catch((err)=>{
    //         console.log(err);
    //     })

    //     dispatch(setProducts(response.data));
    // }
    useEffect(() => {
    dispatch(fetchProducts())
      console.log(cart);

    }, []);
  return (
    <div className='ui grid container'>
    <ProductComponent/>
    </div>
  )
}

export default ProductListing