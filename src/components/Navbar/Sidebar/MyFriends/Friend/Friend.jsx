import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    let path = '/profile/' + props.id;
    return (
        <div className={s.friend}>
            <NavLink to={path}>
                <img src={props.image} alt="Ooops" />
                {props.name}
            </NavLink>
        </div>
    );
};

export default Friend;
