import '../style/base.css';

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
        </ul>
      </div>
      <ul>
        <h4>Contact</h4>
        <li>123 Main St, Chicago, IL</li>
        <li>(555) 555-5555</li>
      </ul>
      <ul>
        <h4>Social Media</h4>
        <li>Instagram</li>
        <li>Facebook</li>
      </ul>
    </footer>
  );
}

export default Footer;