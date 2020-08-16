import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
class UserService extends GenericService{
    login = (email, password) => new Promise ((resolve,reject)=>{
        this.post('users/login', {email, password})
        .then(token =>{
            localStorage.setItem("token",token);
            resolve();
        })
        .catch(err => {
            reject()
        })
    });
    register = (name,email, password) =>this.post('users/register', {name,email,password})
    logout = () => localStorage.removeItem("token");
    isLoggedIn = () => {
      try{
        return localStorage.getItem("token") ? true : false;
      }
      catch(err){
        toast.error("Error!", {
          position: toast.POSITION.TOP_LEFT,
        });
      };
        
      };
      getLoggedInUser = () => {
        try {
          const jwt = localStorage.getItem("token");
          return jwtDecode(jwt);
        } catch (ex) {
          return null;
        }
      };
      isAdmin = () => {
        if (this.isLoggedIn()) {
          if (this.getLoggedInUser().role === "admin") return true;
          else return false;
        } else return false;
      };
    }
    

let userService = new UserService();
export default userService;