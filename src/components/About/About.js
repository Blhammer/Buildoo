import styles from './About.module.css';

import image1 from './images/about.jpg';
// import image1 from './images/about.jpg';
// import image1 from './images/about.jpg';

const About = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerStyle}>
                <div className={styles.titleTeam}>
                    <h1 className={styles.titleDesign}>About Us</h1>
                    <h2 className={styles.secondTitle}>Perfect &amp; Fast Building Services Provider</h2>
                </div>
                <div className={styles.leftRightRowElement}>
                    <div className={styles.eachElementStyle}>
                        <div className={styles.imageStyle}>
                            <img className={styles.imageDesign} src={image1} alt="img" />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textDesign}>Perfect &amp; Fast Building Services Provider</h1>
                        <p className={styles.textDesign}>- Buildoo is a Bulgaria-based, international construction services company and is a leader in the sector.</p>
                        <p className={styles.textDesign}>- The company has earned recognition for complex projects and helping their clients, employees and community for a better life.</p>
                        <p className={styles.textDesign}>- With a staff of 750 employees, the company completes $5 million of construction on 1700 projects each year.</p>
                    </div>
                </div>

                <div className={styles.middleRowElement}>
                    <div className={styles.eachElementStyle}>
                        <div className={styles.imageStyle}>
                            <img className={styles.imageDesign} src={image1} alt="img" />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textDesign}>Perfect &amp; Fast Building Services Provider</h1>
                        <p className={styles.textDesign}>- Buildoo is a Bulgaria-based, international construction services company and is a leader in the sector.</p>
                        <p className={styles.textDesign}>- The company has earned recognition for complex projects and helping their clients, employees and community for a better life.</p>
                        <p className={styles.textDesign}>- With a staff of 750 employees, the company completes $5 million of construction on 1700 projects each year.</p>
                    </div>
                </div>

                <div className={styles.leftRightRowElement}>
                    <div className={styles.eachElementStyle}>
                        <div className={styles.imageStyle}>
                            <img className={styles.imageDesign} src={image1} alt="img" />
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.textDesign}>Perfect &amp; Fast Building Services Provider</h1>
                        <p className={styles.textDesign}>- Buildoo is a Bulgaria-based, international construction services company and is a leader in the sector.</p>
                        <p className={styles.textDesign}>- The company has earned recognition for complex projects and helping their clients, employees and community for a better life.</p>
                        <p className={styles.textDesign}>- With a staff of 750 employees, the company completes $5 million of construction on 1700 projects each year.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
