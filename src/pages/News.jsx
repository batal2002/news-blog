import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/reducers/postsReducer";
import Post from "../components/Post/Post";
import Preloader from "../UI/Preloader/Preloader";
import Error from "./Error";
import {getAllTags, selectValue, setFilterList} from "../store/reducers/filterReducer";

const News = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const tags = useSelector(state => state.filter.tags)
    const select = useSelector(state => state.filter.select)
    const query = useSelector(state => state.filter.query)
    const filterList = useSelector(state => state.filter.filterList)


    useEffect(() => {
        dispatch(getPosts())
        dispatch(getAllTags())
    }, [])


    useEffect(() => {
        dispatch(setFilterList(select, query))
    }, [select, query])


    if (posts.isFetching) return <Preloader/>

    if (posts.error) return <Error/>

    return (<div>
        <span>Sort by Tags: </span>
        <select value={select} onChange={(e) => dispatch(selectValue(e.target.value))} style={{marginBottom: 10}}>
            <option value={''}>Default</option>
            {tags.map((item) =>
                <option key={item} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>)
            }
        </select>

        {filterList.length > 0 ? filterList.map(item => <Post key={item.id} {...item}/>) : <h3>Not found</h3>}
    </div>);
};

export default News;