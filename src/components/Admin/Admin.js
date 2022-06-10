import styles from './Admin.module.css';

import AdminTableUsers from '../AdminTableUsers/AdminTableUsers.js';

const AdminPanel = () => {
    return (
        <div className={styles.mainContainer}>
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