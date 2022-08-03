import React from 'react';
import { setAvatar } from 'utils/setAvatar';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <h3>{props.login}</h3>
                <img src={setAvatar(props.image)} alt="ooops" />
                <div>{props.description}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
