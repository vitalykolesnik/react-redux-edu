import React from 'react';
import s from './MyFriends.module.css';
import Friend from './Friend/Friend';

const MyFriends = (props) => {
    const friendsElements = props.friends.map((f) => (
        <Friend key={f.id} name={f.name} image={f.image} />
    ));

    return <div className={s.item}>{friendsElements}</div>;
};

export default MyFriends;
