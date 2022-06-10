import styles from './LikedPosts.module.css';
import image1 from './team-1.jpg';

const MyPosts = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainRow}>
                    <h2 className={styles.titleDesign}>My Liked Services</h2>
                    <nav aria-label="Page navigation example">
                        <ul className={styles.pageNav}>
                            <li className={styles.pageNavItems}>
                                <a className={styles.pageNavLinks} href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className={styles.navButtons}>Previous</span>
                                </a>
                            </li>
                            <li className={styles.pageNavItems}><a className={styles.pageNavLinks} href="#">1</a></li>
                            <li className={styles.pageNavItems}><a className={styles.pageNavLinks} href="#">2</a></li>
                            <li className={styles.pageNavItems}><a className={styles.pageNavLinks} href="#">3</a></li>
                            <li className={styles.pageNavItems}>
                                <a className={styles.pageNavLinks} href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className={styles.navButtons}>Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.cardsContainer}>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.myCardDesign}>
                        <div className={styles.cardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.cardBody}>
                            <h5>
                                Title: Images for demo
                            </h5>
                            <a className={styles.detailsCard} href='/catalog/:id'>Details</a>
                            <div className={styles.userDesign}>
                                <div className={styles.userInfo}>
                                    <h5>Name: Gogo Gogev</h5>
                                    <span>Likes: 23</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MyPosts;