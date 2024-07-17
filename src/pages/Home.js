import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Spline from '@splinetool/react-spline';
import { findByLabelText } from '@testing-library/react';



function App() {
    return (
        <div style={styles.body}>
            <Navbar />
            <div style={styles.spline}>
                <Spline scene="https://prod.spline.design/vlBdDrCLuKb271ed/scene.splinecode" />
            </div>
            <div style={styles.info}>
                <p style={styles.pg1}>We are a full service management company who is dedicated in providing the gold standard in management services.</p>
                <p style={styles.pg2}>Our ambition is to create a property management solution that is customized to assist residential, commercial, and multi family properties including condominum, townhomes, apartment buildings, and Home Owner's Associations.</p>
            </div>

        </div>
    );
}

const styles = {
    body: {
        backgroundColor: '#5C5C5C',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
    },

    splineContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        margin: 0,
    },

    info: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 10,
        display: 'flex',
        marginLeft: 150,
        marginRight: 150,
    },

    pg1: {
        textAlign: 'right',
        marginRight: 15,
    },

    pg2: {
        textAlign: 'left',
        marginLeft: 15,

    },
};

export default App;