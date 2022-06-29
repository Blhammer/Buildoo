import React, { useContext, useState } from 'react';
import image1 from './team-1.jpg';

import styles from './CatalogCard.module.css';

import UserContext from '../../contexts/Context';

const CatalogCard = ({ data, button }) => {
    return (
        <div className={styles.eachImageContainer}>
            <figure className={styles.eachImageDesign}>
                <img
                    src={image1}
                    alt="Image"
                    className={styles.eachImageStyle}
                />
                <figcaption
                    className={styles.figcaptionDesign}
                >
                    <h2>Details</h2>
                    <a href="/all-services/:id">View more</a>
                </figcaption>
            </figure>
            <div className={styles.reviewsContainer}>
                <span className={styles.imageReview}>18 Oct 2020</span>
                <span className={styles.imageReview}>9,906 views</span>
            </div>
        </div>
    )
};

export default CatalogCard;