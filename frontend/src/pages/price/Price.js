import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Price from '../../components/PricingPlan';

const PricePage = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Price/>
            <Footer/>
        </>
    );
} 

export default PricePage;