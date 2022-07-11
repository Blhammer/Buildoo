import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import { userAuth } from '../services/requester';

function getCookie(name) {
    const cookieValue = localStorage.getItem(name);
    return cookieValue;
}

export const AuthProcess = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isContextAdmin, setContextIsAdmin] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        if (!token) {
            return logout();
        }
        sendRequest(token);
    }, []);

    const sendRequest = async (token) => {
        const user = await userAuth(token);
        if (user) {
            login(user);
        } else {
            logout();
        }
    }

    const updateUser = (user) => {
        if (!isLoggedIn) {
            return;
        }
        setUser(user);
    }

    const login = (user) => {
        if (user.isAdmin) {
            setContextIsAdmin(true);
        }

        setUserEmail(user.email);
        setUser(user);
        setIsLoggedIn(true);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{
            isLoggedIn,
            isContextAdmin,
            userEmail,
            user,
            updateUser,
            login,
            logout,
        }}>
            {children}
        </UserContext.Provider>
    )
}

// export const useAuthContext = () => {
//     const authState = useContext(AuthProcess);
//     return authState;
// };