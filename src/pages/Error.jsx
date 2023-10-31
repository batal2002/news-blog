import React from 'react';
import error from '../assets/images/404.png'
const Error = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Page not found</h1>
            <img src={error} alt=""/>
        </div>
    );
};

export default Error;