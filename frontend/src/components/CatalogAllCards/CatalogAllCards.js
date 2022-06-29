import React, { useState, useEffect } from 'react';
import { findAllCards } from '../../services/requester';

import CatalogList from '../CatalogList/CatalogList';

const CatalogAllCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        findAllCards()
            .then(cardsData => {
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
            // button={{ button: button }}
            />
        </>
    )
}

export default CatalogAllCards;