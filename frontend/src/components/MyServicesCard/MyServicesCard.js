import { Link } from 'react-router-dom';

import styles from './MyServicesCard.module.css';

const ServiceCard = ({ data, button }) => {
    return (
        <div className={styles.eachImageContainer}>
            <div className={styles.eachImageDesign}>
                <img
                    className={styles.eachCardImage}
                    src={data.imageUrl}
                    alt="img"
                />
            </div>
            <div className={styles.eachCardBody}>
                <span className={styles.titleWrap}><h5>{data.title}</h5></span>
                <div className={styles.userReviews}>
                    <small>Likes: {data.likes.length}</small>
                    <div className={styles.actionButtonsCard}>
                        <Link
                            to={`/my-services/${data._id}`}
                            className={styles.viewButton}
                            state={{ data: data }}
                        >
                            Details
                        </Link>
                        <Link
                            to={`/my-services/edit/${data._id}`}
                            className={styles.editButton}
                            state={{ data: data }}
                        >
                            Edit
                        </Link>
                        <button
                            type='submit'
                            onClick={button.deleteCardButton}
                            className={styles.deleteButton}
                            value={data._id}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;