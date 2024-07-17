import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Owner from './pages/Owner';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/owner" element={<Owner />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;
