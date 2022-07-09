import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import ForgotPassword from '../../components/ForgotPassword';

const Forgot = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <ForgotPassword />
            <Footer />
        </>
    );
}

export default Forgot;