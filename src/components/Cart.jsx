import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteFromCart} from '../redux/actions/productActions'
function Cart() {

    const cartList= useSelector((state)=>state.cart.cart)
    console.log(cartList)
    const dispatch=useDispatch()
  return (
    Object.keys(cartList).length==0?<>Loading</>:
    <>
    {cartList.map(item=><div key={item.id}>
        
        <span>{item.id}</span>
        <span>{item.title}</span>
        <span onClick={()=>dispatch(deleteFromCart(item))} >Delete Item</span>
        </div>)}
    </>
    
  )
}

export default Cart