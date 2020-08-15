import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-sm">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" id="navbtn"><i className="fa fa-bars" aria-hidden="true"></i></span>
        </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                     <Link className="nav-link a" to="/MainPage">
                          Home
                      </Link> 
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle a" to="/MainPage"
                      data-toggle="dropdown">
                          Bedroom
                      </Link> 
                      <div className="dropdown-menu">
                            <Link className="dropdown-item a" to="/Beds">Bed</Link>
                            <Link className="dropdown-item a" to="/DressingTables">Dressing</Link>
                            <Link className="dropdown-item a" to="/Wardrobes">Wardrobe</Link>
                            
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle a" to="/" 
                        data-toggle="dropdown">Living Room</Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item a" to="/Sofas">Sofa</Link>
                          <Link className="dropdown-item a" to="/Tables">Table</Link>
                          </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle a" to="/" 
                        data-toggle="dropdown">Dining</Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item a" to="/DiningTables">Dining Table</Link>
                          </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle a" to="/" 
                        data-toggle="dropdown">Office</Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item a" to="/Chairs">Office Chairs</Link>
                          </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;