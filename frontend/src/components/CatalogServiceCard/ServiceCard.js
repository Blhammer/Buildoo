import styles from './ServiceCard.module.css';
import { useLocation } from 'react-router-dom';

const ServiceCard = (props) => {
    const location = useLocation();
    const data = location.state?.data;

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
                                <button href="/like" className={styles.like}>Like</button>
                                <button href="/dislike" className={styles.dislike}>Dislike</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.commentsDesign}>
                        <h2 className={styles.comments}>Comments:</h2>

                        <article className={styles.createComment}>
                            <h4 className={styles.comments}>Add new comment:</h4>
                            <form className={styles.formStyle}>
                                <textarea name="comment" placeholder="Comment..."></textarea>
                                <input className={styles.buttonSubmit} type="submit" value="Add Comment" />
                            </form>
                        </article>

                        <div className={styles.serviceTicket}>
                            <div className={styles.serviceRight}>
                                <div className={styles.infoDesign}>
                                    <span>
                                        <h5>Gogo Petkov:</h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                    <button href="" className={styles.delete}>Delete</button>
                                </div>
                                <div className={styles.infoDesign}>
                                    <span>
                                        <h5>Gogo Petkov:</h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                    <button href="" className={styles.delete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceCard;