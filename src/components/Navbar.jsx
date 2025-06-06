import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">Reviewly</NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? 'nav-active' : ''}
          >
            Blog
          </NavLink>
        </div>

        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
