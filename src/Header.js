import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
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

            {/* Dark Mode Toggle */}
            <button
  className="btn btn-outline-secondary ms-3"
  onClick={toggleDarkMode}
  style={{
    backgroundColor: darkMode ? "#000" : "#fff", // Background color changes based on mode
    color: darkMode ? "#fff" : "#000", // Text color for better visibility
    border: "none", // Optional: Remove border for a cleaner look
    padding: "10px", // Optional: Add padding for a better design
    borderRadius: "5px", // Optional: Add rounded corners
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition
  }}
>
  {darkMode ? (
    <i className="material-icons"></i> // Light Mode Icon
  ) : (
    <i className="fas fa-plus"></i> // Dark Mode Icon
  )}
</button>


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
