import React, { useState, useEffect } from 'react';
import { findAllCards } from '../../services/requester';

import CatalogList from '../CatalogList';

const CatalogAllCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        findAllCards()
            .then(cardsData => {
                // console.log(cardsData);
                setCards(cardsData);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <>
            <CatalogList
                cards={cards}
            />
        </>
    )
}

export default CatalogAllCards;