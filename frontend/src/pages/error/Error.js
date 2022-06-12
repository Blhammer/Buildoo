import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Error from '../../components/Error';

const ErrorPage = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Error/>
            <Footer/>
        </>
    );
} 

export default ErrorPage;