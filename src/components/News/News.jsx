import React from 'react';
import s from './News.module.css';
import incognito from './../../assets/image/user_icon.png';

const News = ({ profile, text, likeCount }) => {
    return (
        <div className={s.item}>
            <div className={s.itemInfo}>
                <div className={s.itemAuthor}>
                    {' '}
                    <img
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                        src={profile.image || incognito}
                        alt="Ooops"
                    />
                    {profile.name}
                </div>
                <div className={s.itemMessage}>{text}</div>
            </div>
            <div className={s.itemLikesCount}>
                <span>💗</span> {likeCount || 0}
            </div>
        </div>
    );
};

export default News;
