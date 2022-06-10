import styles from './Register.module.css';
import image1 from './default.png';

const Register = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainContainerStyle}>
                    <div className={styles.cardBody}>
                        <div className={styles.rowElements}>
                            <div className={styles.rowElementsDesign}>
                                <p className={styles.title}>Sign up</p>
                                <div className={styles.signUpContainer}>
                                    <form id="register-form" method="POST">
                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-user"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="text" id="fName" className={styles.formControl} placeholder="First name" />
                                                <label htmlFor='fName'></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-user"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="text" id="lName" className={styles.formControl} placeholder="Last name" />
                                                <label htmlFor='lName'></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-envelope"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="email" id="Email" className={styles.formControl} placeholder="Your Email" />
                                                <label htmlFor="Email"></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-lock"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="password" id="Password" className={styles.formControl} placeholder="Your Password" />
                                                <label htmlFor="Password"></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-key"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="password" id="repass" className={styles.formControl} placeholder="Repeat Password" />
                                                <label htmlFor="repass"></label>
                                            </div>
                                        </div>

                                        <div className={styles.termsPosition}>
                                            <span className={styles.inputsStyle}><input className={styles.formCheck} type="checkbox" value="" id="Terms" /></span>
                                            <div className={styles.textStyle}>
                                                <label htmlFor="Terms">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className={styles.registerButton}>
                                            <button type="button" className={styles.registerButtonStyle}>Register</button>
                                        </div>

                                        <div className={styles.account}>
                                            <p>You have an account? <a href="/login">Login</a></p>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className={styles.image}>
                                <img src={image1}
                                    className={styles.imageStyle} alt="Sample image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;