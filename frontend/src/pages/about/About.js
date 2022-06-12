import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import AboutUs from '../../components/About';

const AboutPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <AboutUs />
            <Footer />
        </>
    );
}

export default AboutPage;