import React from 'react';
import s from './Post.module.css';

const Post = ({
    id,
    userId,
    profileId,
    text,
    likeCount,
    isDeleting,
    onDeleteUserPost,
}) => {
    const onDeletePost = () => {
        onDeleteUserPost(id);
    };

    return (
        <div className={s.item}>
            <div>
                <div className={s.itemInfo}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                        alt="Ooops"
                    />
                    <div className={s.itemMessage}>{text}</div>
                </div>
            </div>
            <div className={s.itemLikesCount}>
                <span>💗</span> {likeCount || 0}
            </div>
            {profileId === userId ? (
                <button
                    onClick={onDeletePost}
                    disabled={isDeleting.some((i) => i === id)}
                >
                    X
                </button>
            ) : (
                ''
            )}
        </div>
    );
};

export default Post;
