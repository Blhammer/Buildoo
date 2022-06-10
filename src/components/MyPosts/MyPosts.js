import styles from './MyPosts.module.css';
import image1 from './team-1.jpg';

const MyPosts = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainRow}>
                    <h2 className={styles.titleDesign}>My Uploaded Services</h2>
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
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachCardDesign}>
                        <div className={styles.eachCardImage}>
                            <img
                                src={image1}
                                alt="img"
                            />
                        </div>
                        <div className={styles.eachCardBody}>
                            <h5>
                                Images for demo
                            </h5>
                            <h5>Todor Georgiev Balabashev</h5>
                            <div className={styles.userReviews}>
                                <div className={styles.actionButtonsLikes}>
                                    <small>Likes: 23</small>
                                </div>
                                <div className={styles.actionButtonsCard}>
                                    <button onClick={() => { console.log('Delete') }} href="/delete" className={styles.deleteButton}>Delete</button>
                                    <button onClick={() => { console.log('Edit') }} href="/edit" className={styles.editButton}>Edit</button>
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