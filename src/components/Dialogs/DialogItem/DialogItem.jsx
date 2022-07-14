import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>
                <div>
                    <img src={props.image} alt="Ooops" />
                    <p>{props.name}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default DialogItem;
