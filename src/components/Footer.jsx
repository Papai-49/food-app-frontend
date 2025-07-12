import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section company">
        <h2>FoodShop</h2>
        <p>Delicious food at your doorstep.</p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Contact</h3>
        <p>Email: support@foodshop.com</p>
        <p>Phone: ‪+91 98765 43210‬</p>
        <p>📍 Kolkata, India</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodShop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;