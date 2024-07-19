import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Spline from '@splinetool/react-spline';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.splineContainer}>
        <Spline scene="https://prod.spline.design/vlBdDrCLuKb271ed/scene.splinecode" />
      </div>
      <div className={styles.info}>
        <p className={styles.pg1}>
          We are a full service management company who is dedicated in providing
          the gold standard in management services.
        </p>
        <p className={styles.pg2}>
          Our ambition is to create a property management solution that is
          customized to assist residential, commercial, and multi family
          properties including condominium, townhomes, apartment buildings, and
          Home Owner's Associations.
        </p>
      </div>
    </div>
  );
}

export default Home;
