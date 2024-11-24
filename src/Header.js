import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Sync dark mode with localStorage to persist between page reloads
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
      document.querySelector('.header').classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.querySelector('.header').classList.remove('dark-mode');
    }
  }, []);

  // Toggle dark mode on button click
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode); // Store the mode in localStorage
    if (newMode) {
      document.body.classList.add('dark-mode');
      document.querySelector('.header').classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.querySelector('.header').classList.remove('dark-mode');
    }
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            My Website
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
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Sign In and Sign Up Buttons */}
            <div className="ms-3">
              {/* <Link to="/signin"> */}
                <button className="btn btn-primary me-2">Sign In</button>
              {/* </Link> */}
              {/* <Link to="/signup"> */}
                <button className="btn btn-secondary">Sign Up</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
