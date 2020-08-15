import React, {useState} from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import productService from './services/ProductService';


const [type, setType] = useState("");
const [name, setName] = useState("");
const [price, setPrice] = useState();
const [imgUrl, setImgUrl]= useState('');
const NewItem = (props) =>{


        const typeChangeHandler = (event) =>{
            setType(event.target.value);
        }

        const nameChangeHandler = (event) =>{
            setName(event.target.value);
        }

        const priceChangeHandler = (event) =>{
            setPrice(event.target.value);
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
        <TextField required  label="Item Name" onChange={nameChangeHandler}/><br></br>
        <TextField required  label=" ItemPrice" onChange={priceChangeHandler}/>
        </Grid>
    );
}
export default NewItem