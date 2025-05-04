import '../style/base.css';
import React from 'react';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        
        <li><a href="#">Menu</a></li>
        <li><a href="/booking">Reservations</a></li>
        <li><a href="/#Order Online">Order Online</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/contact">Contact us</a></li>
        <li><a href="#">Login</a></li>
        <li className="login-cart">
          <a href ="#"><FaShoppingCart className="cart-icon" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;