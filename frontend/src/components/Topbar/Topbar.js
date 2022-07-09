import { Link } from 'react-router-dom';

import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.rowDesign}>
                    <div className={styles.leftPart}>
                        <Link to="/about"><small><span className={styles.contacts}><i className="fa fa-phone-alt"></i></span>Contact us: +359 813 17 3631</small></Link>
                        <small className={styles.whiteLine}>|</small>
                        <Link to="/about"><small><span className={styles.mail}><i className="fa fa-envelope"></i></span>buildoo@gmail.com</small></Link>
                    </div>
                </div>

                <div className={styles.textLine}>
                    <div className={styles.textLineDesign}>
                        <div className={styles.textLineAnimation}>
                            <div className={styles.items}>Warning! Lowest Prices in the Market!</div>
                            <div className={styles.items}>Best In Industry</div>
                            <div className={styles.items}>Emergency Services</div>
                            <div className={styles.items}>24/7 Customer Support</div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightPart}>
                    <div className={styles.rightPartDesign}>
                        <Link className={styles.facebook} to="/">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <small className={styles.whiteLine}>|</small>
                        <Link className={styles.youTube} to="/">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;