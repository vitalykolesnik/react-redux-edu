import React, { Dispatch } from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';
import { setAvatar } from '../../../utils/setAvatar';
import { ProfileType } from '../../types/types';
import { useDispatch } from 'react-redux';
import {  requestSubscribe, requestUnsubscribe } from 'redux/usersReduser';

type PropsType = {
    id: number
    name: string
    status: string
    description: string
    image: string
    isOwner: boolean
    isSubscribing: Array<number>
    friends: Array<ProfileType>
}

const User: React.FC<PropsType>  = (props) => {
    const dispatch: Dispatch<any>= useDispatch()

    const onSubscribe = () => {
        dispatch(requestSubscribe(props.id))
    };

    const onUnsubscribe = () => {
        dispatch(requestUnsubscribe(props.id))
    };

    return (
        <div className={s.user}>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img src={setAvatar(props.image)} alt={'oops'} />
                </NavLink>
                <div className={s.userLogin}>{props.name}</div>
                <div>Status: {props.status}</div>
                {props.isOwner ? (
                    <div>
                        {props.friends.some((f: ProfileType) => f.id === props.id) ? (
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
            {/* <div>Info: {props.description}</div> */}
        </div>
    );
};

export default User;
