import "./App.css";
import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import NavBar from "./components/navbar";
import BackDrop from "./components/backdrop";
import SideDrawer from "./components/sideDrawer";


function App() {
  const [sideToggle, setSideToggle]=useState(false)
  return (
    <Router>
      <NavBar click={()=>setSideToggle(true)} />
      {/* Navbar */}
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      {/*Backdrop */}
    <BackDrop show={sideToggle} click={()=>setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
