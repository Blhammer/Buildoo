import React from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Edit from '../../components/Edit';

const EditPage = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Edit/>
            <Footer/>
        </>
    );
} 

export default EditPage;