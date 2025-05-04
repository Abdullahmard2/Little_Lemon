import '../style/base.css';
import React from 'react';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
        <li className="login-cart">
          <a href ="#"><FaShoppingCart className="cart-icon" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;