import MyServicesCard from '../MyServicesCard/MyServicesCard';

import styles from './MyServicesList.module.css';

const ServicesList = ({ services, button }) => {
    return (
        <>
            {services.length > 0
                ? (
                    services.map((service) => {
                        return <MyServicesCard key={service._id} data={service} button={button} />
                    })
                )
                : <p className={styles.emptyList}>No Uploaded services</p>
            }
        </>
    );
}

export default ServicesList;