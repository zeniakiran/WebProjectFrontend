import React from 'react';
import { Link } from 'react-router-dom';
import picture from "../pictures/background.jpg";
import picture1 from "../pictures/c_sofa.jpg";
import picture2 from "../pictures/c_bed.jpg";
import "./carousel.css"
const Carousel = () =>{
    return (
        <div className="carousel slide" data-ride="carousel" id ="mycarousel">
            <ul className="carousel-indicators">
                <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
                <li data-target="#mycarousel" data-slide-to="1"></li>
                <li data-target="#mycarousel" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="image-fluid im" src={picture} alt="logo"></img>
                </div>
                <div className="carousel-item">
                    <img className="image-fluid im" src={picture2} alt="logo"></img>
                </div>
                <div className="carousel-item">
                    <img className="image-fluid im" src={picture1} alt="logo"></img>
                </div>

                <a className="carousel-control-prev" href="#mycarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#mycarousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}
export default Carousel;