import {Posts} from "../../api/api";

const FETCH_CURRENT_POST = 'FETCH_CURRENT_POST'
const FETCH_CURRENT_POST_SUCCESS = 'FETCH_CURRENT_POST_SUCCESS'
const FETCH_CURRENT_POST_ERROR = 'FETCH_CURRENT_POST_ERROR'

const initialState = {
    currentPost: {},
    isFetching: true,
    error: null,
}

export const currentPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_POST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_CURRENT_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentPost: action.payload,
                error: null,
            }
        case FETCH_CURRENT_POST_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const fetchCurrentPost = () => ({type: FETCH_CURRENT_POST})
export const fetchCurrentPostSuccess = (posts) => ({type: FETCH_CURRENT_POST_SUCCESS, payload: posts})
export const fetchCurrentPostError = (error) => ({type: FETCH_CURRENT_POST_ERROR, payload: error})


export const getCurrentPost = (id) => async (dispatch) => {
    try {
        dispatch(fetchCurrentPost())
        let data = await Posts.getCurrentPost(id)
        dispatch(fetchCurrentPostSuccess(data))
    } catch (e) {
        dispatch(fetchCurrentPostError(e.message))
    }
}
