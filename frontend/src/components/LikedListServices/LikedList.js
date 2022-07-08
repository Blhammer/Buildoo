import LikedCard from '../LikedCardServices';

import styles from './LikedList.module.css';

const LikedList = ({ cards }) => {
    return (
        <>
            {cards.length > 0
                ? (
                    cards.map((card) => {
                        return <LikedCard key={card._id} data={card} />
                    })
                )
                : <p className={styles.emptyList}>No Liked Services in database</p>
            }
        </>
    );
};

export default LikedList;