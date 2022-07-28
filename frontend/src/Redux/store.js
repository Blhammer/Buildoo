import { configureStore } from "@reduxjs/toolkit";

import commentReducer from './reducers/post';
import errorsReducer from './reducers/error';

const store = configureStore({
    reducer: {
        comments: commentReducer,
        errors: errorsReducer
    }
});

export default store;