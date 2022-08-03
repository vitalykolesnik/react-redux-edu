import React from 'react';
import { NavLink } from 'react-router-dom';
import { setAvatar } from 'utils/setAvatar';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.user_id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>
                <div>
                    <img src={setAvatar(props.image)} alt="Oooops" />
                    <div>{props.login}</div>
                    <p>{props.name}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default DialogItem;
