
import { ActionTypes } from "../constants/actionType";
const initialState={
    cart:[]
}
export const cartReducer =(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ActionTypes.ADD_TO_CART:
            return{...state,cart:[...state.cart,payload]}

        case ActionTypes.DELETE_FROM_CART:
            // return state.filter(item=>item.id!=payload.id)
            const newstate= state.cart.filter(item=>item.id!=payload.id)
            return{...state,cart:newstate}

        case ActionTypes.EMPTY_CART:
            return {}

            default:
                return state
    }
    
}