import React from 'react';
import s from './UserInfo.module.css'
import Preloader from "../../UI/Preloader/Preloader";
const UserInfo = ({authorInfo: {firstName, maidenName, image, address, id}, isFetching, error}) => {




    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={image} alt=""/>
            </div>
            <div>
                <span className={s.name}>{firstName + ' ' + maidenName}</span>
                <p className={s.addres}>City: {address.city}</p>
            </div>
        </div>
    );
};

export default UserInfo;