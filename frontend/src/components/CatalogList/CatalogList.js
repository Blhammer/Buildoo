import CatalogCard from "../CatalogCard";

import styles from './CatalogList.module.css';

const CatalogList = ({ cards }) => {
    return (
        <>
            {cards.length > 0
                ? (
                    cards.map((card) => {
                        return <CatalogCard key={card._id} data={card} />
                    })
                )
                : <p className={styles.emptyList}>No Services in database</p>
            }
        </>
    )
};

export default CatalogList;