import React from 'react';
import s from './News.module.css';
import incognito from './../../assets/image/user_icon.png';

const News = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemInfo}>
                <div className={s.itemAuthor}>
                    {' '}
                    <img
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                        src={props.app_user.image || incognito}
                        alt="Ooops"
                    />
                    {props.app_user.login}
                </div>
                <div className={s.itemMessage}>{props.text}</div>
            </div>
            <div className={s.itemLikesCount}>
                <span>💗</span> {props.likeCount || 0}
            </div>
        </div>
    );
};

export default News;
