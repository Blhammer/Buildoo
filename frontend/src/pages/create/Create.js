import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Create from '../../components/Create';

const CreatePage = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Create/>
            <Footer/>
        </>
    );
} 

export default CreatePage;