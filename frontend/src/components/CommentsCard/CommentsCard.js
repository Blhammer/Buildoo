import React, { useContext } from 'react';

import styles from './CommentCard.module.css';

import UserContext from '../../contexts/Context';

const CommentCard = ({ data, button }) => {
    const context = useContext(UserContext);

    return (
        <div className={styles.infoDesign}>
            <h5>Author: {data.author}</h5>
            <div className={styles.content}>
                <p>{data.content}</p>
            </div>

            {
                context.isLoggedIn
                    ?
                    <button
                        type='button'
                        className={styles.delete}
                        value={data._id}
                        onClick={button.remove}>
                        Delete
                    </button>
                    :
                    null
            }
        </ div>
    );
};

export default CommentCard;