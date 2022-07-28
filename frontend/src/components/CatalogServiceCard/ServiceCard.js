import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { shallowEqual, useSelector } from "react-redux";

import styles from './ServiceCard.module.css';

import CommentInput from '../CatalogComments';
import CommentCard from '../CommentsCard';
import UserContext from '../../contexts/Context';

import { like, dislike, deleteComment, findAllComments } from '../../services/requester';

const ServiceCard = () => {
    const location = useLocation();
    const data = location?.state?.data;
    const context = useContext(UserContext);

    const { comments } = useSelector(
        (state) => ({
            comments: state.comments.comments
        }),
        shallowEqual
    );

    const [commentsService, setCommentsService] = useState(comments);
    const [deletedComment, setDeletedComment] = useState(false);

    useEffect(() => {
        findAllComments()
            .then(commentsData => {
                const updatedComments = commentsData.filter(currComment =>
                    currComment.service === data._id
                );
                setCommentsService(updatedComments);
                setDeletedComment(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, [deletedComment, data._id, comments]);

    const deleteCommentButton = async (e) => {
        e.preventDefault();
        setDeletedComment(true);

        const id = e.target.value;

        await deleteComment({ id });
    }

    let clicked;
    if (context.isLoggedIn) {
        data.likes.forEach(element =>
            clicked = element === context.user._id
        );
    }

    const [likes, setLikes] = useState(data.likes);
    const [isClickedLike, setCLickedLike] = useState(clicked);

    const likeHandler = async () => {
        const userId = context.user._id;
        const dataId = data._id;
        let likesData = data.likes;

        if (!isClickedLike) {
            setCLickedLike(true);

            if (!likesData.includes(userId)) {
                likesData.push(userId);
                setLikes(likesData);
                await like({ userId, dataId });
            }
        } else {
            setCLickedLike(false);

            if (likesData.find(obj => obj === userId)) {
                let currentLikeIndex = likesData.findIndex(id => id !== userId);
                likesData.splice(currentLikeIndex, 1);
                setLikes(likesData);
                await dislike({ userId, dataId });
            }
        }
    };

    const isOwner = data?.owner?._id !== context?.user?._id;

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
                                            ?
                                            <>
                                                {isClickedLike
                                                    ? dislikeBtn
                                                    : likeBtn
                                                }
                                            </>
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
                                <>
                                    {commentsService.length > 0
                                        ? (
                                            commentsService.map((comment) => {
                                                return <CommentCard key={comment._id} data={comment} button={deleteCommentButton} />
                                            })
                                        )
                                        :
                                        <>
                                            {
                                                context.isLoggedIn
                                                    ? <p className={styles.emptyList}>No Comments for the service! Be the first one!</p>
                                                    : null
                                            }
                                        </>
                                    }
                                </>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;