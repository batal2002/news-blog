import React from 'react';
import s from './PostFooter.module.css'
import Tag from "../../UI/Tag/Tag";
import smile from '../../assets/icons/smile.png'

const PostFooter = ({tags, reactions}) => {
    return (
        <div className={s.footer}>
            <div className={s.tags}>
                {tags.map(item => <Tag key={item}>{item}</Tag>)}
            </div>
            <div className={s.reaction}>
                <img src={smile} alt="" className={s.icon}/>
                <span className={s.counter}>{reactions}</span>
            </div>
        </div>);
};

export default PostFooter;