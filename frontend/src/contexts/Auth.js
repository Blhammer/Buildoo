import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import { userAuth } from '../services/requester';

function getCookie(name) {
    const cookieValue = localStorage.getItem(name);
    return cookieValue;
}

function AuthProcess(props) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        if (!token) return logout();
        sendRequest(token);
    }, []);

    const sendRequest = async (token) => {
        const user = await userAuth(token);
        user ? login(user) : logout();
    }

    const updateUser = (user) => {
        if (!isLoggedIn) {
            return;
        }
        setUser(user);
    }

    const login = (user) => {
        setUser(user);
        setIsLoggedIn(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{
            isLoggedIn,
            user,
            updateUser,
            login,
            logout,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default AuthProcess;