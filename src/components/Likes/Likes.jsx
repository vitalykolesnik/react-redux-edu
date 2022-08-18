import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLikePost } from '../../redux/profileReduser';
import { getIsAuth, getUserId } from '../../redux/authSelectors';
import s from './Likes.module.css';

const Likes = ({ postId, profileId, likes }) => {
    const userId = useSelector((state) => getUserId(state));
    const isAuth = useSelector((state) => getIsAuth(state));
    const dispatch = useDispatch();

    const init = () => {
        return likes.some((l) => l.profileId === userId);
    };

    const [isLiked, setIsLiked] = useState(init());

    const onLike = () => {
        if (isAuth) {
            dispatch(requestLikePost(postId, profileId));
            setIsLiked((isLiked) => !isLiked);
        }
    };

    return (
        <div className={s.likes}>
            <div className={s.itemLikesCount} onClick={onLike}>
                <span>{isLiked ? '💗' : '🤍'}</span> {likes.length || 0}
            </div>
        </div>
    );
};

export default Likes;
