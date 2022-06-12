import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Login from '../../components/Login';

const LoginPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Login />
            <Footer />
        </>
    );
}

export default LoginPage;