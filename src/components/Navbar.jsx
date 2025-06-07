import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">Reviewly</NavLink>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
        </div>

        <div className="auth-buttons">
          <NavLink to="/login" className="login">Login</NavLink>
          <NavLink to="/signup" className="signup">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
