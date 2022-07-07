import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './ServiceCard.module.css';

import CommentInput from '../CatalogComments';
import AllComments from '../CatalogAllComments';
import UserContext from '../../contexts/Context';

const ServiceCard = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    const context = useContext(UserContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.cardDesign}>
                    <h1 className={styles.title}>Service Details</h1>
                    <div className={styles.serviceTicket}>

                        <div className={styles.serviceLeft}>
                            <img src={data.imageUrl}
                                alt="img" />
                        </div>

                        <div className={styles.serviceRight}>
                            <div>
                                <h3>Title: {data.title}</h3>
                            </div>

                            <div className={styles.infoDesign}>
                                <h5>City:<span className={styles.info}>{data.town}</span></h5>
                                <h5>Street:<span className={styles.info}>{data.street}</span></h5>
                                <h5>Phone:<span className={styles.info}>{data.phone}</span></h5>
                            </div>

                            <div className={styles.infoDesign}>
                                <h5>Description:<span className={styles.info}>{data.description}</span></h5>
                            </div>

                            <div className={styles.infoDesign}>
                                <h5>Price:<span className={styles.info}>{data.price}$</span></h5>
                                <h5>Payment method:<span className={styles.info}>{data.payments}</span></h5>
                                <h5>Service:<span className={styles.info}>{data.service}</span></h5>
                            </div>

                            <div className={styles.buttonsDesign}>
                                <div className={styles.likeDesign}>
                                    Likes: 15 {data.likes}<i className="fas fa-thumbs-up"></i>
                                </div>
                                {context.isLoggedIn
                                    ?
                                    <>
                                        <button href="/like" className={styles.like} onClick={() => console.log('Liked')}>Like</button>
                                        <button href="/dislike" className={styles.dislike} onClick={() => console.log('Dislike')}>Dislike</button>
                                    </>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>

                    <div className={styles.commentsDesign}>
                        <h2 className={styles.comments}>Comments:</h2>
                        <CommentInput data={data}/>

                        <div className={styles.serviceTicket}>
                            <div className={styles.serviceRight}>
                                <AllComments data={data}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;