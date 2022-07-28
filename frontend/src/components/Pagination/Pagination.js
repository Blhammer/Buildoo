import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({ activePage, pages, setActivePage }) => {

    const getPages = () => {
        let elements = [];
        for (let i = 1; i <= pages; i++) {
            elements.push(
                <div
                    className={`${activePage === i ? styles.active : ''}`}
                    onClick={() => setActivePage(i)}
                    key={i}
                >
                    {i < 10 ? `0${i}` : i}
                </div>
            );
        }
        return elements;
    };

    return (
        <div className={styles.pagination}>
            <div
                className={`${styles.paginationArrow} ${activePage === 1 ? styles.inactive : ''}`}
                onClick={() =>
                    activePage !== 1 && setActivePage((page) => page - 1)
                }
            >
                <i className="fas fa-angle-left"></i>
            </div>

            {getPages()}

            <div
                className={`${styles.paginationArrow} ${activePage === pages ? styles.inactive : ''}`}
                onClick={() =>
                    activePage !== pages && setActivePage((page) => page + 1)
                }
            >
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    activePage: PropTypes.number,
    pages: PropTypes.number,
    setActivePage: PropTypes.func,
};

export default Pagination;