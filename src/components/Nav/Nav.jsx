import React from 'react';
import {Link} from "react-router-dom";
import s from './Nav.module.css'
import news from '../../assets/icons/news.png'

const Nav = () => {
    return (<nav className={s.nav}>
        <Link to={'/news'} className={s.link}>
            <img src={news} alt="" className={s.icon}/>
            <span>News</span>
        </Link>
    </nav>);
};

export default Nav;