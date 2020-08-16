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
            <br /><br />
            <Grid item xs={12}>
            <br></br><br></br><hr></hr>
                <p id ="pg">About Us</p>
                <div id="abt">
                <br></br>
                <p id="aboutdiv">Our Funiture brand DECOR that has been in operation for over 10 years. 
                We deliver a wide range of high-quality furniture and home accessory items for 
                all forms of modern life. With a commitment to delivering high quality furniture and home accessories, DECOR 
                answers all modern lifestyle’s with function and designing all categories of living. </p>
                <br></br>
                </div>
                <br></br>
            </Grid>
        </Grid>
    );
}

export default Popular ;