import React, { useState, useEffect, useContext } from 'react';
import { findAllCards, findMyCards } from '../../services/requester';

import ServicesList from '../MyServicesList';
import UserContext from '../../contexts/Context';

const MyAllServices = () => {
    const [myServices, setMyServices] = useState([]);
    const context = useContext(UserContext);

    useEffect(() => {
        findAllCards()
            .then(myCardsData => {
                setMyServices(
                    myCardsData.filter((service) =>
                        service.owner._id === context.user._id));
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const deleteButtonHandler = () => {
        console.log('Delete');
    }

    return (
        <>
            <ServicesList
                services={myServices}
                button={{ button: deleteButtonHandler }}
            />
        </>
    )
}

export default MyAllServices;