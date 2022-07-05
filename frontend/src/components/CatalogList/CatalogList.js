import CatalogCard from "../CatalogCard/CatalogCard";

import styles from './CatalogList.module.css';

const CatalogList = ({ cards, button }) => {
    return (
        <>
            {cards.length > 0
                ? (
                    cards.map((card) => {
                        return <CatalogCard key={card._id} data={card} button={button} />
                    })
                )
                : <p className={styles.emptyList}>No Services in database</p>
            }
        </>
    );
}

export default CatalogList;