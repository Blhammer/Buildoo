import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerStyle}>
                <h1 className={styles.textStyleFirst}>Perfect and Fast</h1>
                <h1 className={styles.textStyleSecond}>Building Services</h1>
                <div className={styles.buttonBookHere}>
                    <button className={styles.buttonBookHereStyle}>Book Here</button>
                </div>
            </div>
        </div>
    );
}

export default Header;