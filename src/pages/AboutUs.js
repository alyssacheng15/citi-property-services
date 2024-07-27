import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Spline from '@splinetool/react-spline';
import styles from './AboutUs.module.css';
import aboutUsHeader from '../assets/images/aboutUsHeader.png';
import building1 from '../assets/images/building1.png';
import building2 from '../assets/images/building2.png';


const AboutUs = () => {
  return (
    <div className={styles.body}>
          <Navbar />

    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img src={aboutUsHeader} className={styles.aboutUsHeader} alt="header" />
      </div>
      
      <div className={styles.panel}>Citi Property Services, Inc is a Los Angeles, CA based company that leverages the talent of its experienced Managing Principal and their well-developed network of professionals.</div>
      <div className={styles.panel}>
        <img src={building1} className={styles.imgpanel}></img>
      </div>
      <div className={styles.panel}>Citi Property Services has proven experience in offering a staff that is committed, focused, and sensitive to quality workmanship, protecting and maximizing the value of the asset, on-time performance, job site security, and competitive pricing.</div>
      <div className={styles.panel}>
        <img src={building2} className={styles.imgpanel}></img>
      </div>
      <div className={styles.panel}>We are dedicated to efficiently managing your property, whether it is a residential rental, commercial strip center, condo association, or apartment complex.</div>
    </div>
    </div>

  );
};

export default AboutUs;
