import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../services/UserService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
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
    top:40,
    left: 40
  }
}));
const Register = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  let history = useHistory();
  return (
    
    <div id="bigdiv">
    <div className= "containerlogin">
      <div className={classes.child}>
        <input
          class="form-control" placeholder="Name"
          value={name}
          className="tf"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          class="form-control" 
          placeholder="Email"
          value={email}
          className="tf1"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password" class="form-control" 
          placeholder="Password" 
          className="tf1"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          className = {classes.butn}
          onClick={(e) => {
            userService
              .register(name, email, password)
              .then((data) => {
                toast.success("Admin Registered Successfully!", {
                  position: toast.POSITION.TOP_LEFT,
                });
                console.log(data);
                history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error("Error!", {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Register
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Register;