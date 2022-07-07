import { useContext, useEffect, useState } from 'react';
import styles from './CommentInput.module.css';

import UserContext from '../../contexts/Context';

import { createComment } from '../../services/requester';

const CommentInput = ({ data }) => {
    const context = useContext(UserContext);

    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
        setTimeout(
            function () {
                setShowElement(false);
            }, 5000);
    });

    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const validateCommentForm = () => {
        const checker = true;
        setError(null);

        if (content === '' || content.length < 1 || content.length > 300) {
            setError('Your Comment must be between 1 and 300 characters!');
            setShowElement(true);
            return;
        }

        return checker;
    }

    const create = async () => {
        setContent('');

        const body = {
            author: context.user.firstName,
            content,
            owner: context.user._id,
            service: data._id
        }
        const createdComment = await createComment(body);
        if (!createdComment) {
            console.error('Add Comment Error!');
            return;
        }
    };

    const createCommentFormHandler = (e) => {
        e.preventDefault();

        let validateChecker = validateCommentForm();

        if (validateChecker) {
            create();
        }
    };

    return (
        <>
            {context.isLoggedIn
                ?
                <article className={styles.createComment}>
                    <h4 className={styles.comments}>Add new comment:</h4>
                    <form className={styles.formStyle} onSubmit={createCommentFormHandler}>
                        {showElement
                            ? <p className={styles.errorStyle}>{error}</p>
                            : null
                        }
                        <textarea
                            name="comment"
                            placeholder="Comment..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button
                            className={styles.buttonSubmit}
                            type="submit"
                            value="Add Comment"
                        >
                            Add Comment
                        </button>
                    </form>
                </article>
                :
                null
            }
        </>
    )
}

export default CommentInput; 