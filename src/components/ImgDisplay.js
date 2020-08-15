import React, { useState, useEffect, useContext } from 'react';
import { Grid, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import Topbar from "./topBar"
import Navbar from "./navbar"
import productService from "../components/services/ProductService"
import { CartContext } from '../context/CartContext'
import "./ImageDisplay.css";
import {useHistory, useLocation } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
/*var image = localStorage.getItem("imgUrl");
var name = localStorage.getItem("name");
var price = localStorage.getItem("price");

let pVal = price.split(":");
let prices = parseInt(pVal[1]);
console.log(prices)*/

//localStorage.clear();
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const ImageDisplay = (props) =>{
    const [value,setValue] = React.useState(0);
    const id = props.match.params.id;
    const [product, setProduct] = useState([])
    const {cartItems} = useContext(CartContext);
    const {dispatch} = useContext(CartContext);
    const [elem, setElem] = React.useState(null);
    let count=0;
    
    const classes = useStyles();
    
    useEffect(() =>{
        productService.getItemById(id).then((data)=> setProduct(data))
        .catch((err) => console.log("This is err"+ err));
        
    }, [])

    const incrementHandler = () =>{
        setValue(value+1);
    }
    const decrementHandler = () =>{
        if(value <= 0)
            setValue(0);
        else
            setValue(value-1);
    }
    console.log("Item",cartItems);
    const addtoCartHandler = () =>{
        //let elem = null;
        setElem(null);
        let id = product._id
        let url = product.imgUrl;
        let item = product.name;
        let price = product.price;
        let quantity= value;
        let data = {
            id,url,item,price,quantity
        }
        if(value !==0){
                if(cartItems.length === 1 || cartItems.length>1 ){
                cartItems.find((item) =>{ 
                    if(item.id === data.id) 
                        count= count+1;
                        
                })
                console.log("count",count);
                if(count>=1){
                    setElem(<Alert severity="error">Item is already present in Cart</Alert>)
                }
                else{
                    console.log("Adding");
                    dispatch({type: 'addCartItem', cartItem: data})
                }
            }
            else if(cartItems.length === 0){
                console.log("No items until now adding yours");
                dispatch({type: 'addCartItem', cartItem: data})
            }
        }
        else{
            setElem(
                <div className={classes.root}>
                <Alert severity="error">Please Set a Value for Quantity</Alert>
                </div>
            )
        }
        
        
    }
    return (
        <Grid>
        {elem}
        <Topbar/>
        <Navbar/>
        <br></br><br></br><br></br>
        <Grid container spacing={4} id="displaygrid">
            <Grid item xs={6} id="imagegrid" >
                <img src={product.imgUrl} alt="" id="imagedisplay" ></img>
            </Grid>
            <Grid item xs={3} id="nameprice">
                <p  id="namedisplay">{product.name}</p>
                <p id="pricedisplay">{product.price}</p>
                <br></br>
                <p>Quantity </p>
                <ButtonGroup disableElevation variant="contained">
                    <Button onClick={incrementHandler}>+</Button>
                    <Button onClick={decrementHandler}>-</Button> 
                </ButtonGroup>
                <input type="text" value ={value} id="displaytf" disabled></input>
                <br></br><br></br>
                <Button color="secondary" variant="contained" 
                 onClick={addtoCartHandler}>Add to Cart</Button>
            </Grid>
        </Grid>
    </Grid>
    );
    
}

export default ImageDisplay;