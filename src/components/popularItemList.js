import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Grid,Fab, Button } from '@material-ui/core';
import "./popular.css"
import { Link } from 'react-router-dom';
import ImageDisplay from "./ImageDisplay"
import {useHistory } from 'react-router-dom';

let elem;

const useStyles = makeStyles((theme) => ({
    
    typoFont:{
        textAlign:"center",
        fontFamily: "serif",
        fontSize: "16px"
    },
    
  }));

const SingleProduct = (props)=>{
    useEffect(()=>{
        console.log("In Single Prod")
    },[props.product]);
    const classes = useStyles();
    const [value, setValue] = React.useState("");
    let history = useHistory();
    const displayImageHandler = (e) =>{
        /*let img = e.target.src;
        let name = e.target.nextSibling.innerHTML;
        let price = e.target.nextSibling.nextSibling.innerHTML;
        localStorage.setItem("imgUrl",img);
        localStorage.setItem("name",name);
        localStorage.setItem("price",price);*/
        //window.open("/image", "_blank") 
        /*Object.keys(props.product).find((data)=>{
            return (console.log(data.price === price))
        });*/
        
         history.push("/image/"+ props.product._id);   
        
        
    }
    
    return (
    <Grid className="diV">
        <Grid item xs ={6}>
        <Card className="root">
            <CardActionArea>
                <CardContent>
                <img src={props.product.imgUrl} alt="" className="media" />
                    <Typography component="h4" className={classes.typoFont}>
                        {props.product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" 
                     className={classes.typoFont}>Price: 
                    {props.product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card> 
        </Grid>
        <br></br>
        <Grid item xs={3}id="viewgrid">
        <Button variant="contained" color="secondary" id="viewbtn"
         onClick={displayImageHandler}>View</Button>
        </Grid>
        
        <hr></hr>
         
    </Grid>   
);              
}

export default SingleProduct;