import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import MapFooter from '../Map';

const Footer = () => {
    return (
        <>
            <div className={styles.containerAbove}>
                <div className={styles.containerAboveDirection}>
                    <div className={styles.containerAboveDirectionStyle}>
                        <div className={styles.eachContainer}>
                            <h3 className={styles.titleContainer}>About Buildoo</h3>
                            <p><span className={styles.marginContainers}><i className="fa fa-map-marker-alt"></i></span>Sofia, Bulgaria</p>
                            <p><span className={styles.marginContainers}><i className="fa fa-phone-alt"></i></span>+359 813 17 3631</p>
                            <p><span className={styles.marginContainers}><i className="fa fa-envelope"></i></span>buildoo@gmail.com</p>
                            <div className={styles.buttonsDiv}>
                                <Link className={styles.marginContainers} to='/'>
                                    <span className={styles.buttonsDesign}>
                                        <i className="fab fa-facebook-f"></i>
                                    </span>
                                </Link>
                                <Link className={styles.marginContainers} to='/'>
                                    <span className={styles.buttonsDesign}>
                                        <i className="fab fa-youtube"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.eachContainer}>
                            <h3 className={styles.titleContainer}>Site Links</h3>
                            <div className={styles.siteLinks}>
                                <Link className={styles.linksStyle} to='/'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>Home
                                </Link>
                                <Link className={styles.linksStyle} to='/all-services'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>Services
                                </Link>
                                <Link className={styles.linksStyle} to='/team'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>Team
                                </Link>
                                <Link className={styles.linksStyle} to='/features'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>Features
                                </Link>
                                <Link className={styles.linksStyle} to='/price'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>Pricing Plan
                                </Link>
                                <Link className={styles.linksStyle} to='/blog'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>Blog
                                </Link>
                                <Link className={styles.linksStyle} to='/about'>
                                    <i className="fa fa-angle-right"><span className={styles.marginContainers}></span></i>About Us
                                </Link>
                            </div>
                        </div>
                        <div className={styles.eachContainer}>
                            <div className={styles.mapContainer}>
                                // TODO: Uncomment this:
                                {/* <MapFooter /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomFooterContainer}>
                <div className={styles.bottomFooterRow}>
                    <div className={styles.leftPartBottom}>
                        <p className={styles.bottomFooterP}>&copy; 2022 <Link to="/">Buildoo</Link> All Rights Reserved.</p>
                    </div>

                    <div className={styles.bottomRightContainer}>
                        <ul className={styles.ulContainer}>
                            <li className={styles.item}>
                                <Link className={styles.eachItemDesign} to="/">Privacy</Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.eachItemDesign} to="/">Terms</Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.eachItemDesign} to="/">FAQs</Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.eachItemDesign} to="/">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;