import React from 'react';
import s from './Comment.module.css'
import {Link} from "react-router-dom";

const Comment = ({body, id, postId, user}) => {
    return (
        <div className={s.wrapper}>
            <Link to={'/user/' + user.id} className={s.avatar}>
                <img src={user.image} alt=""/>
            </Link>
            <div>
                <Link to={'/user/' + user.id} className={s.name}>
                    {user.firstName + ' ' + user.maidenName}
                </Link>
                <p className={s.body}>{body}</p>
            </div>
        </div>
    );
};

export default Comment;