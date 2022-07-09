import styles from './Features.module.css';

const Features = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerStyle}>
                <div className={styles.rowStyle}>
                    <div className={styles.imageDesign}>
                        <img className={styles.imageStyle} src='/images/feature.jpg' alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                        <h1 className={styles.firstTitle}>Why Choose Us</h1>
                        <h1 className={styles.secondTitle}>Faster, Safe and Trusted Construction Services</h1>
                        <ul className={styles.skillsContainer}>
                            <h2><li><span className={styles.eachSkillLi}><i className="far fa-dot-circle"></i></span>Best In Industry</li></h2>
                            <h2><li><span className={styles.eachSkillLi}><i className="far fa-dot-circle"></i></span>Emergency Services</li></h2>
                            <h2><li><span className={styles.eachSkillLi}><i className="far fa-dot-circle"></i></span>24/7 Customer Support</li></h2>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;