import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/citi_logo.png';
import styles from './NavBar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link to="/about" className={styles.navbarLink}>About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/services" className={styles.navbarLink}>Services</Link>
          </li>
          <li className={styles.navbarLogoItem}>
            <Link to="/" className={styles.navbarLogo}>
              <img src={logo} className={styles.logoImage} alt="Logo" />
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/owner" className={styles.navbarLink}>Owner</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/contact" className={styles.navbarLink}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
