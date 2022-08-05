import React from 'react';
import { NavLink } from 'react-router-dom';
import { setAvatar } from 'utils/setAvatar';
import s from './DialogItem.module.css';

const DialogItem = ({ id, name, image }) => {
    let path = '/dialogs/' + id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>
                <div>
                    <img src={setAvatar(image)} alt="Oooops" />
                    <div>{name}</div>
                </div>
            </NavLink>
        </div>
    );
};

export default DialogItem;
