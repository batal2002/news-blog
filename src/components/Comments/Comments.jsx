import React from 'react';
import Preloader from "../../UI/Preloader/Preloader";
import s from './Comments.module.css'
import Comment from "../Comment/Comment";

const Comments = ({comments, isFetching, error}) => {

    if (isFetching) return <Preloader/>

    if (error) return <h2>{error}</h2>

    if (comments.comments.length === 0) return <h2>Comments not found</h2>

    return (
        <>
            <div className={s.wrapper}>
                <h3 className={s.title}>Comments:</h3>
                <span className={s.counter}>Total: {comments.total}</span>
            </div>
            {comments.comments.map(item => <Comment key={item.id} {...item}/>)}
        </>
    );
};

export default Comments;