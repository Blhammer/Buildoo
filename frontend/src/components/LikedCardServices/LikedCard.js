import { Link } from 'react-router-dom';

import styles from './LikedList.module.css';

const LikedCard = ({ data }) => {
    return (
        <div className={styles.myCardDesign}>
            <div className={styles.cardImage}>
                <img
                    src={data.imageUrl}
                    alt="img"
                />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.userDesign}>
                    <div className={styles.userInfo}>
                        <h5>Title: {data.title}</h5>
                        <h5>Name: {data.owner.firstName} {data.owner.lastName} </h5>
                        <span>Likes: {data.likes.length} </span>
                    </div>
                </div>
                <div className={styles.detailsButtonDesign}>
                    <Link
                        to={`/liked/${data._id}`}
                        className={styles.detailsCard}
                        state={{ data: data }}
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LikedCard;