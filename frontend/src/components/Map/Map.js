import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import styles from './Map.module.css';

const MapContainer = () => {
    const defaultCenter = {
        lat: 42.69606740188051,
        lng: 23.33294092194868
    };

    const locations = [
        {
            name: 'Office 1',
            location: {
                lat: 42.69606740188051,
                lng: 23.33294092194868
            }
        }
    ];

    return (
        //TODO: Uncomment this:
        // <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP}>
            <GoogleMap
                mapContainerClassName={styles.map}
                zoom={11}
                center={defaultCenter}
                {
                    ...locations.map((x) => {
                        return (
                            <Marker key={x.name} position={defaultCenter} />
                        )
                    })
                }
            />
        </LoadScript>
    );
};

export default MapContainer;