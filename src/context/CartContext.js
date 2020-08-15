import React ,{createContext, useState, useReducer, useEffect} from 'react'
import  CartReducer from '../reducers/CartReducer'
export const CartContext = createContext();

const CartContextProvider = (props) =>{
    const [cartItems, dispatch] = useReducer(CartReducer, [], ()=>{
        let existingEntries = localStorage.getItem("itemsArray");
        return existingEntries ? JSON.parse(existingEntries) : []
    });
    const [check, setCheck] = useState(false);
    let totalPrice1=0;
    useEffect(()=>{
        localStorage.setItem("itemsArray", JSON.stringify(cartItems));
    },[cartItems])
    
    totalPrice1 = cartItems.map((item) => {
        totalPrice1 = totalPrice1 + (item.quantity * item.price);
        //setVal(totalPrice);
    })
    return (
        <CartContext.Provider value = {{cartItems,check,totalPrice1,setCheck, dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;