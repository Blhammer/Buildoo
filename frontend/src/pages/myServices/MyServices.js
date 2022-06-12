import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import MyServices from '../../components/MyServices';

const MyServicesPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <MyServices />
            <Footer />
        </>
    );
}

export default MyServicesPage;