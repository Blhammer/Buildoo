import React, { useEffect, useState } from 'react';
import styles from './Catalog.module.css';

import CatalogList from '../CatalogList';
import { findAllCards } from '../../services/requester';

const Catalog = () => {
    const { search } = window.location;
    const querySearch = new URLSearchParams(search).get('search');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        findAllCards()
            .then(cardsData => {
                setCards(cardsData);
            })
            .catch(err => {
                console.error(err);
            })
    }, [cards]);


    const filterServices = (cards, querySearch) => {
        let cardsStorage = [];

        if (!querySearch) {
            return cards;
        }

        cards.filter(el => {
            if (el.title.toLowerCase().includes(querySearch.toLowerCase())) {
                cardsStorage.push(el);
            }
        });

        return cardsStorage;
    };

    const updatedServices = filterServices(cards, querySearch);

    return (
        <>
            <div className={styles.searchContainer} >
                <form className={styles.formSearch}>
                    <input
                        type="search"
                        id="search-bar"
                        className={styles.formSearchDesign}
                        placeholder="Search..."
                        aria-label="Search"
                        name='search'
                    />
                    <button
                        type="submit"
                        className={styles.buttonSearch}
                    >
                        Search<i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.paddingContainer}>
                    <div className={styles.rowCatalog}>
                        <h2 className={styles.titleCatalog}>Catalog</h2>

                        <div className={styles.catalogMainContainer}>
                            <CatalogList cards={updatedServices} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalog;