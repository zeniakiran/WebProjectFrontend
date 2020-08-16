import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Snackbar } from "@material-ui/core";
//import userService from "../services/UserService";
import "./auth/login.css"
import "./OrdersPage.css"
import { toast } from "react-toastify";
import { Alert } from "react-bootstrap";
import orderService from "./services/OrderService";
import { CartContext } from "../context/CartContext";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "200px",
    marginLeft: "200px",
    marginTop: "140px",
  },
  
}));
const Order = (props) => {
  const classes = useStyles();
  const {cartItems} = useContext(CartContext);
  //const {totalPrice1} = useContext(CartContext);
  const [customerEmail, setEmail] = React.useState("zeniakiran50@gmail.com");
  const [customerFName, setFname] = useState('Zenia')
  const [customerLName, setLname] = useState('Kiran')
  const [customerAddress, setAddress] = useState('Lahore Press Club')
  const [customerCountry, setCountry] = useState('Pakistan');
  const [productsOrdered, setproductsOrdered] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [Phone, setPhone] = useState(0);
  let arr=[];
  let totalPrice1=0;
  //let productsOrdered = "Bed"+","+"Sofa";
  //let totalPrice = 100000
  const [open, setOpen] = React.useState(false);
  
  useEffect(()=>{
    for(var i =0; i<cartItems.length; i++){
        productsOrdered[i]=cartItems[i].item;
        totalPrice1 = totalPrice1 + (cartItems[i].quantity * cartItems[i].price);
    }
    setproductsOrdered(productsOrdered);
    setTotalPrice(totalPrice1)
    console.log(totalPrice)
  },[])

  const placeOrderHandler = () =>{
       if(customerEmail === "" || customerFName === "" || customerLName === "" || 
         customerAddress === "" || customerCountry === ""){
        toast.error("All fields are required!", {
            position: toast.POSITION.TOP_LEFT,
          });
      } 
      else if(customerEmail.length <10){
        toast.error("Length of Email should be greater or equal to 10!", {
            position: toast.POSITION.TOP_LEFT,
          });
      }
      else if(customerFName.length < 3 || customerLName.length< 3 || customerAddress.length< 3 
             || customerCountry.length<3){
        toast.error("Length should be greater or equal to 3!", {
            position: toast.POSITION.TOP_LEFT,
          });
      }
      else if(Phone.length !== 11){
        toast.error("Length of Conatact should be equal to 11!", {
            position: toast.POSITION.TOP_LEFT,
          });
      }
      else{
          orderService.addItem({customerFName,customerLName,customerEmail,customerAddress,
            customerCountry,productsOrdered, Phone, totalPrice})
          .then((data) =>{
                console.log(data);
          }).catch((err)=>{
              console.log(err);
          })
          localStorage.removeItem('itemsArray');
          toast.success("Order placed successfully!", {
            position: toast.POSITION.TOP_LEFT,
          });
      }
  }

  return (
    <div>
    <br /><br />
      <p id="pg">Fill Info</p>
      <hr id="hr1"></hr>
      <div className="child">
      <TextField label="First Name"
          value ={customerFName} onChange={(e) => {
          setFname(e.target.value);
          }}></TextField>
        <br /><br />
        <TextField label="Last Name"
         value ={customerLName} onChange={(e) => {
          setLname(e.target.value);
          }}></TextField>
        <br /><br />
      <TextField label="Email"
         type="email" value ={customerEmail} onChange={(e) => {
          setEmail(e.target.value);
          }}></TextField>
        <br /><br />
        <TextField label="Address" 
         value ={customerAddress} onChange={(e) => {
            setAddress(e.target.value);
          }}></TextField>
        <br /><br />
        <TextField label="Country" 
          value ={customerCountry} onChange={(e) => {
            setCountry(e.target.value);
          }}></TextField>
        <br /><br />
        <TextField label="Contact No" 
         value ={Phone} onChange={(e) => {
            setPhone(e.target.value);
          }}></TextField>
        <br /><br />
      </div>
      <br /><br /><hr></hr>
      <input id ="radio" type="radio"/>
      <span id="cash">Cash On Delivery</span>
      <br /><br /><br />
      <Button id="order"
          variant="contained"
          color =  "secondary"
          onClick={placeOrderHandler}
        >
          Place Order
        </Button>
    </div>
  );
};

export default Order;