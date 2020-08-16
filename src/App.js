import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2'
import AdminMenuPage from "./pages/AdminMenuPage";
import BedItemsPage from "./pages/FurnitureItems/Beds"
import DiningTables from "./pages/FurnitureItems/Diningtables"
import DressingTables from "./pages/FurnitureItems/DressingTables"
import SofaItemsPage from "./pages/FurnitureItems/Sofas"
import TableItemsPage from "./pages/FurnitureItems/Tables"
import ChairItemsPage from "./pages/FurnitureItems/OfficeChairs"
import WardrobePage from "./pages/FurnitureItems/Wardrobes"
import ImageDisplay from "./components/ImgDisplay"
import SCart from "./components/Cart"
import UpdateProduct from './components/updateProduct'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import CartContextProvider from './context/CartContext'
import Login from './components/auth/login';
import Register from './components/auth/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './components/OrdersPage';
import OrderDisplay from './components/OrderDisplay';
import userService from './components/services/UserService';

function App() {
  return (
    <CartContextProvider>
    <ToastContainer />
    <Router>
      <Switch>
        <Route path="/" exact>
            <MainPage/>
        </Route>
        <Route path="/MainPage" exact>
            <MainPage/>
        </Route>
        <Route path="/Page2" exact>
        {userService.IsLoggedIn ? <Redirect to="/login" /> : <Page2 />}
        </Route>
        <Route path="/login" exact>
            <Login/>
        </Route>
        <Route path="/register" exact>
        {userService.IsLoggedIn ? <Redirect to="/login" /> : <Register />}
        </Route>
        <Route path="/orders" exact>
            <Order/>
        </Route>
        <Route path="/orderdisplay" exact>
        {userService.IsLoggedIn ? <Redirect to="/login" /> : <Page2 />}
        </Route>
        <Route path="/update/:id" render={(props) => (
        <UpdateProduct {...props} key={props.location.key} />
        )} exact>
        </Route>
        <Route path="/Beds" exact>
            <BedItemsPage/>
        </Route>
        <Route path="/DiningTables" exact>
            <DiningTables/>
        </Route>
        <Route path="/DressingTables" exact>
            <DressingTables/>
        </Route>
        <Route path="/Chairs" exact>
            <ChairItemsPage/>
        </Route>
        <Route path="/Tables" exact>
            <TableItemsPage/>
        </Route>
        <Route path="/Sofas" exact>
            <SofaItemsPage/>
        </Route>
        <Route path="/Wardrobes" exact>
            <WardrobePage/>
        </Route>
        <Route path="/image/:id" render={(props) => (
        <ImageDisplay {...props} key={props.location.key} />
        )} exact>
        </Route>
        <Route path="/cart" render={(props) => (
        <SCart {...props} key={props.location.key} />
        )} exact>
        </Route>
        <Route>
            <MainPage/>
        </Route>
      </Switch>
    </Router>
    </CartContextProvider>
  );
}

export default App;
