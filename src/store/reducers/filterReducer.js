import {Posts} from "../../api/api";

const GET_TAGS = 'GET_TAGS'
const SELECT_VALUE = 'SELECT_VALUE'
const FILTER_LIST = 'FILTER_LIST'
const SET_QUERY = 'SET_QUERY'
const CLEAR_QUERY = 'CLEAR_QUERY'
const CLEAR_SELECT_VALUE = 'CLEAR_SELECT_VALUE'


const initialState = {
    filterList: [],
    tags: [],
    select: '',
    query: ''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload
            }
        case SELECT_VALUE: {
            return {
                ...state,
                select: action.payload
            }
        }
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case CLEAR_QUERY:
            return {
                ...state,
                query: '',
            }
        case CLEAR_SELECT_VALUE:
            return {
                ...state,
                select: '',
            }
        case FILTER_LIST: {
            return {
                ...state,
                filterList: action.payload
            }
        }
        default:
            return state
    }
}

export const getTags = (tags) => ({type: GET_TAGS, payload: tags})
export const selectValue = (text) => ({type: SELECT_VALUE, payload: text})
export const filterList = (list) => ({type: FILTER_LIST, payload: list})
export const setQuery = (text) => ({type: SET_QUERY, payload: text})
export const clearQuery = () => ({type: CLEAR_QUERY})
export const clearSelectValue = () => ({type: CLEAR_SELECT_VALUE})

export const getAllTags = () => async (dispatch) => {
    let data = await Posts.getPosts()
    let tags = data.posts.reduce((acc, item) => {
        return [...new Set([...acc, ...item.tags])]
    }, [])
    dispatch(getTags(tags))
}
export const setFilterList = (tag, query) => async (dispatch) => {
    query = query.toLowerCase()
    let data = await Posts.getPosts()
    let sortedList = data.posts.filter((item) => item.tags.includes(tag))

    if (sortedList.length > 0) {
        sortedList = sortedList.filter((item) => item.tags.includes(query)
            || item.body.toLowerCase().includes(query)
            || item.title.toLowerCase().includes(query))
    } else {
        sortedList = data.posts.filter((item) => item.tags.includes(query)
            || item.body.toLowerCase().includes(query)
            || item.title.toLowerCase().includes(query))
    }

    dispatch(filterList(sortedList))
}

