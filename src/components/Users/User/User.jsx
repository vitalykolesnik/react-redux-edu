import React from 'react';
import { NavLink } from 'react-router-dom';
import { setAvatar } from 'utils/setAvatar';
import u from './User.module.css';

const User = (props) => {
    const onSbscribe = () => {
        props.subscribe(props.user_id);
    };

    const onUnsubscribe = () => {
        props.unsubscribe(props.user_id);
    };

    return (
        <div className={u.user}>
            <div>
                <NavLink to={'/profile/' + props.user_id}>
                    <img src={setAvatar(props.image)} alt={'oops'} />
                </NavLink>
                <div className={u.userLogin}>{props.login}</div>
                <div>Status: {props.status}</div>
                <div>
                    {props.subscribed ? (
                        <button onClick={onUnsubscribe}>unsubscribe</button>
                    ) : (
                        <button onClick={onSbscribe}>subscribe</button>
                    )}
                </div>
            </div>
            <div>Info: {props.description}</div>
        </div>
    );
};

export default User;
