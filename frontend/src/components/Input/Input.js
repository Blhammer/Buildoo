import React from 'react';
import styles from './Input.module.css';

function Input({ name, type, placeholder, value, onChange, label }) {
    return (
        <div className={styles.formDesign}>
            <input
                name={name}
                type={type}
                className={styles.inputsStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
            {label ? <label htmlFor={name}>{label}</label> : null}
        </div>
    )
}

export default Input;