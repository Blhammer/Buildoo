import React, { useEffect, useState } from 'react';

import styles from './Catalog.module.css';
import stylesList from './CatalogList.module.css';

import CatalogCard from "../CatalogCard";
import Pagination from '../Pagination';

import { filterServices, findCardsCount } from '../../services/requester';
import { useData } from '../../hooks/services';

const Catalog = () => {
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [updatedServices, setUpdatedServices] = useState([]);
    const data = useData(activePage);

    const { search } = window.location;
    const querySearch = new URLSearchParams(search).get('search');
    const queryPriceFrom = new URLSearchParams(search).get('sortFrom');
    const queryPriceTo = new URLSearchParams(search).get('sortTo');

    const body = {
        querySearch,
        queryPriceFrom,
        queryPriceTo
    };

    useEffect(() => {
        findCardsCount()
            .then(servicesCount => {
                const pagesCount = Math.ceil(servicesCount.servicesCount / 9);
                setPageCount(pagesCount);
            })
            .catch(err => {
                console.error(err);
                return;
            });
    }, []);

    useEffect(() => {
        filterServices()
            .then(filteredData => {
                if (body.querySearch !== null || body.queryPriceFrom !== null || body.queryPriceTo !== null) {
                    setUpdatedServices(filteredData);
                } else {
                    setUpdatedServices(data.data);
                }
            })
            .catch(err => {
                console.error(err);
                return;
            });
    }, [data, body.querySearch, body.queryPriceFrom, body.queryPriceTo]);

    return (
        <>
            <div className={styles.searchContainer} >
                <form className={styles.formSearch}>
                    <div className={styles.searchBarButton}>
                        <h2 className={styles.titleCatalog}>Catalog</h2>
                        <div className={styles.searchDivDesign}>
                            <input
                                type="search"
                                id="search-bar"
                                className={styles.formSearchDesign}
                                placeholder="Search..."
                                aria-label="Search"
                                name='search'
                            />
                            <input
                                type="number"
                                id="sort-bar-from"
                                className={styles.formSearchDesign}
                                placeholder="Price from..."
                                aria-label="Price"
                                name='sortFrom'
                            />
                            <input
                                type="number"
                                id="sort-bar-to"
                                className={styles.formSearchDesign}
                                placeholder="Price to..."
                                aria-label="Price"
                                name='sortTo'
                            />
                        </div>
                        <div className={styles.searchButtonPlace}>
                            <button
                                type="submit"
                                className={styles.buttonSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className={styles.paginationStyle}>
                <Pagination
                    activePage={activePage}
                    setActivePage={setActivePage}
                    pages={pageCount}
                />
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.paddingContainer}>
                    <div className={styles.rowCatalog}>

                        <div className={styles.catalogMainContainer}>
                            {updatedServices
                                ? (updatedServices.map((card) => {
                                    return <CatalogCard key={card._id} data={card} />
                                })
                                )
                                : <p className={stylesList.emptyList}>No Services in database</p>
                            }
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.paginationStyle}>
                <Pagination
                    activePage={activePage}
                    setActivePage={setActivePage}
                    pages={pageCount}
                />
            </div>
        </>
    );
}

export default Catalog;