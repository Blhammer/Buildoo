import React, { useState, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../contexts/Context';

const GuardRoutes = () => {
    const context = useContext(UserContext);

    return context.isContextAdmin
        ? <Outlet />
        : <Navigate to='/'/>
}

export default GuardRoutes;