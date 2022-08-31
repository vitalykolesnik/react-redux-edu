import React, { Dispatch, useEffect } from 'react';
import User from './User/User';
import Preloader from '../other/Preloader/Preloader';
import Paginator from './Paginator';
import { ProfileType } from 'components/types/types';

import s from './Users.module.css';
import { useDispatch } from 'react-redux';
import { requestFriends } from 'redux/usersReduser';

type PropsType = {
    users: Array<ProfileType>,
    friends: Array<ProfileType>,
    userId: number | null,
    isLoading: boolean
    isSubscribing: Array<number>,
}

const Users
    : React.FC<PropsType> = ({
    users,
    friends,
    userId,
    isLoading,
    isSubscribing,
}) => {
    const dispatch: Dispatch<any>= useDispatch()

    useEffect(() => {
        dispatch(requestFriends())
    }, [dispatch, isSubscribing])
    
    const usersList = users.map((u) => (
        <User
            {...u}
            key={u.id}
            friends={friends}
            isOwner={userId !== u.id}
            isSubscribing={isSubscribing}
        />
    ));

    return (
        <>
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
        </>
    );
};

export default Users