import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <NavLink to={'/profile/' + props.user_id}>
                <img src={props.image} alt="Ooops" />
                <p>{props.login}</p>
            </NavLink>
        </div>
    );
};

export default Friend;
