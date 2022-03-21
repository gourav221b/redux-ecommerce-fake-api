import React,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import { selectedProduct,removeSelectedProduct,addToCart,fetchProduct } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';
function ProductDetails() {


    const product= useSelector((state)=>state.product)
const {ProductId}=useParams();
const dispatch= useDispatch()


useEffect(() => {
    if(ProductId && ProductId!="")
    dispatch(fetchProduct(ProductId))
    console.log(ProductId);
    return  ()=>{

        dispatch(removeSelectedProduct())
    }
}, [ProductId]);

  return (
    Object.keys(product).length===0?<>Loading</>:
    <div className='row'>
        <div className="col-md-6">
            <img src={product.image} alt="" />
        </div>
        <div className="col-md-6">
            <div className="header">{product.title}</div>
            <div className="meta price">${product.price}</div>
            <div className="meta">{product.category}</div>  
            <button className="btn btn-primary" onClick={()=>{dispatch(addToCart(product)); console.log(product.id ,"added to cart");}}>Add to cart</button>                  
        </div>
    </div>
  )
}

export default ProductDetails

