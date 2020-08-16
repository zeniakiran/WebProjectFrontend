import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../services/UserService";
import "./login.css"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "100%",
    marginLeft: "100px",
    marginTop: "40px",
  },
  butn:{
    top:20,
    left: 20
  }
}));
const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("zeniakiran50@gmail.com");
  const [password, setPassword] = React.useState("zk1234567");
  return (
    <body id="bigdiv">
    <Link to="/"><Button variant="contained" 
     className ={classes.butn}>Home</Button></Link>
    <div className = "containerlogin" >
    <i className="fa fa-user usericon" aria-hidden="true"></i>
      <div className={classes.child}>
      <input type="email" class="form-control" placeholder="Email" 
         className="tf" value ={email} onChange={(e) => {
          setEmail(e.target.value);
          }}></input>
        <br />
        <input type="password" class="form-control" placeholder="Password" 
         className="tf1" value ={password} onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
        <br />
        
      </div>
      <Button id="btnlogin"
          variant="contained"
          
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/page2";
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Login
        </Button>
    </div>
    </body>
  );
};

export default Login;