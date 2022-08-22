import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Preloader from '../other/Preloader/Preloader';
import Paginator from './Paginator';

const Users = ({
    users,
    userId,
    friends,
    requestSubscribe,
    requestUnsubscribe,
    isLoading,
    isSubscribing,
}) => {
    const usersList = users.map((u) => (
        <User
            {...u}
            key={u.id}
            friends={friends}
            isOwner={userId !== u.id}
            isSubscribing={isSubscribing}
            subscribe={requestSubscribe}
            unsubscribe={requestUnsubscribe}
        />
    ));

    return (
        <div className={s.container}>
            <h3>Users</h3>
            {isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <Paginator />
                    <div className={s.usersPage}>{usersList}</div>
                </div>
            )}
        </div>
    );
};

export default Users;
