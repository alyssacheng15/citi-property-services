import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Spline from '@splinetool/react-spline';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>Panel 1</div>
      <div className={styles.panel}>Panel 2</div>
      <div className={styles.panel}>Panel 3</div>
      <div className={styles.panel}>Panel 4</div>
      <div className={styles.panel}>Panel 5</div>
    </div>
  );
};

export default AboutUs;
