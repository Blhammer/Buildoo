import React, { useContext, useState } from 'react';
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
                <h4>{data.title}</h4>
                <div className={styles.userReviews}>
                    <small>Likes: 23{data.likes}</small>
                    <div className={styles.actionButtonsCard}>
                        <Link
                            to={`/my-services/${data._id}`}
                            className={styles.viewButton}
                            state={{ data: data }}>
                            Details
                        </Link>
                        <Link
                            to={`/my-services/edit/${data._id}`}
                            className={styles.editButton}
                            state={{ data: data }}>
                            Edit
                        </Link>
                        <button onClick={() => { console.log('Delete') }} className={styles.deleteButton}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;