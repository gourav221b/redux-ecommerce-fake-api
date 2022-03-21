import storeApi from "../../api/storeApi";
import { ActionTypes } from "../constants/actionType"





export const fetchProducts=  ()=> async(dispatch)=>
    {
        const response = await storeApi.get('/products');
       dispatch({
            type:ActionTypes.FETCH_PRODUCT,
            payload:response.data
        })
    }

    export const fetchProduct=  (id)=> async(dispatch)=>
    {
        const response = await storeApi.get(`/products/${id}`);
       dispatch({
            type:ActionTypes.FETCH_SELECTED_PRODUCT,
            payload:response.data
        })
    }

export const setProducts=(products)=>
{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
};

export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    };
};
export const removeSelectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
       
    };
};



export const addToCart=(product)=>
{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const deleteFromCart=(product)=>
{
    return{
        type:ActionTypes.DELETE_FROM_CART,
        payload:product
    }
}
export const emptyCart=()=>{
    return {
        type:ActionTypes.EMPTY_CART,
       
    };
};