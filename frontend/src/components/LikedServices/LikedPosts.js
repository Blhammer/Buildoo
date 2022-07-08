import React, { useContext, useEffect, useState } from 'react';
import { findAllCards } from '../../services/requester';

import LikedList from '../LikedListServices';
import UserContext from '../../contexts/Context';

const MyPosts = () => {
    const context = useContext(UserContext);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        findAllCards()
            .then(cardsData => {
                let likedStorage = [];
                let updatedStorage = [];
                cardsData.filter((liked) => (
                    liked.likes.filter(element => {
                        if (element._id === context.user._id) {
                            likedStorage.push(liked._id)
                        }
                    })
                ));

                cardsData.forEach(element => {
                    if (likedStorage.includes(element._id)) {
                        updatedStorage.push(element);
                    }
                });

                setCards(updatedStorage);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <>
            <LikedList
                cards={cards}
            />
        </>
    )
}

export default MyPosts;