import styles from './ServiceCard.module.css';

import image1 from './default.png';

const ServiceCard = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.mainContainerDesign}>
                    <div className={styles.cardDesign}>
                        <h1 className={styles.title}>Service Details</h1>
                        <div className={styles.serviceTicket}>
                            <div className={styles.serviceLeft}>
                                <img src={image1}
                                    alt="" />
                            </div>
                            <div className={styles.serviceRight}>
                                <div>
                                    <h3>Service Name</h3>
                                </div>

                                <div className={styles.infoDesign}>
                                    <h5>Town/City:</h5>Great Britain
                                </div>

                                <div className={styles.infoDesign}>
                                    <span>
                                        <h5>Description:</h5>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>

                                <div className={styles.infoDesign}>
                                    <p>Likes: 15 <i className="fas fa-thumbs-up"></i></p>
                                </div>

                                <div className={styles.buttonsDesign}>
                                    <button href="/like" className={styles.like}>Like</button>
                                    <button href="/dislike" className={styles.dislike}>Dislike</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.commentsDesign}>
                            <h2 className={styles.comments}>Comments:</h2>
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
        </>
    );
}

export default ServiceCard;