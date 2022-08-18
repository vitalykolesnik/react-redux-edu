import React from 'react';
import { NavLink } from 'react-router-dom';
import { setAvatar } from 'utils/setAvatar';
import u from './User.module.css';

const User = (props) => {
    const onSubscribe = () => {
        props.subscribe(props.id);
    };

    const onUnsubscribe = () => {
        props.unsubscribe(props.id);
    };

    return (
        <div className={u.user}>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img src={setAvatar(props.image)} alt={'oops'} />
                </NavLink>
                <div className={u.userLogin}>{props.name}</div>
                <div>Status: {props.status}</div>
                {props.isOwner ? (
                    <div>
                        {props.friends.some((f) => f.id === props.id) ? (
                            <button
                                onClick={onUnsubscribe}
                                disabled={props.isSubscribing.some(
                                    (i) => i === props.id
                                )}
                            >
                                Unsubscribe
                            </button>
                        ) : (
                            <button
                                onClick={onSubscribe}
                                disabled={props.isSubscribing.some(
                                    (i) => i === props.id
                                )}
                            >
                                Subscribe
                            </button>
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div>Info: {props.description}</div>
        </div>
    );
};

export default User;
