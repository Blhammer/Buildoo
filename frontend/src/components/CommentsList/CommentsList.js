import { useContext } from 'react';

import CommentCard from '../CommentsCard';
import UserContext from '../../contexts/Context';

import styles from './CommentList.module.css';

const CommentList = ({ comments, button }) => {
    const context = useContext(UserContext);

    return (
        <>
            {comments.length > 0
                ? (
                    comments.map((comment) => {
                        return <CommentCard key={comment._id} data={comment} button={button} />
                    })
                )
                :
                <>
                    {
                        context.isLoggedIn
                            ? <p className={styles.emptyList}>No Comments for the service! Be the first one!</p>
                            : null
                    }
                </>
            }
        </>
    );
}

export default CommentList;