import React, { useContext, useState } from 'react';
import { Grid, Button, Card, CardActionArea, CardContent, Typography, ButtonGroup } from '@material-ui/core';
import picture from "../pictures/back1.jpg"
import { Link } from 'react-router-dom';
import "./ShoppingCartPage.css"
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
//let itemArr =JSON.parse(localStorage.getItem("allEntries"));

const ShoppingCart = (props) =>{
    const {dispatch} = useContext(CartContext);
    const {cartItems} = useContext(CartContext);
    const [quan, setQuan]= useState(props.itemArray.quantity);
    const removeElementhandler = (e) =>{
        console.log("Id",props.itemArray.id);
        dispatch({type: 'removeCartItem', id: props.itemArray.id})
        }
    const IncrementHandler = (id) =>{
        console.log(cartItems);
       // let cart = localStorage.getItem("itemsArray");
        cartItems.find((item)=>{
            if(item.id === id){
                if(item.quantity >=5){
                    toast.error("Sorry! You cannot add more", {
                        position: toast.POSITION.TOP_LEFT,
                    });
                }
                else{
                    item.quantity = item.quantity+1;
                    setQuan(item.quantity);
                }
                
            }
        })
    }
        const DecrementHandler = (id) =>{
            console.log(cartItems);
           // let cart = localStorage.getItem("itemsArray");
            cartItems.find((item)=>{
                if(item.id === id){
                    if(item.quantity <= 0){
                        toast.error("Quantity cannot be set to 0", {
                            position: toast.POSITION.TOP_LEFT,
                        });
                    }
                    else{
                        item.quantity = item.quantity-1;
                        setQuan(item.quantity);
                    }
                    
                }
            })
        //dispatch({type: 'setQuantity', quantity: quan});
        console.log("updated " ,cartItems);
    }
    
    return (
        <Grid container direction="row" className=  "cartGrid">
            <Grid item xs={4}>
            <Card className="mediaCart">
            <CardActionArea>
                <CardContent>
                <img src={props.itemArray.url} alt="" className="media" />
                    <Typography component="h4">
                        {props.itemArray.item}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" 
                     >Price: 
                    {props.itemArray.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card> 
        </Grid>  
            <div id="test">
                    <Typography component="h4" id="typo1" >
                    Quantity :
                    <input type="text" value={quan} id="carttf" 
                     disabled></input>
                    <ButtonGroup disableElevation variant="contained" id="btngrp">
                        <Button onClick={()=>IncrementHandler(props.itemArray.id)}>+</Button>
                        <Button onClick={()=>DecrementHandler(props.itemArray.id)}>-</Button> 
                    </ButtonGroup>
                    </Typography>
                    </div>        
            
            <Grid item xs={2} id="gr1">
            <Button  variant="contained" color="secondary" id="rembtn"
            onClick = {removeElementhandler}>Remove</Button>
            </Grid>
          
        </Grid>
    );
}

export default ShoppingCart;

