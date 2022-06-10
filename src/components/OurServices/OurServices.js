import styles from './OurServices.module.css';

const Services = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.servicesContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.titleStyle}>How can we come to you</h2>
                    <h1 className={styles.secondTitle}>Best Repairing and Maintenance Services</h1>
                </div>
                <div className={styles.rowContainer}>
                    <div className={styles.eachService}>
                        <div className={styles.eachServiceDesign}>
                            <span className={styles.iconsStyle}><i className="fa fa-plane"></i></span>
                            <h2 className={styles.vehicle}>Plane</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    </div>
                    <div className={styles.eachService}>
                        <div className={styles.eachServiceDesign}>
                            <span className={styles.iconsStyle}><i className="fa fa-ship"></i></span>
                            <h2 className={styles.vehicle}>Boat</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    </div>
                    <div className={styles.eachService}>
                        <div className={styles.eachServiceDesign}>
                            <span className={styles.iconsStyle}><i className="fa fa-truck"></i></span>
                            <h2 className={styles.vehicle}>Bus</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    </div>
                    <div className={styles.eachService}>
                        <div className={styles.eachServiceDesign}>
                            <span className={styles.iconsStyle}><i className="fa fa-car"></i></span>
                            <h2 className={styles.vehicle}>Car</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;