import React from 'react';
import s from './Tag.module.css'
import {useDispatch} from "react-redux";
import {selectValue} from "../../store/reducers/filterReducer";

const Tag = ({children}) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(selectValue(children))

    }
    return (
        <span className={s.tag} onClick={onClick}>
            {children}
        </span>
    );
};

export default Tag;