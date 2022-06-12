import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.rowDesign}>
                    <div className={styles.leftPart}>
                        <a href="/about"><small><span className={styles.contacts}><i className="fa fa-phone-alt"></i></span>Contact us: +359 813 17 3631</small></a>
                        <small className={styles.whiteLine}>|</small>
                        <a href="/about"><small><span className={styles.mail}><i className="fa fa-envelope"></i></span>buildoo@gmail.com</small></a>
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
                        <a className={styles.facebook} href="/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <small className={styles.whiteLine}>|</small>
                        <a className={styles.youTube} href="/">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;