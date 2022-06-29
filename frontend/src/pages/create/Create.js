import React, { useContext } from 'react';

import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Create from '../../components/Create';
import Login from '../../components/Login';

import UserContext from '../../contexts/Context';

const CreatePage = () => {
    const context = useContext(UserContext);

    return (
        <>
            <Topbar />
            <Navbar />

            {
                context.isLoggedIn
                    ? <Create />
                    : <Login />
            }

            <Footer />
        </>
    );
}

export default CreatePage;