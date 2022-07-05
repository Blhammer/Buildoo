import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';
import image1 from './default.png';

import Input from '../Input/Input';

import UserContext from '../../contexts/Context';
import { userLogin } from '../../services/requester';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState(null);

    const context = useContext(UserContext);
    const navigate = useNavigate();

    //TODO: set to 8:
    const disableButton = !email || password.length < 6;

    const loginValidator = () => {

    };

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setErrorEmail('Invalid email or password!');
            return;
        }

        const user = await userLogin({ email, password });
        if (user) {
            context.login(user);
            navigate('/');
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
                                <img src={image1}
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
                                        errorInput={errorEmail}
                                        name="password"
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <div className={styles.rememberMeDesign}>
                                        <Link className={styles.forgotPass} to="/">Forgot password?</Link>
                                    </div>

                                    <div className={styles.loginButton}>
                                        <button
                                            type="submit"
                                            className={styles.loginButtonDesign}
                                            disabled={disableButton}
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