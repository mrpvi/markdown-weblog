import React from 'react';
import style from './../styles/errorPages.module.scss'

const NotFoundPage = () => {
    return (
        <div className={style.notFountPage}>
            <img src="/images/404.png" alt="page not found" />
            <h1>Sorry!<br></br> No result found</h1>
        </div>
    );
}

export default NotFoundPage;
