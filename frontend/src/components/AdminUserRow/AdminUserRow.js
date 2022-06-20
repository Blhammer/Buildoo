import React, { useContext, useState } from 'react';

import styles from './AdminUserRow.module.css';

import { updateAdmin } from '../../services/requester';
import UserContext from '../../contexts/Context';

function AdminUserRow({ data }) {
    const context = useContext(UserContext);
    const [admin, setAdmin] = useState(data.isAdmin);
    const showButton = context.userEmail === data.email;

    const onAdminHandler = async (e) => {
        e.preventDefault();

        const user = await updateAdmin(data);
        setAdmin(user);

        window.location.reload(false);
    }

    return (
        <tr className={styles.alertTr} role="alert">
            <th scope={styles.rowAdmin}>1</th>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>
                <a href="#" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">
                        <i className={styles.faAdminClose}
                            onClick={() => { console.log('Delete') }}>
                        </i>
                    </span>
                </a>
            </td>
            <td>
                {showButton
                    ? <></>
                    : <button
                        className={styles.changeButton}
                        type="button"
                        value={data._id}
                        onClick={onAdminHandler}
                    >
                        Change
                    </button>
                }
                <div>
                    {admin
                        ? <span className={styles.adminColor}>Yes</span>
                        : <span className={styles.userColor}>No</span>
                    }
                </div>
            </td>
        </tr>
    )
}

export default AdminUserRow;