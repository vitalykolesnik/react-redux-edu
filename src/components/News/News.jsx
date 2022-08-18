import React from 'react';
import s from './News.module.css';
import incognito from './../../assets/image/user_icon.png';
import Likes from 'components/Likes/Likes';

const News = ({ id, profile, text, likes }) => {
    return (
        <div className={s.item}>
            <div className={s.itemInfo}>
                <div className={s.itemAuthor}>
                    {' '}
                    <img src={profile.image || incognito} alt="Ooops" />
                    {profile.name}
                </div>
                <div className={s.itemMessage}>{text}</div>
            </div>
            <Likes postId={id} likes={likes} profileId={profile.id} />
        </div>
    );
};

export default News;
