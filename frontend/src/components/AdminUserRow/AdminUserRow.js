import React, { useContext, useState } from 'react';

import styles from './AdminUserRow.module.css';

import UserContext from '../../contexts/Context';
import { updateAdmin } from '../../services/requester';

const AdminUserRow = ({ data, button }) => {
    const context = useContext(UserContext);
    const changeButton = context.userEmail === data.email;

    const [admin, setAdmin] = useState(data.isAdmin);

    const changeAdminHandler = async (e) => {
        e.preventDefault();

        const { isAdmin } = await updateAdmin(data);

        setAdmin(isAdmin);
    }

    return (
        <tr className={styles.alertTr} role="alert">
            <th scope={styles.rowAdmin}>{data._id}</th>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>
                {admin
                    ? null
                    : <button
                        type='button'
                        onClick={button.remove}
                        className={styles.faAdminClose}
                        value={data._id}>
                    </button>
                }
            </td>
            <td>
                {changeButton
                    ? null
                    : <button
                        type='button'
                        onClick={changeAdminHandler}
                        className={styles.changeButton}
                        value={data._id}>
                    </button>
                }
            </td>
            <td>
                {admin
                    ? <i className={styles.adminColor}>Yes</i>
                    : <i className={styles.userColor}>No</i>
                }
            </td>
        </tr>
    );
}

export default AdminUserRow;