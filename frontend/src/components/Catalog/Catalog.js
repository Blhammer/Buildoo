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

                        <div className={styles.catalogMainContainer}>
                            <CatalogAllCards />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;