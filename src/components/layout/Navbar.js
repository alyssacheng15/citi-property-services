import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <h1>CompanyLogo</h1>
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  const styles = {
    navbar: {
      backgroundColor: '#333',
      padding: '10px 20px',
      color: '#fff',
    },
    navbarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navbarLogo: {
      textDecoration: 'none',
      color: '#fff',
    },
    navbarLogoText: {
      margin: 0,
      fontSize: '1.8em',
    },
    navbarMenu: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    },
    navbarItem: {
      marginLeft: '20px',
    },
    navbarLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '1.2em',
    },
    navbarLinkHover: {
      color: '#007bff',
    },
  };  
  
  export default Navbar;