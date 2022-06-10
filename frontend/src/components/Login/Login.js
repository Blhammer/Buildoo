import styles from './Login.module.css';

import image1 from './default.png';

const Login = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.imageDesign}>
                    <img src={image1}
                        className={styles.imageStyle} alt="image"
                    />
                </div>

                <div className={styles.formContainer}>
                    <form id="login-form" method="POST">
                        <p className={styles.loginText}>Login</p>

                        <div className={styles.emailDesign}>
                            <input type="email" id="email" className={styles.inputsStyle}
                                placeholder="Enter email" />
                            <label htmlFor="email"></label>
                        </div>

                        <div className={styles.passwordDesign}>
                            <input type="password" id="password" className={styles.inputsStyle}
                                placeholder="Enter password" />
                            <label htmlFor="password"></label>
                        </div>

                        <div className={styles.rememberMeDesign}>
                            <div className={styles.rememberMeStyle}>
                                <input className={styles.checkBox} type="checkbox" value="" id="checkbox" />
                                <label className={styles.rememberMeBox} htmlFor="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className={styles.forgotPass}>Forgot password?</a>
                        </div>

                        <div className={styles.loginButton}>
                            <button type="button" className={styles.loginButtonDesign}>Login</button>
                            <p className={styles.register}>Don't have an account?
                                <a href="/register"> Register </a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;