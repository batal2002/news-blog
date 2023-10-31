import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PostBody from "../components/PostBody/PostBody";
import Author from "../components/Author/Author";
import {getCurrentPost} from "../store/reducers/currentPostReducer";
import {getAuthor} from "../store/reducers/authorReducer";
import Comments from "../components/Comments/Comments";
import {getComments} from "../store/reducers/commentsReducer";
import Preloader from "../UI/Preloader/Preloader";
import Error from "./Error";

const NewsPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useParams().id
    const post = useSelector(state => state.currentPost)
    const author = useSelector(state => state.author)
    const select = useSelector(state => state.filter.select)
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        if (select !== '') {
            navigate('/news')
        }
    }, [select])

    useEffect(() => {
        dispatch(getCurrentPost(id))
        dispatch(getComments(id))
    }, [])

    useEffect(() => {
        if (post.currentPost.userId) {
            dispatch(getAuthor(post.currentPost.userId))
        }
    }, [post.currentPost.userId])

    if (post.isFetching) return <Preloader/>

    if (post.error) return <Error/>

    return (
        <div>
            <PostBody {...post}/>
            <Author {...author}/>
            <Comments {...comments}/>
        </div>
    );
};

export default NewsPage;