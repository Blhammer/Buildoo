import styles from './Liked.module.css';

import MyPosts from '../LikedServices/LikedPosts';

const Liked = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <h2 className={styles.titleDesign}>My Liked Services</h2>

                <div className={styles.cardsContainer}>
                    <MyPosts/>
                </div>
            </div>
        </div>
    );
};

export default Liked;