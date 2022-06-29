import React, { useState, useEffect } from 'react';

import { deleteUser, findAllUsers } from '../../services/requester';
import AdminUsersList from '../AdminUsersList';

const AdminTableUsers = () => {
    const [users, setUsers] = useState([]);
    const [deletedUser, setDeletedUser] = useState(false);

    useEffect(() => {
        findAllUsers()
            .then(usersData => {
                setUsers(usersData);
                setDeletedUser(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, [deletedUser]);

    const removeAdminHandler = async (e) => {
        e.preventDefault();

        setDeletedUser(true);
        const id = e.target.value;
        return await deleteUser({ id });
    }

    return (
        <>
            <AdminUsersList
                users={users}
                button={{ remove: removeAdminHandler }}
            />
        </>
    );
}

export default AdminTableUsers;