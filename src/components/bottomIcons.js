import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import "./bottomIcons.css"
import dining from "../pictures/diningIcon.png"
import wardrobe from "../pictures/wardrobeIcon.jpg"
import dressing from "../pictures/dressingIcon.png"
const BottomIcons = () =>{
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <p id = "paragraph">Explore Our Range Of Furniture</p>
                <hr id="hr1"></hr>
                <br></br>
            </Grid>
            <Grid item xs={3} id="divIcon">
                    <span className="span">
                        <i className="fas fa-couch icons"></i>
                        <Link className="spanItem" to="Sofas">Couch</Link>
                    </span>
                    <span className="span">
                        <i className="fas fa-bed icons"></i>
                        <Link className="spanItem" to ="/Beds">Bed</Link>
                    </span>
                    <span className="span">
                        <img className="pictureIcons span" src={dining} alt=""></img>
                        <Link className="spanItem" to="DiningTables">Dining Table</Link>
                    </span>
                    <span className="span">
                        <img className="pictureIcon span" src={wardrobe} alt=""></img>
                        <Link className="spanItem" to="Wardrobes">Wardrobe</Link>
                    </span>
                    <span className="span">
                        <img className="pictureIcon span" src={dressing} alt=""></img>
                        <Link className="spanItem" to="DressingTables">Dressing</Link>
                    </span>
            </Grid>
            
        </Grid>
    );
}

export default BottomIcons ;