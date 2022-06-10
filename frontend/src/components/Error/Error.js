import styles from './Error.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <h1>404</h1><p>We couldn't find this page!</p>
            </div>

            <div className={styles.animation}></div>
        </div>
    );
}

export default ErrorPage;