import React, {useEffect} from 'react';
import s from './Header.module.css'
import logo from '../../assets/images/logo.png'
import search from '../../assets/icons/search.png'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setQuery} from "../../store/reducers/filterReducer";

const Header = () => {
    const query = useSelector(state => state.filter.query)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (query !== '') {
            navigate('/news')
        }
    }, [query])

    return (<header className={s.header}>
        <div className={s.logo}>
            <Link to={'/news'}>
                <img src={logo} alt="logo"/>
            </Link>
        </div>
        <div className={s.search}>
            <input type="text" value={query} onChange={(e) => {
                dispatch(setQuery(e.target.value))
            }}
                   className={s.input}
                   placeholder={'Search...'}/>
            <button className={s.button}>
                <img src={search} alt=""/>
            </button>
        </div>
        <div className={s.user}>

        </div>
    </header>);
};

export default Header;