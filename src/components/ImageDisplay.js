import React from 'react';
import { Grid, ButtonGroup, Button } from '@material-ui/core';
import Topbar from "./topBar"
import Navbar from "./navbar"
import "./ImageDisplay.css";

var image = localStorage.getItem("imgUrl");
var name = localStorage.getItem("name");
var price = localStorage.getItem("price");
let cartItems1=[{}];

//localStorage.clear();
const ImageDisplay = (props) =>{
    const [value,setValue] = React.useState(0);
    const [item, setItem] = React.useState("");
    const [url, setUrl] = React.useState();
    const [pp, setP] = React.useState(0);
    const [check, setCheck] = React.useState(false);
    //const [noOfItem, setNoOfItem]= React.useState(0);
    const [cartItems , setCartItems] = React.useState([{}]);
    //const [count , setCount] = React.useState(1);
    const [test,settest] = React.useState(false)
    //let cartItems = [];
    let count=0;
    const incrementHandler = () =>{
        setValue(value+1);
    }
    const decrementHandler = () =>{
        if(value <= 0)
            setValue(0);
        else
            setValue(value-1);
    }
    
    
    const addToCartHandler = (e) =>{
        let imgUrl = e.target.parentNode.parentNode.previousSibling.childNodes[0].currentSrc;
        let itemName = e.target.parentNode.parentNode.childNodes[0].innerHTML;
        let price =e.target.parentNode.parentNode.childNodes[1].innerHTML;

        let pVal = price.split(":");
        let res = parseInt(pVal[1]);

        //console.log(cartItems);
        //setCartItems({imgUrl, itemName,res});

        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if(localStorage.getItem("allEntries") == null) {
            existingEntries = [];
            setCartItems({imgUrl, itemName,res});
            localStorage.setItem("item", JSON.stringify(cartItems));
                existingEntries.push(cartItems);
                localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        }
        else{
            console.log(cartItems);
            Object.keys(cartItems).forEach((elem)=>{
                if(cartItems.res === res)
                console.log(true);
                else{
                console.log(false);
                setCartItems({imgUrl, itemName,res});
                localStorage.setItem("item", JSON.stringify(cartItems));
                existingEntries.push(cartItems);
                localStorage.setItem("allEntries", JSON.stringify(existingEntries));
                }
            })
        }
        
    }
    const dummyHandler = (e) =>{
        let imgUrl = e.target.parentNode.parentNode.previousSibling.childNodes[0].currentSrc;
        let itemName = e.target.parentNode.parentNode.childNodes[0].innerHTML;
        let price =e.target.parentNode.parentNode.childNodes[1].innerHTML;

        let pVal = price.split(":");
        let res = parseInt(pVal[1]);
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        //if(value === 0)
            //console.log("Please set Quantity");
        //else{
        if(localStorage.getItem("allEntries") == null) {
            existingEntries = [];
            cartItems1 = [{imgUrl, itemName,res,value}];
            localStorage.setItem("item", JSON.stringify(cartItems1));
                existingEntries.push(cartItems1);
                localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        }
        else{
            for(var i=0 ; i<existingEntries.length; i++){
                if(existingEntries[i][0].res === res){
                   count = count + 1;
                }
            }
            if(count>0)
            {
                console.log("Product Exist in Cart already");
            }
            else if(count===0){
                console.log("inide");
                    cartItems1 = [{imgUrl, itemName,res,value}];
                    localStorage.setItem("item", JSON.stringify(cartItems1));
                    existingEntries.push(cartItems1);
                    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
                }
    }
    
    }
    
    const dummyHandler1 = (e) =>{
        //console.log(e.target);
        setUrl(e.target.parentNode.parentNode.previousSibling.childNodes[0].currentSrc);
        setItem(e.target.parentNode.parentNode.childNodes[0].innerHTML);
        let price =e.target.parentNode.parentNode.childNodes[1].innerHTML;

        let pVal = price.split(":");
        let res = parseInt(pVal[1]);
        setP(res);
        console.log(url,item)
    }
    
    return (
    <Grid>
        <Topbar/>
        <Navbar/>
        <br></br><br></br><br></br>
        <Grid container spacing={4} id="displaygrid">
            <Grid item xs={6} id="imagegrid" >
                <img src={image} alt="" id="imagedisplay" ></img>
            </Grid>
            <Grid item xs={3} id="nameprice">
                <p  id="namedisplay">{name}</p>
                <p id="pricedisplay">{price}</p>
                <br></br>
                <p>Quantity </p>
                <ButtonGroup disableElevation variant="contained">
                    <Button onClick={incrementHandler}>+</Button>
                    <Button onClick={decrementHandler}>-</Button> 
                </ButtonGroup>
                <input type="text" value ={value} id="displaytf" disabled></input>
                <br></br><br></br>
                <Button color="secondary" variant="contained" onClick={dummyHandler}>Add to Cart</Button>
            </Grid>
        </Grid>
    </Grid>
    );
    
}

export default ImageDisplay;