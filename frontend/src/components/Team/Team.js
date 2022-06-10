import styles from './Team.module.css';

import image1 from './images/team-1.jpg';
import image2 from './images/team-2.png';
import image3 from './images/team-3.png';
import image4 from './images/team-4.png';

const Team = () => {
    return (
        <div className={styles.containerStart}>
            <div className={styles.containerStyle}>
                <div className={styles.titleTeam}>
                    <h1 className={styles.titleDesign}>Delivery Team</h1>
                    <h2 className={styles.secondTitle}>Meet Our Delivery Team</h2>
                </div>
                <div className={styles.imagesRow}>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src={image1} alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src={image1} alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src={image1} alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src={image1} alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className={styles.buttonsLinks} href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;