import { useNavigate } from 'react-router';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import styles from './Register.module.css';

import Input from '../Input';
import UserContext from '../../contexts/Context';
import { userRegister } from '../../services/requester';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');

    const [errorFirstName, setErrorFirstName] = useState(null);
    const [errorLastName, setErrorLastName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorRepass, setErrorRepass] = useState(null);

    const navigate = useNavigate();
    const context = useContext(UserContext);

    const registerFormValidation = () => {
        let checker = true;
        setErrorFirstName(null);
        setErrorLastName(null);
        setErrorEmail(null);
        setErrorPassword(null);
        setErrorRepass(null);

        if (firstName === '' || firstName.length < 3 || firstName.length > 20) {
            setErrorFirstName('Your first name must be between 3 and 20 characters!');
            checker = false;
        }
        if (lastName === '' || lastName.length < 3 || lastName.length > 20) {
            setErrorLastName('Your last name must be between 3 and 20 characters!');
            checker = false;
        }
        if (email === '' || !email.match(/^([a-z0-9.]{3,25})@([a-z]{3,6}).([a-z]{2,5}$)/g)) {
            setErrorEmail('Your email address is not valid');
            checker = false;
        }
        if (password === '' || password.length < 8 || password.length > 60) {
            setErrorPassword('Your password must be between 8 and 16 characters!');
            checker = false;
        }
        if (password !== repass) {
            setErrorRepass('Your password and repeated password must be the same!');
            checker = false;
        }

        return checker;
    }

    const onRegisterHandler = async (e) => {
        const body = {
            firstName,
            lastName,
            email,
            password
        }

        const user = await userRegister(body);
        if (user) {
            context.login(user);
            navigate('/');
            toast.success(`Successful registration ${firstName} ${lastName}`);
        } else {
            console.error("Invalid email or password!");
        }
    }

    const registerFormSubmitHandler = (e) => {
        e.preventDefault();

        let isCheckerValid = registerFormValidation();
        if (isCheckerValid) {
            onRegisterHandler();
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerDesign}>
                <div className={styles.mainContainerStyle}>
                    <div className={styles.cardBody}>
                        <div className={styles.rowElements}>
                            <div className={styles.image}>
                                <img src='/images/default.png'
                                    className={styles.imageStyle}
                                    alt="img"
                                />
                            </div>
                            <div className={styles.rowElementsDesign}>
                                <p className={styles.title}>Sign up</p>
                                <div className={styles.signUpContainer}>

                                    <form method='POST' onSubmit={registerFormSubmitHandler}>
                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-user"></i></span>
                                            <Input
                                                errorInput={errorFirstName}
                                                type="text"
                                                id="firstName"
                                                placeholder="First name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-user"></i></span>
                                            <Input
                                                errorInput={errorLastName}
                                                type="text"
                                                id="lastName"
                                                className={styles.formControl}
                                                placeholder="Last name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-envelope"></i></span>
                                            <Input
                                                errorInput={errorEmail}
                                                type="email"
                                                id="Email"
                                                className={styles.formControl}
                                                placeholder="Your Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-lock"></i></span>
                                            <Input
                                                errorInput={errorPassword}
                                                type="password"
                                                id="password"
                                                className={styles.formControl}
                                                placeholder="Your Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        <div className={styles.eachFormInput}>
                                            <span className={styles.inputsStyle}><i className="fas fa-key"></i></span>
                                            <Input
                                                errorInput={errorRepass}
                                                type="password"
                                                id="repass"
                                                className={styles.formControl}
                                                placeholder="Repeat Password"
                                                value={repass}
                                                onChange={(e) => setRepass(e.target.value)}
                                            />
                                        </div>

                                        <div className={styles.registerButton}>
                                            <button
                                                type="submit"
                                                className={styles.registerButtonStyle}
                                            >
                                                Register
                                            </button>
                                        </div>

                                        <div className={styles.account}>
                                            <p>You have an account?
                                                <Link to="/login" className={styles.loginStyle}>
                                                    Login
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
        </div>
    );
}

export default Register;