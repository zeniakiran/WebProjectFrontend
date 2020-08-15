import React from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 150,
    }
  }));
const AdminMenu = () =>{
    const classes = useStyles();
    return (
        <div>
            <Select className = {classes.root}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <MenuItem >Bed</MenuItem>
                <MenuItem >Dining</MenuItem>
                <MenuItem >Sofa</MenuItem>
            </Select>
        </div>
    );
}

export default AdminMenu;