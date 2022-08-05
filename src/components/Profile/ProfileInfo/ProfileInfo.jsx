import React from 'react';
import { setAvatar } from 'utils/setAvatar';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ name, image, description }) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <h3>{name}</h3>
                <img src={setAvatar(image)} alt="ooops" />
                <div>{description}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
