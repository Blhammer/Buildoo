import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../contexts/Context';

const GuardedRoutesAuth = () => {
    const context = useContext(UserContext);

    return context.isLoggedIn
        ? <Navigate to='/' />
        : <Outlet />
}

export default GuardedRoutesAuth;