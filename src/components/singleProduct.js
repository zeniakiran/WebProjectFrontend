import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import picture from "../../src/pictures/bacground1.jpg";
import { CardActionArea, Grid,Fab, Snackbar } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import productService from './services/ProductService';
import Alert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router';

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

const SingleProduct = ({product, onDelete,history})=>{
    useEffect(()=>{
        console.log("In Single Prod")
    },[product]);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [elem, setElem] = React.useState(null);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const deleteProductHandler = () =>{
        productService.deleteItem(product._id).then((data)=>{
            setElem(
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  This is a success message!
                </Alert>
              </Snackbar>)
              onDelete();
        }).catch((err) => console.log(err));    
    }
    const editProductHandler =() =>{
        history.push('/update/'+product._id);
    }
    return (
    <div className={classes.diV}>
        
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.imgUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Price: 
                    {product.price}
                    </Typography>
                </CardContent>
                
            </CardActionArea>
        </Card> 
        <Fab color="secondary" aria-label="add" className={classes.icon}>
            <DeleteIcon onClick = {deleteProductHandler}/>
        </Fab>
        <Fab color="primary" aria-label="add" className={classes.icon}>
            <EditIcon onClick = {editProductHandler}/>
        </Fab> 
        {elem}
        <hr></hr>
    </div>   
);              
}

export default withRouter(SingleProduct);