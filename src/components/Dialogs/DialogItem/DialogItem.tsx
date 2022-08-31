import { ProfileType } from 'components/types/types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { setAvatar } from '../../../utils/setAvatar';
import s from './DialogItem.module.css';

const DialogItem : React.FC<ProfileType> = ({ id, name, image}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>
                <img src={setAvatar(image)} alt="Oooops" />
                <div>{name}</div>
            </NavLink>
        </div>
    );
};

export default DialogItem;
