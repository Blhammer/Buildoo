import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import ServiceCard from '../../components/ServiceCard';

const ServiceCardPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <ServiceCard />
            <Footer />
        </>
    );
}

export default ServiceCardPage;