import { Link } from 'react-router-dom';

import styles from './Team.module.css';

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
                            <img className={styles.imageTop} src='/images/person-1.jpg' alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Leo Bright</h5>
                                    <span>CEO</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src='/images/person-2.jpg' alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Anthony Philip</h5>
                                    <span>Manager</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src='/images/person-3.jpg' alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Olivia Stewart</h5>
                                    <span>Designer</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachImage}>
                        <div className={styles.eachImageDesign}>
                            <img className={styles.imageTop} src='/images/person-4.jpg' alt="img" />
                            <div className={styles.eachImageStyle}>
                                <div className={styles.textStyle}>
                                    <h5 className={styles.nameBolder}>Max Jackson</h5>
                                    <span>Forklift Driver</span>
                                </div>
                                <div className={styles.iconsContainers}>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link className={styles.buttonsLinks} to="/"><i className="fab fa-instagram"></i></Link>
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