import React from 'react';
import u from './User.module.css';
import icon from 'assets/image/user_Icon.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const onSbscribe = () => {
        props.subscribe(props.id);
    };

    const onUnsubscribe = () => {
        props.unsubscribe(props.id);
    };

    return (
        <div className={u.user}>
            <div className={u.userMainInfo}>
                <NavLink to={'/profile/' + props.id}>
                    <img src={props.image} alt={icon} />
                </NavLink>
                <div>{props.name}</div>
                <div>
                    {props.subscribed ? (
                        <button onClick={onUnsubscribe}>unsubscribe</button>
                    ) : (
                        <button onClick={onSbscribe}>subscribe</button>
                    )}
                </div>
            </div>
            <div>{props.description}</div>
        </div>
    );
};

export default User;
