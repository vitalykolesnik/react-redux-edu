import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img
                src="http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg"
                alt="Ooops"
            />
            <div className={s.descriprioinBlock}>ava+description</div>
        </div>
    );
};

export default ProfileInfo;
