import React from 'react';
import s from './Author.module.css'
import Preloader from "../../UI/Preloader/Preloader";
import {Link} from "react-router-dom";

const Author = ({authorInfo: {firstName, maidenName, image, address, id}, isFetching, error}) => {

    if (isFetching) return <Preloader/>

    if (error) return <h2>{error}</h2>

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>Author:</h3>
            <Link to={'/user/' + id} className={s.info}>
                <div className={s.avatar}>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <span className={s.name}>{firstName + ' ' + maidenName}</span>
                    <p className={s.addres}>City: {address.city}</p>
                </div>
            </Link>
        </div>
    );
};

export default Author;