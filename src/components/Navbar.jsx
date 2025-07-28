import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">Reviewly</NavLink>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>

          <div className="auth-buttons mobile-auth">
            <NavLink to="/login" className="login">Login</NavLink>
            <NavLink to="/signup" className="signup">Sign Up</NavLink>
          </div>
        </div>

        <div className="auth-buttons desktop-auth">
          <NavLink to="/login" className="login">Login</NavLink>
          <NavLink to="/signup" className="signup">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
