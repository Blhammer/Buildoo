import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import styles from './Login.module.css';

import Input from '../Input/Input';

import UserContext from '../../contexts/Context';
import { userLogin, findUserByEmail } from '../../services/requester';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);

    const context = useContext(UserContext);
    const navigate = useNavigate();

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setErrorEmail('Invalid email or password!');
            return;
        }

        if (password.length < 8) {
            setErrorPassword('Your password must be greater than 8 characters!');
            return;
        }

        setErrorPassword(null);

        const preGetUser = await findUserByEmail(email);
        if (!preGetUser || preGetUser.length === 0) {
            setErrorEmail('Invalid email or password!');
            return;
        }

        const user = await userLogin({ email, password });
        if (user) {
            context.login(user);
            navigate('/');
            toast.success(`Hello ${email}`);
        }
        else {
            setErrorEmail('Invalid email or password!');
            return;
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainContainerStyle}>
                    <div className={styles.cardBody}>
                        <div className={styles.rowElements}>

                            <div className={styles.imageDesign}>
                                <img src='/images/default.png'
                                    className={styles.imageStyle}
                                    alt="img"
                                />
                            </div>

                            <div className={styles.formContainer}>
                                <form id="login-form" method="POST" onSubmit={loginSubmitHandler}>
                                    <p className={styles.loginText}>Login</p>

                                    <Input
                                        errorInput={errorEmail}
                                        name="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <Input
                                        errorInput={errorPassword}
                                        name="password"
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <div className={styles.rememberMeDesign}>
                                        <Link className={styles.forgotPass} to="/forgot-password">Forgot password?</Link>
                                    </div>

                                    <div className={styles.loginButton}>
                                        <button
                                            type="submit"
                                            className={styles.loginButtonDesign}
                                        >
                                            Login
                                        </button>

                                        <p className={styles.register}>
                                            Don't have an account?
                                            <Link to="/register" className={styles.registerStyle}>
                                                Register
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;