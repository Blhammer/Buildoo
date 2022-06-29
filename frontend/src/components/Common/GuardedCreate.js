import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../contexts/Context';

const GuardRoutes = () => {
    const context = useContext(UserContext);

    return context.isLoggedIn
        ? <Outlet />
        : <Navigate to='/login'/>
}

export default GuardRoutes;