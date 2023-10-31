import {User} from "../../api/api";

const FETCH_AUTHOR = 'FETCH_AUTHOR'
const FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS'
const FETCH_AUTHOR_ERROR = 'FETCH_AUTHOR_ERROR'

const initialState = {
    authorInfo: {},
    isFetching: true,
    error: null,
}

export const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHOR:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_AUTHOR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                authorInfo: action.payload
            }
        case FETCH_AUTHOR_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const fetchAuthor = () => ({type: FETCH_AUTHOR})
export const fetchAuthorSuccess = (posts) => ({type: FETCH_AUTHOR_SUCCESS, payload: posts})
export const fetchAuthorError = (error) => ({type: FETCH_AUTHOR_ERROR, payload: error})


export const getAuthor = (id) => async (dispatch) => {
    try {
        dispatch(fetchAuthor())
        let data = await User.getAuthor(id)
        dispatch(fetchAuthorSuccess(data))
    } catch (e) {
        dispatch(fetchAuthorError(e.message))
    }
}
