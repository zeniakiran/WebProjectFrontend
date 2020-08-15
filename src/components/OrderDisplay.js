import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import orderService from './services/OrderService';
import { toast } from 'react-toastify';


const OrderDisplay = () =>{
    const [orders, setOrders] = useState(['']);
    useEffect (()=>{
        orderService.getItem()
        .then((data)=>{
            console.log(data)
            setOrders(data);
        })
        .catch((err)=>{
            toast.error("Error!", {
                position: toast.POSITION.TOP_LEFT,
              });
        })
    },[])
    return(
        <Grid container spacing={2}>
    
        </Grid>
    );
}

export default OrderDisplay;