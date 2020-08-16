import React, { useContext, useState } from 'react';
import { Grid, Button} from '@material-ui/core';
import ShoppingCartPage from "./ShoppingCartPage"
import Topbar from "./topBar";
import Navbar from "./navbar"
import { useEffect } from 'react';
import productService from './services/ProductService';
import { CartContext } from '../context/CartContext';
import {useHistory, useLocation } from 'react-router-dom';
import "./ShoppingCartPage.css"

const Cart = (props) =>{
    const [items , setItems]= React.useState([]);
    const {cartItems} = useContext(CartContext);
    const {check, setCheck} = useContext(CartContext);
    const [value,setVal] = useState(0)
    let history = useHistory();
    let totalPrice=0;
    const calculateHandler = () =>{
        console.log(cartItems);
        cartItems.map((item)=>{
            totalPrice = totalPrice+ (item.quantity * item.price);
            setVal(totalPrice);
        })
    }
    const proceedHandler =  () =>{
        history.push('/orders');
    }
    let elem = null;
    if(cartItems.length === 0 ){
        elem = (<p id="pg">Your Cart is Empty</p>)
    }
    else{
        elem = (
            cartItems.map((element,index)=>(
                <ShoppingCartPage key={index} itemArray={element}/>
                ))
        );
    }
    return (
        <Grid container direction="column">
            <Navbar/>
             <br></br>
             <br></br>
                <Grid>
                <p id="pg">My Shopping Cart</p>
                <hr id="hrStyle"></hr>
                <br></br>
                <br></br>
                <br></br>  
                {elem}
                <br></br>
                <hr></hr>
                <Grid >
                    <input type="text" id="displaytf1" 
                     value={value + " "+"Pkr"} disabled ></input>
                    <Button variant="contained" color="secondary"
                     onClick = {calculateHandler} id="calgrid" >Calculate</Button>
                     <Button variant="contained" color="secondary"
                     onClick = {proceedHandler} id="calgrid" >Proceed</Button>
                </Grid>
                <br></br>
                <hr></hr>
                </Grid>
        </Grid>
    );
}

export default Cart;

