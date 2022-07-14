import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

import styles from './ServiceCard.module.css';

import CommentInput from '../CatalogComments';
import AllComments from '../CatalogAllComments';
import UserContext from '../../contexts/Context';

import { like, dislike } from '../../services/requester';

const ServiceCard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location?.state?.data;
    const context = useContext(UserContext);

    const isOwner = data.owner._id !== context?.user?._id;

    let clicked = false;
    if (context.isLoggedIn) {
        data.likes.forEach(element =>
            clicked = element._id === context.user._id
        );
    }

    const [likes, setLikes] = useState(data.likes);
    const [isClickedLike, setCLickedLike] = useState(clicked);

    const likeHandler = async () => {
        const userId = context.user._id;
        const dataId = data._id;
        let array = data.likes;

        if (!isClickedLike) {
            navigate('/all-services');
            setCLickedLike(true);

            if (!array.includes(userId)) {
                array.push(userId);
                setLikes(array);
                await like({ userId, dataId });
            }
        } else {
            navigate('/all-services');
            setCLickedLike(false);

            if (array.find(obj => obj._id === userId)) {
                let currentLikeIndex = array.findIndex(id => id !== userId);
                let result = array.splice(currentLikeIndex, 1);
                setLikes(result);
                await dislike({ userId, dataId });
            }
        }
    };

    const likeBtn = <button className={styles.like} onClick={likeHandler}>Like</button>;
    const dislikeBtn = <button className={styles.dislike} onClick={likeHandler}>Dislike</button>;

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
                                <h5>Payment method:<span className={styles.info}>{data.paymentMethod}</span></h5>
                                <h5>Service:<span className={styles.info}>{data.chooseService}</span></h5>
                            </div>

                            <div className={styles.buttonsDesign}>
                                <div className={styles.likeDesign}>
                                    Likes:<span className={styles.likeCounter}>{likes.length}</span><i className="fas fa-thumbs-up"></i>
                                </div>

                                {context.isLoggedIn
                                    ?
                                    <>
                                        {isOwner
                                            ? (isClickedLike ? dislikeBtn : likeBtn)
                                            : null
                                        }
                                    </>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>

                    <div className={styles.commentsDesign}>
                        <h2 className={styles.comments}>Comments:</h2>
                        <CommentInput data={data} />

                        <div className={styles.serviceTicket}>
                            <div className={styles.serviceRight}>
                                <AllComments data={data} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;