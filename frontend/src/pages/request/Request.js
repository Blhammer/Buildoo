import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import AdvancedRequest from '../../components/AdvancedRequest';
import SimpleRequest from '../../components/SimpleRequest';

const AdvancedRequestPage = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>

            <SimpleRequest/>
            <AdvancedRequest/>
            
            <Footer/>
        </>
    );
} 

export default AdvancedRequestPage;