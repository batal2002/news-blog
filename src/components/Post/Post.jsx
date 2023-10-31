import React from 'react';
import s from './Post.module.css'
import {Link} from "react-router-dom";
import PostFooter from "../PostFooter/PostFooter";
import {useDispatch} from "react-redux";
import {clearQuery, clearSelectValue} from "../../store/reducers/filterReducer";

const Post = ({body, id, reactions, tags, title, userId}) => {

    const dispatch = useDispatch()
    return (<div className={s.card}>
        <Link to={'/news/' + id} className={s.wrapper}
              onClick={() => dispatch(clearQuery()) && dispatch(clearSelectValue())}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.body}>{body}</p>
        </Link>
        <PostFooter tags={tags} reactions={reactions}/>
    </div>);
};

export default Post;