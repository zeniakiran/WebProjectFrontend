import React from 'react';
import TopBar from '../components/topBar';
import Navbar from '../components/navbar';
//import "./MainPage.css";
import Carousel from '../components/carousel';
import picture from "../pictures/back.jpg"
import BottomIcons from "../components/bottomIcons";
import { Grid } from '@material-ui/core';
import Popular from "../components/popular"
const MainPage =()=>{
    return(
        <Grid className="mygrid">
             <TopBar/>
             <hr></hr>
             <Navbar/>
             <br></br>
             <Carousel/>
             <br></br>
             <br></br>
             <hr></hr>
             <BottomIcons/>
             <br></br>
             <hr></hr>
             <Popular/>
        </Grid>
       
    );
}

export default MainPage;