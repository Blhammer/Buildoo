import styles from './Catalog.module.css';
import image1 from './team-1.jpg';

const Catalog = () => {
    return (
        <>
            <div className={styles.searchContainer} >
                <form className={styles.formSearch}>
                    <input
                        className={styles.formSearchDesign}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className={styles.buttonSearch}
                        type="submit"
                    >Search<i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.paddingContainer}>
                    <div className={styles.rowCatalog}>
                        <h2 className={styles.titleCatalog}>Catalog</h2>

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
                        <div className={styles.catalogMainContainer}>
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
                        </div>

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
                </div>
            </div>
        </>
    );
}

export default Catalog;