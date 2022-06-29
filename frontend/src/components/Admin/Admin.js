import { useContext } from 'react';

import styles from './Admin.module.css';

import UserContext from '../../contexts/Context';
import AdminTableUsers from '../AdminTableUsers/AdminTableUsers.js';

const AdminPanel = () => {
    const context = useContext(UserContext);

    return (
        <div className={styles.mainContainer}>
            <a href='/' className={styles.homeStyle}><i className="fas fa-arrow-left"></i> Home </a>
            <p className={styles.adminNameStyle}>Admin: {context.userEmail}</p>
            <div className={styles.mainContainerDesign}>
                <div className={styles.adminContainer}>
                    <div className={styles.title}>
                        <div className={styles.titleDesign}>
                            <h1 className={styles.titleStyle}>Admin Panel</h1>
                        </div>
                    </div>
                    <div className={styles.rowAdmin}>
                        <div className={styles.rowAdminDesign}>
                            <div className={styles.tableWrapAdmin}>
                                <table className={styles.tableAdmin}>
                                    <thead className={styles.tableAdminStyle}>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Remove</th>
                                            <th>Change</th>
                                            <th>Admin</th>
                                        </tr>
                                    </thead>

                                    <AdminTableUsers />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;