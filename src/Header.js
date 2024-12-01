import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  // Set Dark Mode by default
  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="brand">My Spotify</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Sign In and Sign Up Buttons */}
            <div className="ms-3">
              <button className="btn btn-primary me-2">Sign In</button>
              <button className="btn btn-secondary">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
