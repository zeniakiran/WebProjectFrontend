import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import orderService from './services/OrderService';
import { toast } from 'react-toastify';
import SingleOrder from './SingleOrder';


const OrderDisplay = () =>{
    const [orders, setOrders] = useState(['']);

    const getData = () => {
        orderService.getItem()
       .then((data) => setOrders(data))
       .catch((err) => {
            toast.error("Error!", {
            position: toast.POSITION.TOP_LEFT,
          });
       });
   }
   useEffect(getData , []);
        let elem = null;
        if(orders.length === 0){
           elem = <h3 style = {{textAlign:"center"}}>There are currently no Orders to display</h3>
        }
        else if(orders.length > 0){
            elem = (
                    orders.map((order, index) =>(
                    <SingleOrder  key={index} orders={order} onDelete={getData}/>
            )))
            console.log(" or",orders)
        }
    return(
        <Grid container spacing={2}>
        {elem}
        </Grid>
    );
}

export default OrderDisplay;