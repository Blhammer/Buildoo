import React, { useState, useEffect } from 'react';

import { deleteComment, findAllComments } from '../../services/requester';

import CommentList from '../CommentsList';

const AllComments = ({ data }) => {
    const [comments, setComments] = useState([]);
    const [deletedComment, setDeletedComment] = useState(false);

    useEffect(() => {
        findAllComments()
            .then(commentsData => {
                setComments(
                    commentsData.filter((currComment) =>
                        currComment.service === data._id
                    ));
                setDeletedComment(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, [deletedComment]);

    const deleteCommentButton = async (e) => {
        e.preventDefault();
        setDeletedComment(true);

        const id = e.target.value;

        await deleteComment({ id });
    }

    return (
        <>
            <CommentList
                comments={comments}
                button={{ remove: deleteCommentButton }}
            />
        </>
    )
}

export default AllComments;