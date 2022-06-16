import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    user: null,
    updateUser: () => {},
    login: () => {},
    logout: () => {}
})

export default UserContext;