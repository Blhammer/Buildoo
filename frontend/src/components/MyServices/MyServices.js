import { Link } from 'react-router-dom';

import MyAllServices from '../MyAllServices';

import styles from './MyPosts.module.css';

const MyServices = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainRow}>
                    <h2 className={styles.titleDesign}>My Uploaded Services</h2>
                    <Link className={styles.createDesign} to='/my-services/create'>Create Service</Link>
                </div>

                <div className={styles.cardsContainer}>
                    <MyAllServices />
                </div>
            </div>
        </div>
    );
}

export default MyServices;