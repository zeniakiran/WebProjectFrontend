import React, { useContext } from 'react';
import { Grid, Button, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import picture from "../pictures/back1.jpg"
import { Link } from 'react-router-dom';
import "./ShoppingCartPage.css"
import { CartContext } from '../context/CartContext';
//let itemArr =JSON.parse(localStorage.getItem("allEntries"));

const ShoppingCart = (props) =>{
    const {dispatch} = useContext(CartContext);
    const removeElementhandler = (e) =>{
        console.log("Id",props.itemArray.id);
        dispatch({type: 'removeCartItem', id: props.itemArray.id})
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
                    Quantity 
                    <Typography  variant="body2" color="textSecondary" component="p" id="typo2"
                     >
                     {props.itemArray.quantity}
                    </Typography>
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

