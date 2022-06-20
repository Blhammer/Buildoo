import React, { useState, useEffect } from 'react';

import { findAllUsers } from '../../services/requester';
import AdminUsersList from '../AdminUsersList';

const AdminTableUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        findAllUsers()
            .then(result => {
                setUsers(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <AdminUsersList users={users} />
        </>
    );
}

export default AdminTableUsers;