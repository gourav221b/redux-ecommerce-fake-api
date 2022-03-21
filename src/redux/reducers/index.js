import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { ProductReducer,selectedProductReducer } from "./productReducer";
const reducers= combineReducers(
    {
        allProducts: ProductReducer,
        product:selectedProductReducer,
        cart:cartReducer
    }
)

export default reducers