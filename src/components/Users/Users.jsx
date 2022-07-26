import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Preloader from '../other/Preloader/Preloader';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
    };

    return (
        <div className={s.container}>
            <div>
                <h3>Users</h3>
            </div>
            {props.isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <div className={s.pagination}>
                        {pages.map((p, i) => {
                            return (
                                <span
                                    className={
                                        props.currentPage === p
                                            ? s.selectedPage
                                            : ''
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
                        {props.users.map((u) => (
                            <User
                                {...u}
                                key={u.user_id}
                                subscribe={props.subscribe}
                                unsubscribe={props.unsubscribe}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
