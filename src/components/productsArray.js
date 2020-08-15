import React,{ useState, useEffect }  from 'react';
import SingleProduct from './singleProduct';
import { Grid, Button, Dialog, DialogTitle, DialogContent, 
DialogActions, TextField, Select, InputLabel, MenuItem, 
FormControl,
Snackbar,
Backdrop} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import productService from './services/ProductService';
import "./productsArray.css";
import { Alert } from 'react-bootstrap';
import userService from './services/UserService';
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    btn: {
      position: "absolute",
      top: 18,
      right:40,
      width: 20
    },
    btn1: {
        position: "absolute",
        top: 18,
        right:130,
        width: 100
      },
      lbl: {
        position: "absolute",
        top: 18,
        right:300,
        width: 50,
        fontSize: "20px",
        fontWeight: "bold"
      },
    width:{
        width: 400,
    },
    textwidth:{
        width: 250
    },
    root: {
        width: 150,
    },
    select:{
        width: 100
    }
  }));
        const Products = ()=>{
        const classes = useStyles();
        const [products, setProduct] = useState([]); 
        const [open, setOpen] = useState(false);
        ////const [name, setName] = useState("");
        //const [price, setPrice] = useState();
        const [option,setOption]=useState('Beds');
        const [optionArray,setOptionArray]=useState([...products]);
        const [imgUrl, setImgUrl]= useState('');
        const [type, setType] = useState('');
        const [loading,setLoading] = useState(true);
        let name="";
        let price=0;
        let history = useHistory();
        //let type='';
        
        const openOnClickHandler = () => {
            setOpen(true);
        };

        const closeOnClickHandler = () => {
            setOpen(false);
        };
  
  
        const nameChangeHandler = (event) =>{
            name=event.target.value;
            console.log(name);
        }
  
        const priceChangeHandler = (event) =>{
            price=event.target.value;
            console.log(price);
        }

        const optionSelectHandler = (event) =>{
            setOption(event.target.value);
        }
          console.log("Products", products)
          
          const addClickHandler = () =>{
              productService.addItem({type,name,price,imgUrl})
              .then((data)=>{
                  console.log("Added successfully",products);
                  getData();
                  setOpen(false);
                })
              .catch((err)=>{console.log("Some Err")})
          }
          

          const selectHandler = (event)=>{
             setType(event.target.value);
          }

          const ImageUploadHandler = async e =>{
              if(loading===true){
                toast.info("Loading Image", {
                    position: toast.POSITION.TOP_CENTER
                  });
              }
            const files = e.target.files;
            const data = new FormData();
            data.append('file',files[0]);
            data.append('upload_preset','uploads');
            const res = await fetch('https://api.cloudinary.com/v1_1/dwgjk4wn6/image/upload',
            {
                method : 'POST',
                body : data
            })
            toast.dismiss();
            const file = await res.json();
            const secureUrl = file.secure_url;
            setImgUrl(secureUrl);
            setLoading(!loading);
            if(loading===true){
                toast.success("Image Loaded", {
                    position: toast.POSITION.TOP_CENTER
                  });
              }
            console.log(loading)
            setLoading(!loading);
            console.log("File ",file);
            toast.dismiss();
          }
          

          const getData = () => {
             productService.getItem()
            .then((data) => setProduct(data))
            .catch((err) => console.log("This is err"+ err));
        }

        const logoutHandler = () =>{
            userService.logout();
            history.push('/login');
        }
        
        let elem = null;
        if(products.length === 0){
           elem = <h3 style = {{textAlign:"center"}}>There are currently no Furniture Products available</h3>
        }
        else if(optionArray.length === 0){
            elem = (
                    products.map((p, index) =>(
                    <SingleProduct  key={index} product={p} onDelete={getData}/>
            )))
        }
        else{
            elem = (
                    optionArray.map((p, index) =>(
                    <SingleProduct  key={index} product={p} onDelete={getData}/>
            )))
        }
        useEffect(getData , []);
        useEffect(() => {
            const list = products.filter(op => op.type === option);
            setOptionArray(list);
        }, [option]);
        
        return (
        <div>
        <br></br>
            <Grid container spacing ={4}>
            <Grid item xs={3}>
                    <select id="dropdown" onChange={optionSelectHandler}>
                        <option>Beds</option> 
                        <option>Dressing</option>
                        <option>DiningTable</option>
                        <option>Sofa</option>
                    </select>
            </Grid>
            {console.log(" name" ,userService.getLoggedInUser.name)}
                <Grid item xs ={12}>
                    <Button variant="contained" color="primary" className = {classes.btn} 
                     onClick={openOnClickHandler}>
                        Add
                    </Button>
                    <Button onClick={logoutHandler} variant="contained" 
                     className = {classes.btn1} color="secondary">
                        Log Out
                    </Button>
                    <label className = {classes.lbl}>{userService.getLoggedInUser().name}</label>
                    <Dialog open={open} onClose={closeOnClickHandler} aria-labelledby="form-dialog-title" >
                    <Backdrop className={classes.backdrop} open={open} onClick={closeOnClickHandler}>
                    </Backdrop>
                    <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
                    <DialogContent>
                    <Grid className = {classes.width}>
                    <select onChange = {selectHandler}>
                        <option>Beds</option>
                        <option>DiningTable</option>
                        <option>Dressing</option>
                        <option>OfficeChair</option>
                        <option>Table</option>
                        <option>Sofa</option>
                        <option>Wardrobe</option>
                    </select>
                    <hr></hr>
                    <input 
                    type = "file"
                    name = "file"
                    placeholder="Upload Image"
                    onChange = {ImageUploadHandler}
                    >
                    </input><br></br>
                    <TextField required  label="Item Name" className={classes.textwidth} 
                     onChange={nameChangeHandler}/><br></br>
                    <TextField required  label=" ItemPrice" className={classes.textwidth} 
                     onChange={priceChangeHandler}/>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeOnClickHandler} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addClickHandler.bind(this)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
                </Grid>
            </Grid>
            <br></br><br></br><br></br>
            <Grid container spacing={2}>
                    {elem}
            </Grid>
            
        </div>
        );        
}

export default Products;