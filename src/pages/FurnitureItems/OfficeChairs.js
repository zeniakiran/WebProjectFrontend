import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import productService from "../../components/services/ProductService";
import SingleProduct from "../../components/popularItemList";
import Topbar from "../../components/topBar"
import Navbar from "../../components/navbar"
import FilterMenu from '../../components/filterMenu';
let prevItemPrice =0;
const DressingComponent =()=>{

    const [products, setProduct] = useState([]);
    const [value, setValue] = useState([0]);
    const [items, setItems] = useState([...products]);

    const getData = () => {
        productService.getFurnitureItems("Chairs")
       .then((data) => setProduct(data))
       .catch((err) => console.log("This is err"+ err));
   }
   useEffect(getData , []);

   const callbackFunc = (priceValue, prevPriceValue) =>{
        setValue(priceValue);
        prevItemPrice = prevPriceValue;
    }

    let elem = null;
    if(products.length === 0){
        elem = <h3 style = {{textAlign:"center"}}>There are currently no Furniture Products available</h3>
    }
    else if(value === 0){
        elem = (
            products.map((p, index) =>(
            <SingleProduct  key={index} product={p}/>
        )))
    }
    else if(value === 10000){
        elem= (items.map((p, index) =>(
            <SingleProduct  key={index} product={p}/>
        )));
    }
    else if(value === 40000){
        elem= (items.map((p, index) =>(
            <SingleProduct  key={index} product={p}/>
        )));
    }
    else if(value === 70000){
        elem= (items.map((p, index) =>(
            <SingleProduct  key={index} product={p}/>
        )));
    }
    else if(value === 100000){
        elem= (items.map((p, index) =>(
            <SingleProduct  key={index} product={p}/>
        )));
    }
    if( (value === 10000 || value === 40000 || value === 70000 || value === 100000) && items.length === 0){
        elem = <h3 style = {{textAlign:"center"}}>No products in the specified range</h3>
    }

    React.useEffect(() => {
        const list = products.filter(item => item.price <= value && item.price > prevItemPrice)
        setItems(list);
        console.log("Filtered",items);

    }, [value]);
    return (
        <div>
        <Topbar/>
        <Navbar/>
        <br></br><br></br>
        <FilterMenu callback={callbackFunc}/>
        <Grid container direction="row" className="grid">
            <Grid item xs={12}>
            <p id = "pg">Office Chairs</p>
            <hr id="hr2"></hr>
            <br></br><br></br>
            </Grid>
            {elem}
        </Grid>
        </div>
    );
    
}
export default DressingComponent; 
