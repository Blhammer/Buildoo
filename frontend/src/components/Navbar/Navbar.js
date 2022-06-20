import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link, Route } from 'react-router-dom';

import UserContext from '../../contexts/Context';

import styles from './Navbar.module.css';

const Navbar = () => {
    const context = useContext(UserContext);
    const navigate = useNavigate();

    const { isLoggedIn, isContextAdmin } = context;

    const onLogout = () => {
        context.logout();
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navbarStyle}>
                <Link className={styles.titleContainer} to="/">
                    <h1 className={styles.titleDesign}><i className={styles.titleMargin}></i>Buildoo</h1>
                </Link>
                <div className={styles.mainNavbar}>
                    <div className={styles.mainNavbarDesign}>
                        <div className={styles.centerNavbarDesign}>
                            <Link className={styles.centralNavbarButtons} to='/'>Home</Link>
                            <Link className={styles.centralNavbarButtons} to='/all-services'>Services</Link>
                            <Link className={styles.centralNavbarButtons} to='/team'>Team</Link>
                            <Link className={styles.centralNavbarButtons} to='/price'>Price</Link>
                            <Link className={styles.centralNavbarButtons} to='/blog'>Blog</Link>
                            <Link className={styles.centralNavbarButtons} to='/about'>About Us</Link>
                        </div>

                        {isLoggedIn ?
                            <div className={styles.navbarUser}>
                                {isContextAdmin
                                    ? <Link className={styles.adminButton} to='/admin-panel'>Admin</Link>
                                    : null}

                                <Link className={styles.userButtons} to='/liked'>Liked</Link>
                                <Link className={styles.userButtons} to='/my-services'>My Services</Link>
                                <Link className={styles.userButtons} to='/' onClick={onLogout}>Logout</Link>
                            </div>
                            :
                            <div className={styles.navbarUser}>
                                <Link className={styles.userButtons} to='/login'>Login</Link>
                                <Link className={styles.userButtons} to='/register'>Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;