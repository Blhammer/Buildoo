import { useNavigate } from 'react-router';
import React, { useState, useContext } from 'react';

import styles from './Login.module.css';
import image1 from './default.png';

import Input from '../Input/Input';

import UserContext from '../../contexts/Context';
import { userLogin } from '../../services/requester';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(UserContext);
    const navigate = useNavigate();

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            console.error('Invalid email or password!');
            return;
        }
        const user = await userLogin({ email, password });
        if (user) {
            context.login(user);
            navigate('/');
        }
        else {
            console.error('Invalid email or password!');
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.imageDesign}>
                    <img src={image1}
                        className={styles.imageStyle} alt="image"
                    />
                </div>

                <div className={styles.formContainer}>
                    <form id="login-form" method="POST" onSubmit={loginSubmitHandler}>
                        <p className={styles.loginText}>Login</p>

                        <div className={styles.formDesign}>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email"></label>
                        </div>

                        <div className={styles.formDesign}>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password"></label>
                        </div>

                        <div className={styles.rememberMeDesign}>
                            <div className={styles.rememberDiv}>
                                <input className={styles.checkBox} type="checkbox" value="" id="checkbox" />
                                <label className={styles.rememberMeBox} htmlFor="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className={styles.forgotPass}>Forgot password?</a>
                        </div>

                        <div className={styles.loginButton}>
                            <button type="submit" className={styles.loginButtonDesign}>Login</button>
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