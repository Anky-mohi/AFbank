import React from 'react';
import './Footer.css';
import logoImage from '../assets/logo1.png'; // Adjust path as needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo" />
          <p>The #1 Curated Online Business Marketplace</p>
        </div>
        <div className="footer-about">
          <p>Empire Flippers has helped people buy and sell over <strong>$510M+</strong> worth of online businesses.</p>
          <div className="footer-badges">
            <span>Inc-500</span>
            <span>IBBA</span>
            <span>Bitcoin</span>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Site Links</h3>
          <ul>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Podcasts</a></li>
            <li><a href="#">Contact Us</a></li>
           
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Sell Your Site</a></li>
            <li><a href="#">Valuation Tool</a></li>
            <li><a href="#">Buyers FAQ</a></li>
            <li><a href="#">Sellers FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Want to get the latest industry news and tips?</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <h3>Social</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © Empire Flippers, LLC 2024</p>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Copyright Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
