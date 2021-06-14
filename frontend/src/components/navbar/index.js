import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { useSelector } from "react-redux";

const NavBar = ({click}) => {
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart  <span className="cartlogo__badge"> {getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
