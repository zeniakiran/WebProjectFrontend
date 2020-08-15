import React, {useState,useEffect} from 'react';
import { Grid, CardActionArea, Button, Card, CardMedia, 
        CardContent, Typography, CardActions, makeStyles } from 
        '@material-ui/core';
import productService from "../components/services/ProductService";
import SingleProduct from "./popularItemList";
import "./popular.css"

const Popular = () =>{
    const [products, setProduct] = useState([]);

    const getData = () => {
        productService.getPopularItems()
       .then((data) => setProduct(data))
       .catch((err) => console.log("This is err"+ err));
   }
   useEffect(getData , []);
   let elem = null;
        if(products.length === 0){
           elem = <h3 style = {{textAlign:"center"}}>There are currently no Furniture Products available</h3>
        }
        else{
            elem = (
                    products.map((p, index) =>(
                    <SingleProduct  key={index} product={p}/>
            )))
        }
    return (
        <Grid container direction="row" className="grid">
            <Grid item xs={12}>
            <p id = "pg">New Arrivals</p>
            <hr id="hr2"></hr>
            <br></br><br></br>
            </Grid>
            {elem}
        </Grid>
    );
}

export default Popular ;