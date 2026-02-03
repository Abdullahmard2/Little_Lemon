import '../style/base.css';
import React from 'react';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/booking">Reservations</Link>
        </li>

        <li>
          <Link to="/order-online">Order Online</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact us</Link>
        </li>

        <li>
          <button className="nav-button">Login</button>
        </li>

        <li className="login-cart">
          <Link to="/cart">
            <FaShoppingCart className="cart-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
