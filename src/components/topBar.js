import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import logo from "../pictures/logo.jpg"
//import Cart  from "./Cart";
import "./topBar.css";

const products = ["Bed","Dressing","Sofa","Wardrobe","Dining", "Table","OfficeChairs"];
const TopBar =()=>{
    const [input,setInput]= useState("");
    const [users, setUsers]=useState([]);
    const [show,setShow]= useState(false);
    let history = useHistory();
    const  onChangeHandler =(event)=>{
      setInput(
         event.target.value
      )};
      let comp = null;
    const liClick = (e) =>{
      console.log(e.target.innerHTML);
      
      if(e.target.innerHTML === "Bed"){
        history.push("/beds")
      }
      if(e.target.innerHTML === "Dressing"){
         history.push("/dressingtables")
      }
      if(e.target.innerHTML === "Sofa"){
        history.push("/sofas")
      }
      if(e.target.innerHTML === "Wardrobe"){
        history.push("/Wardrobes")
      }
      if(e.target.innerHTML === "Dining"){
        history.push("/DiningTables")
      }
      if(e.target.innerHTML === "Table"){
        history.push("/Tables")
      }
      if(e.target.innerHTML === "OfficeChairs"){
        history.push("/Chairs")
      }
    }
    const cartHandler = () =>{
      setShow(!show)
    };

    let cart = null;
    if(show){
            /*cart = (
            <Cart/>
        )*/
        console.log("cart");
      }
      else{
        cart = null;
      }

    useEffect(() => {
        const list = products.filter(d => d.toLowerCase().startsWith(input));
        setUsers(list);
    }, [input]);


    return (
        <div className="d-flex">
            <div id="labelDiv">
                <label className="fnt">D</label>
                <label className="red fnt">E</label>
                <label className="fnt">C</label>
                <label className="red fnt">O</label>
                <label className="fnt">R</label>
                
            </div>
           
            <div id="iconDiv">
                <span id="phoneNo"><i className="fa fa-phone" id="phone" aria-hidden="true"></i>+92(0)42-111-222-333</span>
                
            </div>

            <div id ="searchdiv">
                <input type="text" className="form-control" id="text" placeholder="  Search..." onChange={onChangeHandler}></input>
                <i className="fa fa-search" id="searchIcon"></i>
                {input.length > 0 ? (
                <ul id="list"> 
                    {users.map(item => <li id="myLi" onClick={liClick}>{item}</li>)}
                    {comp}
                </ul>
                ) : null }
                
            </div>
            <div id= "icnDiv">
            <span id="reg"><Link to="/login"><i className="fa fa-user" aria-hidden="true"></i></Link></span>
             <Link to="/cart">
               <span className ="cartIcon">&nbsp;
                    <i className="fa fa-shopping-cart" id="pop" aria-hidden="true"></i>   
              </span>
              </Link>
              {cart}
            </div>
        </div>
        
    );
}

export default TopBar;