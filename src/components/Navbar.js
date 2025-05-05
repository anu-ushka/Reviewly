import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Reviewly</Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
