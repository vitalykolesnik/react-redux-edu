import React from 'react';
import { setAvatar } from 'utils/setAvatar';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ name, image, description, isOwner, updatePhoto }) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            updatePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <h3>{name}</h3>
                <img src={setAvatar(image)} alt="ooops" />
                <div>
                    {' '}
                    {isOwner && (
                        <input type={'file'} onChange={onMainPhotoSelected} />
                    )}
                </div>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
