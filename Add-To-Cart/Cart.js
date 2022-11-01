import React, { createContext, useReducer, useEffect} from 'react'
import './Cart.css'
import ContextCart from './ContextCart';
import {products} from './Products'
import { reducer } from './Reducer';

export const CartContext = createContext();

const second = {
    item:products,
    totalAmount:0,
    totalItem:0,
}
const Cart = () => {

  const [state, dispatch] = useReducer(reducer, second)

  //to delete an individual elements from an Item Cart
  const removeItem = (id) =>{
    return dispatch({
        type:"REMOVE_ITEM",
        payload: id,
        })
  }




  //clear the cart
  const clearCart = () =>{
    return dispatch({
        type:"CLEAR_CART"
    })
  }


  //increment the item
  const increment = (id) =>{
    return dispatch({
        type:"INCREMENT",
        payload: id,
    })
  }



  //decrement the item
  const decrement =(id) =>{
    return dispatch({
        type:"DECREMENT",
        payload: id,
    })
  }




  // we will use useeffect hook to update the data
  useEffect(() => {
    dispatch({type:"GET_TOTAL"})
  },[state.item])
  

  return (
    <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
        <ContextCart/>
    </CartContext.Provider>
  )
}

export default Cart