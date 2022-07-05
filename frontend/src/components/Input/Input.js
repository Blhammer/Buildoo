import React from 'react';
import styles from './Input.module.css';

function Input({ name, errorInput, type, placeholder, value, onChange, label }) {
    return (
        <div className={styles.formDesign}>
            <div className={styles.errorMessage}>
                <p>{errorInput}</p>
            </div>
            {label ? <label htmlFor={name}>{label}</label> : null}
            <input
                name={name}
                type={type}
                className={errorInput ? styles.errorMsgBox : styles.inputsStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete='on' />
        </div>
    )
}

export default Input;