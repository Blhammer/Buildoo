import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbarStyle}>
                <a href="/" className={styles.titleContainer}>
                    <h1 className={styles.titleDesign}><i className={styles.titleMargin}></i>Buildoo</h1>
                </a>
                <div className={styles.mainNavbar}>
                    <div className={styles.mainNavbarDesign}>
                        <div className={styles.centerNavbarDesign}>
                            <a href="/" className={styles.centralNavbarButtons}>Home</a>
                            <a href="/all-services" className={styles.centralNavbarButtons}>Services</a>
                            <a href="/team" className={styles.centralNavbarButtons}>Team</a>
                            <a href="/price" className={styles.centralNavbarButtons}>Price</a>
                            <a href="/blog" className={styles.centralNavbarButtons}>Blog</a>
                            <a href="/about" className={styles.centralNavbarButtons}>About Us</a>
                        </div>

                        <div className={styles.navbarUser}>
                            {/* <a href="/login" className={styles.userButtons}>Login</a>
                            <a href="/register" className={styles.userButtons}>Register</a> */}

                            <a href="/admin-panel" className={styles.adminButton}>Admin</a>

                            <a href="/liked" className={styles.userButtons}>Liked</a>
                            <a href="/my-services" className={styles.userButtons}>My Posts</a>
                            <a href="/logout" className={styles.userButtons}>Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;