import styles from './Catalog.module.css';

import CatalogAllCards from '../CatalogAllCards';

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
                            <CatalogAllCards/>
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