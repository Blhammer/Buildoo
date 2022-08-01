import { useContext, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { makeComment } from '../../Redux/actions/post';

import styles from './CommentInput.module.css';

import UserContext from '../../contexts/Context';
import { createComment } from '../../services/requester';

const CommentInput = ({ data }) => {
    const context = useContext(UserContext);
    const dispatch = useDispatch();
    const reduxErrors = useSelector((state) => state.errors);

    const [content, setContent] = useState('');
    const [showElement, setShowElement] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(
            function () {
                setShowElement(false);
            }, 5000);
    });

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
        if (createdComment.content === '') {
            console.error('Add Comment Error!');
            return;
        }

        await dispatch(
            makeComment(context.user._id)
        );
        return toast.success("Comment added Successfully!");
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
                            ? <>
                                <p className={styles.errorStyle}>{error}</p>
                                {reduxErrors.content}
                            </>
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

CommentInput.propTypes = {
    makeComment: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { makeComment })(CommentInput); 