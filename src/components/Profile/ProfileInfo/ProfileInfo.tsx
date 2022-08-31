import React from 'react';
import { setAvatar } from '../../../utils/setAvatar';

import s from './ProfileInfo.module.css';

type PropsType ={
    name: string | null
    image: string  | null
    description: string | null
    isOwner: boolean
    updatePhoto: (file: File) => void
}

const ProfileInfo: React.FC<PropsType> = ({ name, image, description, isOwner, updatePhoto }) => {
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            updatePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <h3>{name}</h3>
                <img src={setAvatar(image)} alt="ooops" />
                <div className={s.selectAvatar}>
                    {isOwner && (
                        <div>
                            <input
                                id="ava"
                                name="ava"
                                type={'file'}
                                onChange={onMainPhotoSelected}
                            />
                        </div>
                    )}
                </div>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
