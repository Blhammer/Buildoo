import { Link } from 'react-router-dom';

import AllServices from '../MyAllServices';

import styles from './MyPosts.module.css';

const MyServices = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainRow}>
                    <h2 className={styles.titleDesign}>My Uploaded Services</h2>
                    <Link className={styles.createDesign} to='/my-services/create'>Create Service</Link>
                    <nav aria-label="Page navigation example">
                        <ul className={styles.pageNav}>
                            <li className={styles.pageNavItems}>
                                <a className={styles.pageNavLinks} href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className={styles.navButtons}>Previous</span>
                                </a>
                            </li>
                            <li className={styles.pageNavItems}><a className={styles.pageNavLinks} href="#">1</a></li>
                            <li className={styles.pageNavItems}><a className={styles.pageNavLinks} href="#">2</a></li>
                            <li className={styles.pageNavItems}><a className={styles.pageNavLinks} href="#">3</a></li>
                            <li className={styles.pageNavItems}>
                                <a className={styles.pageNavLinks} href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className={styles.navButtons}>Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.cardsContainer}>
                    <AllServices />
                </div>
            </div>
        </div>
    );
}

export default MyServices;