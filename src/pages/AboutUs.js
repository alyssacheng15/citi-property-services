import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Spline from '@splinetool/react-spline';
import styles from './AboutUs.module.css';
import aboutUsHeader from '../assets/images/aboutUsHeader.png';

const AboutUs = () => {
  return (
    <div className={styles.container}>
                <Link to="/" className={styles.navbarLogo}>
              <img src={ aboutUsHeader } className={styles.logoImage} alt="Logo" />
            </Link>
      <div className={styles.panel}>Panel 1</div>
      <div className={styles.panel}>Panel 2</div>
      <div className={styles.panel}>Panel 3</div>
      <div className={styles.panel}>Panel 4</div>
      <div className={styles.panel}>Panel 5</div>
    </div>
  );
};

export default AboutUs;
