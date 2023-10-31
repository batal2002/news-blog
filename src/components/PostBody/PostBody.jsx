import React from 'react';
import s from './PostBody.module.css'
import PostFooter from "../PostFooter/PostFooter";
import Preloader from "../../UI/Preloader/Preloader";

const PostBody = ({currentPost: {body, id, reactions,tags,title, userId}, isFetching, error}) => {



    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.body}>{body}</p>
            <PostFooter tags={tags} reactions={reactions}/>
        </div>
    );
};

export default PostBody;