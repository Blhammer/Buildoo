import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    isContextAdmin: false,
    userEmail: {},
    user: null,
    updateUser: () => {},
    login: () => {},
    logout: () => {}
})

export default UserContext;