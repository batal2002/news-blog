import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuthor} from "../store/reducers/authorReducer";
import UserInfo from "../components/UserInfo/UserInfo";
import {getUserPosts} from "../store/reducers/postsReducer";
import Post from "../components/Post/Post";
import Error from "./Error";
import Preloader from "../UI/Preloader/Preloader";

const Profile = () => {
    const id = useParams().id
    const user = useSelector(state => state.author)
    const posts = useSelector(state => state.posts)
    const select = useSelector(state => state.filter.select)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAuthor(id))
        dispatch(getUserPosts(id))
    }, [])


    useEffect(() => {
        if (select !== '') {
            navigate('/news')
        }
    }, [select])

    if (user.isFetching) return <Preloader/>

    if (user.error) return <Error/>

    return (<div>
        <UserInfo {...user}/>
        {
            posts.userPostList.length === 0 ? <h2>Posts not found</h2> :
                <>
                    <h3 className={'title'}>Posts:</h3>
                    {posts.userPostList.map(item => <Post key={item.id} {...item}/>)}
                </>
        }
    </div>);
};

export default Profile;