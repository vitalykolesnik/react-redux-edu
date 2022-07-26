import React from 'react';
import s from './MyFriends.module.css';
import Friend from './Friend/Friend';

const MyFriends = (props) => {
    const friendsElements = props.friends.map((f) => (
        <Friend {...f} key={f.user_id} />
    ));

    return <div className={s.item}>{friendsElements}</div>;
};

export default MyFriends;
