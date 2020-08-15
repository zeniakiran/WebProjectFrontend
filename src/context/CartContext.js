import React ,{createContext, useState, useReducer, useEffect} from 'react'
import  CartReducer from '../reducers/CartReducer'
export const CartContext = createContext();

const CartContextProvider = (props) =>{
    const [cartItems, dispatch] = useReducer(CartReducer, [], ()=>{
        let existingEntries = localStorage.getItem("itemsArray");
        return existingEntries ? JSON.parse(existingEntries) : []
    });
    useEffect(()=>{
        localStorage.setItem("itemsArray", JSON.stringify(cartItems));
    },[cartItems])
    
    return (
        <CartContext.Provider value = {{cartItems, dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;