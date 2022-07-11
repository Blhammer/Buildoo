import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import styles from './Map.module.css';

const MapContainer = () => {
    const defaultCenter = {
        lat: 42.69606740188051,
        lng: 23.33294092194868
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerClassName={styles.map}
                zoom={11}
                center={defaultCenter}
            />
        </LoadScript>
    );
};

export default MapContainer;