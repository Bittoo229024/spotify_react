import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/for-the-record">For the Record</a></li>
              <li><a href="/communities">Communities</a></li>
            </ul>
          </div>

          {/* For Artists Section */}
          <div className="col-md-3">
            <h5>For Artists</h5>
            <ul className="list-unstyled">
              <li><a href="/artists">Developers</a></li>
              <li><a href="/artists">Advertising</a></li>
              <li><a href="/artists">Investors</a></li>
              <li><a href="/artists">Vendors</a></li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/support">Support</a></li>
              <li><a href="/mobile-app">Free Mobile App</a></li>
              <li><a href="/spotify-plans">Spotify Plans</a></li>
            </ul>
          </div>

          {/* Spotify Plans Section */}
          <div className="col-md-3">
            <h5>Spotify Plans</h5>
            <ul className="list-unstyled">
              <li><a href="/premium-individual">Premium Individual</a></li>
              <li><a href="/premium-duo">Premium Duo</a></li>
              <li><a href="/premium-family">Premium Family</a></li>
              <li><a href="/premium-student">Premium Student</a></li>
              <li><a href="/spotify-free">Spotify Free</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="text-center mt-4">
          <p>&copy; 2024 Spotify AB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
