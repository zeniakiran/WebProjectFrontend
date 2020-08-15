import React, { useState, useEffect } from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent, 
    DialogActions, TextField,Snackbar,Backdrop,
    makeStyles} from '@material-ui/core';
import productService from './services/ProductService';
import { withRouter, useHistory } from 'react-router-dom';

    const useStyles = makeStyles((theme) => ({
        btn: {
          position: "absolute",
          top: 10,
          right:40,
          width: 20
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
const UpdateProduct = (props) =>{
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [imgUrl, setImgUrl]= useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    //let price=0;
    let id = props.match.params.id;
    let history = useHistory();
    useEffect(() =>{
        productService.getItemById(id).then((data)=> {
            setName(data.name)
            setType(data.type)
            setPrice(data.price)
            setImgUrl(data.imgUrl)
            console.log("single " ,data.imgUrl);
        })
        .catch((err) => console.log("This is err"+ err));
        
    }, [])
    const updateClickHandler = () =>{
        productService.updateItem({type,name,price,imgUrl},id)
        .then((data)=>{
            console.log("Added successfully",data);
            setOpen(false);
            history.push('/page2');
          })
        .catch((err)=>{console.log("Some Err")})
    }
    const openOnClickHandler = () => {
        setOpen(true);
      };

        const closeOnClickHandler = () => {
            setOpen(false);
            history.push('/page2');
        };


        const nameChangeHandler = (event) =>{
            setName(event.target.value);
            console.log(name);
        }

        const priceChangeHandler = (event) =>{
            setPrice(event.target.value);
            console.log(price);
        }

        const selectHandler = (event)=>{
            setType(event.target.value);
         }

         const ImageUploadHandler = async e =>{
           const files = e.target.files;
           const data = new FormData();
           data.append('file',files[0]);
           data.append('upload_preset','uploads');
           const res = await fetch('https://api.cloudinary.com/v1_1/dwgjk4wn6/image/upload',
           {
               method : 'POST',
               body : data
           })
           const file = await res.json();
           const secureUrl = file.secure_url;
           setImgUrl(secureUrl);
           console.log("File ",file);
         }
    return (
        <Grid>
            <Dialog open={open} onClose={closeOnClickHandler} aria-labelledby="form-dialog-title" >
            <Backdrop className={classes.backdrop} open={open} onClick={closeOnClickHandler}>
            </Backdrop>
            <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
                <DialogContent>
                <Grid className = {classes.width}>
                    <select onChange = {selectHandler} value={type}>
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
                     value = {name} onChange={nameChangeHandler}/><br></br>
                    <TextField required  label=" ItemPrice" className={classes.textwidth} 
                     value = {price} onChange={priceChangeHandler}/>
                </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeOnClickHandler} color="primary">
                        Cancel
                    </Button>
                    <Button  color="primary" onClick ={updateClickHandler}>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default withRouter(UpdateProduct);