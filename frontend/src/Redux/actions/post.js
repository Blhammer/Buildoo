import { findAllComments } from '../../services/requester';
import { GET_ERRORS } from '../actionTypes/post';

const addComment = (data) => ({
    type: "ADD_COMMENT",
    payload: data
});

export const makeComment = (id) => (dispatch) => {
    findAllComments()
        .then(comment => {
            dispatch(addComment({ id, comments: comment }));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        });
};