import styles from './Footer.module.css';
import image_1 from "./logo.png";

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
                                <span className={styles.marginContainers}><a className={styles.buttonsDesign} href="/"><i className="fab fa-facebook-f"></i></a></span>
                                <span className={styles.marginContainers}><a className={styles.buttonsDesign} href="/"><i className="fab fa-youtube"></i></a></span>
                            </div>
                        </div>
                        <div className={styles.eachContainer}>
                            <h3 className={styles.titleContainer}>Site Links</h3>
                            <div className={styles.siteLinks}>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/">Home</a></i></span>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/all-services">Services</a></i></span>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/team">Team</a></i></span>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/features">Features</a></i></span>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/price">Pricing Plan</a></i></span>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/blog">Blog</a></i></span>
                                <span className={styles.marginContainers}><i className="fa fa-angle-right"><a className={styles.linksStyle} href="/about">About Us</a></i></span>
                            </div>
                        </div>
                        <div className={styles.eachContainer}>
                            <h3 className={styles.titleContainer}>Map</h3>
                            <div className={styles.mapContainer}>
                                <div id="map">
                                    <img src={image_1} alt="img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomFooterContainer}>
                <div className={styles.bottomFooterRow}>
                    <div className={styles.leftPartBottom}>
                        <p className={styles.bottomFooterP}>&copy; 2022 <a href="/">Buildoo</a> All Rights Reserved.</p>
                    </div>

                    <div className={styles.bottomRightContainer}>
                        <ul className={styles.ulContainer}>
                            <li className={styles.item}>
                                <a className={styles.eachItemDesign} href="/privacy">Privacy</a>
                            </li>
                            <li className={styles.item}>
                                <a className={styles.eachItemDesign} href="/terms">Terms</a>
                            </li>
                            <li className={styles.item}>
                                <a className={styles.eachItemDesign} href="/faqs">FAQs</a>
                            </li>
                            <li className={styles.item}>
                                <a className={styles.eachItemDesign} href="/help">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;