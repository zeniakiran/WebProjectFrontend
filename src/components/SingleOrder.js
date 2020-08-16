import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import picture from "../../src/pictures/bacground1.jpg";
import { CardActionArea, Grid,Fab, Snackbar, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import productService from './services/ProductService';
import Alert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router';
import orderService from './services/OrderService';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 220,
    },
    media: {
        height: 200,
      },
    icon: {
        height : 10,
        width : 40 ,
        left: 150
    },
    diV:{
        padding: 10
    }
   
  }));

const SingleOrder = (props)=>{
    useEffect(()=>{
        console.log("In Single Prod")
    },[props.orders]);
    const classes = useStyles();
    console.log(" Orders",props)
    const deleteProductHandler = () =>{
        orderService.deleteItem(props.orders._id).then((data)=>{
              props.onDelete();
        }).catch((err) => console.log(err));    
    }
    /*const editProductHandler =() =>{
        history.push('/update/'+product._id);
    }*/
    return (
    <div className={classes.diV}>

            <Typography variant="body2" component="p">First Name : 
                {props.orders.customerFName}
            </Typography>
            <Typography variant="body2" component="p">Last Name : 
                {props.orders.customerLName}
            </Typography>
            <Typography variant="body2" component="p">Email :
                {props.orders.customerEmail}
            </Typography>
            <Typography variant="body2" component="p">Address : 
                {props.orders.customerAddress}
            </Typography>
            <Typography variant="body2" component="p">Country :
                {props.orders.customerCountry}
            </Typography>
            <Typography variant="body2"  component="p">Ordered Products: 
                {props.orders.productsOrdered+", "}
            </Typography>
            <Typography variant="body2" component="p">Phone No :
                {props.orders.Phone}
            </Typography>
            <Typography variant="body2" component="p">Total Price : 
                {props.orders.totalPrice}
            </Typography>
            <br />
        <Button variant = "contained" color="secondary"
         onClick = {deleteProductHandler}>
            Delete
        </Button>
        <hr></hr>
    </div>   
);              
}

export default withRouter(SingleOrder);