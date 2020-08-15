import React from 'react';
import { Link } from 'react-router-dom';
import picture from "../pictures/back1.jpg";
import picture1 from "../pictures/back2.jpg";
import picture2 from "../pictures/back3.jpg";
import picture3 from "../pictures/back5.jpg";
import "./carousell.css"
import { Grid } from '@material-ui/core';
const Carousel = () =>{

    const imgHandler = (e) =>{
        let wideImg = document.getElementById("backgroundImg");
        let img = e.target.src;
        wideImg.src = img;
        wideImg.parentElement.style.maxWidth= "700px";
        wideImg.parentElement.style.maxHeight= "700px";
        console.log(wideImg);
    }
    return (
        <Grid container spacing={3} id="grd">
            <Grid container direction="column" >
                <ul id="mySidenav">
                    <li id="li">Shop All Categories<hr className="hr"></hr></li>
                    <li className="links"><Link className="l" to="/Beds">Beds</Link><hr className="hr"></hr></li>
                    <li className="links"><Link className="l" to="/Wardrobes">Closets</Link><hr className="hr"></hr></li>
                    <li className="links"><Link className="l" to="/DressingTables">Mirrors</Link><hr className="hr"></hr></li>
                    <li className="links"><Link className="l"to="/Sofas">Couches</Link><hr className="hr"></hr></li>
                    <li className="links"><Link className="l"to="/Tables">Coffee Tables</Link><hr className="hr"></hr></li>
                    <li className="links"><Link className="l" to="/DiningTables">Dining Tables</Link><hr className="hr"></hr></li>
                    <li className="links"><Link className="l"to="/Chairs">Office Chairs</Link><hr className="hr"></hr></li>
                </ul>
            </Grid>
            <Grid id="grd2">
                <img src={picture} alt="" id="backgroundImg"></img>
            </Grid>
            <Grid container direction="column" id="grd1">
                <Grid item xs={3}><img src={picture1} alt="" className="img" onClick={imgHandler}></img></Grid>
                <Grid item xs={3}><img src={picture3} alt="" className="img" onClick={imgHandler}></img></Grid>
                <Grid item xs={3}><img src={picture2} alt="" className="img" onClick={imgHandler}></img></Grid>
                <Grid item xs={3}><img src={picture}  alt="" className="img" onClick={imgHandler}></img></Grid>
                <Grid item xs={4}></Grid>
            </Grid>

        </Grid>
    )
}
export default Carousel;