import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Preloader from '../other/Preloader/Preloader';

const Users = ({
    users,
    userId,
    friends,
    requestSubscribe,
    requestUnsubscribe,
    isLoading,
    isSubscribing,
    totalUsersCount,
    pageSize,
    setCurrentPage,
    currentPage,
}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={s.container}>
            <div>
                <h3>Users</h3>
            </div>
            {isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <div className={s.pagination}>
                        {pages.map((p, i) => {
                            return (
                                <span
                                    className={
                                        currentPage === p ? s.selectedPage : ''
                                    }
                                    onClick={() => onPageChanged(p)}
                                    key={i}
                                >
                                    {' '}
                                    {p}{' '}
                                </span>
                            );
                        })}
                    </div>
                    <div className={s.usersPage}>
                        {users.map((u) => (
                            <User
                                {...u}
                                key={u.id}
                                friends={friends}
                                isOwner={userId !== u.id}
                                isSubscribing={isSubscribing}
                                subscribe={requestSubscribe}
                                unsubscribe={requestUnsubscribe}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
