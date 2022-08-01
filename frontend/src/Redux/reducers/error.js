import { GET_ERRORS } from '../actions/postTypes';

const initialState = {};

export default function errorsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}