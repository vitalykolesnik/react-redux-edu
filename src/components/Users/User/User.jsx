import React from 'react';
import u from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const onSbscribe = () => {
        props.subscribe(props.user_id);
    };

    const onUnsubscribe = () => {
        props.unsubscribe(props.user_id);
    };

    return (
        <div className={u.user}>
            <div className={u.userMainInfo}>
                <NavLink to={'/profile/' + props.user_id}>
                    <img src={props.image} alt={'oops'} />
                </NavLink>
                <div>{props.login}</div>
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
