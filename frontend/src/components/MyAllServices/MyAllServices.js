import React, { useState, useEffect, useContext } from 'react';
import { findAllCards } from '../../services/requester';

import ServicesList from '../MyServicesList';
import UserContext from '../../contexts/Context';

import { deleteCard, deleteImageGCS, findOneServiceById } from '../../services/requester';

const MyAllServices = () => {
    const [myServices, setMyServices] = useState([]);
    const [deletedCard, setDeletedCard] = useState(false);

    const context = useContext(UserContext);

    useEffect(() => {
        findAllCards()
            .then(myCardsData => {
                const updated = myCardsData.filter((service) =>
                    service.owner._id === context.user._id
                );
                setMyServices(updated);
                setDeletedCard(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, [deletedCard]);

    const deleteButtonHandler = async (e) => {
        e.preventDefault();
        const id = e.target.value;

        const currentService = await findOneServiceById(id);
        deleteImageGCS(currentService);
        
        setDeletedCard(true);

        return await deleteCard({ id });
    }

    return (
        <>
            <ServicesList
                services={myServices}
                button={{ deleteCardButton: deleteButtonHandler }}
            />
        </>
    )
}

export default MyAllServices;