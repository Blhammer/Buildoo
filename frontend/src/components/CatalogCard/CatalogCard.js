import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CatalogCard.module.css';

const CatalogCard = ({ data }) => {
    return (
        <div className={styles.eachImageContainer}>
            <figure className={styles.eachImageDesign}>
                <img
                    src={data.imageUrl}
                    alt="img"
                    className={styles.eachImageStyle}
                />
                <figcaption
                    className={styles.figcaptionDesign}
                >
                    <h2>Details</h2>
                    <Link
                        to={`/all-services/${data._id}`}
                        state={{ data: data }}
                    >
                        View more
                    </Link>
                </figcaption>
            </figure>
            <div className={styles.reviewsContainer}>
                <span className={styles.imageReview}>{data.currentDate}</span>
                <span className={styles.imageReview}>Likes: 15{data.likes}</span>
            </div>
        </div>
    );
};

export default CatalogCard;