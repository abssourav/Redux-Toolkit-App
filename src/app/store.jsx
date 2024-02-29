import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsCounter from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        posts: postsCounter,
        counter: counterReducer
    }
});

export default store;
