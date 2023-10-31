import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from "./reducers/postsReducer";
import {currentPostReducer} from "./reducers/currentPostReducer";
import {authorReducer} from "./reducers/authorReducer";
import {commentsReducer} from "./reducers/commentsReducer";
import {filterReducer} from "./reducers/filterReducer";

const reducers = combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
    author: authorReducer,
    comments: commentsReducer,
    filter: filterReducer,
})
export const store = createStore(reducers, applyMiddleware(thunk))