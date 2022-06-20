import React, { useContext } from 'react';

import UserContext from '../../contexts/Context';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import AdvancedRequest from '../../components/AdvancedRequest';
import SimpleRequest from '../../components/SimpleRequest';

const AdvancedRequestPage = () => {
    const context = useContext(UserContext);
    const { isLoggedIn } = context;

    return (
        <>
            <Topbar />
            <Navbar />

            {isLoggedIn
                ?
                <SimpleRequest />
                :
                <AdvancedRequest />
            }

            <Footer />
        </>
    );
}

export default AdvancedRequestPage;