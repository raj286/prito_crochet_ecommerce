import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Prito's Crochet</h3>
          <p>Handcrafted with love and care</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: primto79@gmail.com</p>
          <p>Phone: +91 7099102729</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
            <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
            <a href="https://pinterest.com" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Pritos Crochet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 