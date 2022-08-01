import { ADD_COMMENT } from '../actions/postTypes';

const initialState = {
    comments: []
};

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            state = {
                ...state,
                comments: action.payload.comments.map(comment =>
                    comment.service === action.payload.id
                        ? comment.comments.push(action.payload.comments)
                        : comment
                )
            };
            return state;
        default:
            return state;
    }
}