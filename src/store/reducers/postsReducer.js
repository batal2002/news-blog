import {Posts} from "../../api/api";

const FETCH_POSTS = 'FETCH_POSTS'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS'

const initialState = {
    postsList: [],
    userPostList: [],
    isFetching: true,
    error: null,
    limit: 0,
    skip: 0,
    total: 0,
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: [...state.postsList, ...action.payload.posts],
                limit: action.payload.limit,
                skip: action.payload.skip,
                total: action.payload.total
            }
        case FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userPostList: action.payload.posts,
                limit: action.payload.limit,
                skip: action.payload.skip,
                total: action.payload.total
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const fetchPosts = () => ({type: FETCH_POSTS})
export const fetchPostsSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, payload: posts})
export const fetchUserPostsSuccess = (posts) => ({type: FETCH_USER_POSTS_SUCCESS, payload: posts})
export const fetchPostsError = (error) => ({type: FETCH_POSTS_ERROR, payload: error})

export const getPosts = (limit, skip) => async (dispatch) => {
    try {
        dispatch(fetchPosts())
        let data = await Posts.getPosts(limit, skip)
        dispatch(fetchPostsSuccess(data))
    } catch (e) {
        dispatch(fetchPostsError(e.message))
    }
}

export const getUserPosts = (id) => async (dispatch) => {
    try {
        dispatch(fetchPosts())
        let data = await Posts.getUserPosts(id)
        dispatch(fetchUserPostsSuccess(data))
    } catch (e) {
        dispatch(fetchPostsError(e.message))
    }
}

