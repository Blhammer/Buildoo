import { useNavigate } from 'react-router';
import React, { useState, useContext } from 'react';

import styles from './Register.module.css';
import image1 from './default.png';

// import * as authService from '../../services/auth';
// import { useAuthContext } from '../../contexts/Auth';
import UserContext from '../../contexts/Context';
import { userRegister } from '../../services/requester';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');

    const navigate = useNavigate();
    const context = useContext(UserContext);

    const onRegisterHandler = async () => {
        const body = {
            firstName,
            lastName,
            email,
            password
        }

        const user = await userRegister(body);
        console.log(user);

        if (user) {
            context.login(user);
            navigate('/');
        } 
        else {
            console.error("Invalid email or password!");
        }
    }

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        onRegisterHandler();
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainContainerStyle}>
                    <div className={styles.cardBody}>
                        <div className={styles.rowElements}>
                            <div className={styles.rowElementsDesign}>
                                <p className={styles.title}>Sign up</p>
                                <div className={styles.signUpContainer}>

                                    <form onSubmit={registerSubmitHandler}>
                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-user"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="text" id="firstName" className={styles.formControl} placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                                <label htmlFor='firstName'></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-user"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="text" id="lastName" className={styles.formControl} placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                                <label htmlFor='lastName'></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-envelope"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="email" id="Email" className={styles.formControl} placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <label htmlFor="Email"></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-lock"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="password" id="password" className={styles.formControl} placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <label htmlFor="password"></label>
                                            </div>
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-key"></i></span>
                                            <div className={styles.inputsDesign}>
                                                <input type="password" id="repass" className={styles.formControl} placeholder="Repeat Password" value={repass} onChange={(e) => setRepass(e.target.value)} />
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
                                            <button type="submit" className={styles.registerButtonStyle}>Register</button>
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