import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './Forgot.module.css';
import Input from '../Input/Input';

import { passwordUpdate, findUserByEmail } from '../../services/requester';

const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorCurrentPassword, setErrorCurrentPassword] = useState(null);
    const [errorNewPassword, setErrorNewPassword] = useState(null);
    const [errorRepeatedPassword, setErrorRepeatedPassword] = useState(null);

    const navigate = useNavigate();

    const passwordChangeValidator = () => {
        let checker = true;

        setErrorCurrentPassword(null);
        setErrorNewPassword(null);
        setErrorRepeatedPassword(null);

        if (email === '') {
            setErrorEmail('Invalid email or password!');
            checker = false;
        }
        if (currentPassword === '' || currentPassword.length < 8 || currentPassword.length > 60) {
            setErrorCurrentPassword('Wrong password!');
            checker = false;
        }
        if (newPassword === '' || newPassword.length < 8 || newPassword.length > 60) {
            setErrorNewPassword('Your password must be between 8 and 16 characters!');
            checker = false;
        }
        if (newPassword !== repeatedPassword) {
            setErrorRepeatedPassword('Your password and repeated password must be the same!');
            checker = false;
        }

        return checker;
    }

    const changePasswordSubmitHandler = async (e) => {
        e.preventDefault();
        
        let isCheckerValid = passwordChangeValidator();
        if (!isCheckerValid) {
            console.error('Invalid data!');
            return;
        }

        const preGetUser = await findUserByEmail(email);
        if (!preGetUser || preGetUser.length === 0) {
            setErrorEmail('Invalid data!');
            return;
        }

        const user = preGetUser[0];

        const body = {
            user,
            currentPassword,
            newPassword
        };

        const result = await passwordUpdate(body);
        if (result) {
            navigate('/login');
        }
        else {
            setErrorEmail('Invalid data!');
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
                                <p className={styles.loginText}>Change Password</p>
                                <form id="login-form" method="POST" onSubmit={changePasswordSubmitHandler}>
                                    <Input
                                        errorInput={errorEmail}
                                        name="email"
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Input
                                        errorInput={errorCurrentPassword}
                                        name="password"
                                        type="password"
                                        placeholder="Current Password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                    <Input
                                        errorInput={errorNewPassword}
                                        name="password"
                                        type="password"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <Input
                                        errorInput={errorRepeatedPassword}
                                        name="password"
                                        type="password"
                                        placeholder="Repeat New Password"
                                        value={repeatedPassword}
                                        onChange={(e) => setRepeatedPassword(e.target.value)}
                                    />
                                    <div className={styles.loginButton}>
                                        <button
                                            type="submit"
                                            className={styles.loginButtonDesign}
                                        >
                                            Save
                                        </button>
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

export default ChangePassword;