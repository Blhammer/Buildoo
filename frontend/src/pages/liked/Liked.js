import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import LikedServices from '../../components/Liked';

const MyLikedServicesPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <LikedServices />
            <Footer />
        </>
    );
}

export default MyLikedServicesPage;