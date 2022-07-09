import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerStyle}>
                <div className={styles.titleTeam}>
                    <h1 className={styles.titleDesign}>About Us</h1>
                </div>
                <div className={styles.leftRightRowElement}>
                    <div className={styles.eachElementStyle}>
                        <div className={styles.imageStyle}>
                            <img className={styles.imageDesign} src='/images/about-1.jpg' alt="img" />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textDesign}>Perfect and Fast Building Services Provider</h1>
                        <h4 className={styles.textDesign}>- Buildoo is a Bulgaria-based, international construction services company and is a leader in the sector.</h4>
                    </div>
                </div>

                <div className={styles.middleRowElement}>
                    <div className={styles.eachElementStyle}>
                        <div className={styles.imageStyle}>
                            <img className={styles.imageDesign} src='/images/about-2.jpg' alt="img" />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textDesign}>Always Fast Arriving Of Our Team and Excellent Deliveries</h1>
                        <h4 className={styles.textDesign}>- The company has earned recognition for complex projects and helping their clients, employees and community for a better life.</h4>
                    </div>
                </div>

                <div className={styles.leftRightRowElement}>
                    <div className={styles.eachElementStyle}>
                        <div className={styles.imageStyle}>
                            <img className={styles.imageDesign} src='/images/about-3.jpg' alt="img" />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textDesign}>Perfect &amp; Fast Building Services Provider</h1>
                        <h4 className={styles.textDesign}>- With a staff of 750 employees, the company completes $5 million of construction on 1700 projects each year.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
