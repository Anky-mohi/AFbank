import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo1.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ pricing: false, resources: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: true }));
  };

  const handleMouseLeave = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: false }));
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/"><img src={logoImage} alt="Logo" /></Link>
          </div>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/SellersListing">Marketplace</Link></li>
              <li><Link to="/buyers">For Sellers</Link></li>
              
              {/* Hoverable Dropdown for Pricing */}
              <li 
                className="dropdown" 
                onMouseEnter={() => handleMouseEnter('pricing')} 
                onMouseLeave={() => handleMouseLeave('pricing')}
              >
                <Link to="/pricing">Company&nbsp; <i className="fas fa-chevron-down"></i></Link>
                {dropdownOpen.pricing && (
                  <ul className="dropdown-menu">
                    <li><Link to="/pricing/standard">Standard Pricing</Link></li>
                    <li><Link to="/pricing/enterprise">Enterprise Pricing</Link></li>
                  </ul>
                )}
              </li>
              
              {/* Hoverable Dropdown for Resources */}
              <li 
                className="dropdown" 
                onMouseEnter={() => handleMouseEnter('resources')} 
                onMouseLeave={() => handleMouseLeave('resources')}
              >
                <Link to="/resources">Resources&nbsp; <i className="fas fa-chevron-down"></i></Link>
                {dropdownOpen.resources && (
                  <ul className="dropdown-menu">
                    <li><Link to="/resources/blog">Blog</Link></li>
                    <li><Link to="/resources/guides">Guides</Link></li>
                    <li><Link to="/resources/case-studies">Case Studies</Link></li>
                  </ul>
                )}
              </li>
              
            </ul>
          </div>
          
          <div className="cta-buttons">
            <Link to="/Login" className="btn-valuation1"><i className="fa fa-lock" style={{ color: '#ffc107' }} aria-hidden="true"></i>&nbsp;  Log In</Link>
            <Link to="/valuation" className="btn-valuation">Get Started &nbsp;<i className="fa fa-arrow-right" style={{ color: 'white' }}></i></Link>
          </div>

          <div className="burger" onClick={toggleMenu}>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
            <span className={menuOpen ? 'active' : ''}></span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
