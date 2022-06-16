import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Register from '../../components/Register';

const RegisterPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Register />
            <Footer />
        </>
    );
}

export default RegisterPage;