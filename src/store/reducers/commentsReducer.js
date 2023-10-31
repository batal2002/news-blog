import {Comments, User} from "../../api/api";

const FETCH_COMMENTS = 'FETCH_COMMENTS'
const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR'

const initialState = {
    comments: {},
    isFetching: true,
    error: null,
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                comments: action.payload
            }
        case FETCH_COMMENTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const fetchComments = () => ({type: FETCH_COMMENTS})
export const fetchCommentsSuccess = (posts) => ({type: FETCH_COMMENTS_SUCCESS, payload: posts})
export const fetchCommentsError = (error) => ({type: FETCH_COMMENTS_ERROR, payload: error})

const updateComments = async (data) => {
    return await Promise.all(data.comments.map(async item => {
        let author = await User.getAuthor(item.user.id)
        return {
            ...item,
            user: {
                id: author.id,
                firstName: author.firstName,
                maidenName: author.maidenName,
                image: author.image,
            }
        }
    }))
}

export const getComments = (id) => async (dispatch) => {
    try {
        dispatch(fetchComments())
        let data = await Comments.getComments(id)
        let updateUser = await updateComments(data)
        let updateData = {
            ...data,
            comments: [...updateUser]
        }
        dispatch(fetchCommentsSuccess(updateData))
    } catch (e) {
        dispatch(fetchCommentsError(e.message))
    }
}
