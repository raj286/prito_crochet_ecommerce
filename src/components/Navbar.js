import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <h1>Prito's Crochet</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="navbar-cart">
            <button className="cart-button" onClick={onCartClick}>
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 