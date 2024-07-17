import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/citi_logo.png';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <ul style={styles.navbarMenu}>
          <li style={styles.navbarItem}>
            <Link to="/about" style={styles.navbarLink}>About</Link>
          </li>
          <li style={styles.navbarItem}>
            <Link to="/services" style={styles.navbarLink}>Services</Link>
          </li>
          <li style={styles.navbarLogoItem}>
            <Link to="/" style={styles.navbarLogo}>
              <img src={logo} style={styles.logoImage} />
            </Link>
          </li>
          <li style={styles.navbarItem}>
            <Link to="/owner" style={styles.navbarLink}>Owner</Link>
          </li>
          <li style={styles.navbarItem}>
            <Link to="/contact" style={styles.navbarLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: '10px 20px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarContainer: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  navbarItem: {
    margin: '0 100px',
  },
  navbarLogoItem: {
    margin: '0 40px',
  },
  navbarLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.5em',
    transition: 'color 0.3s',
  },
  logoImage: {
    height: '130px',
  },
};

export default Navbar;