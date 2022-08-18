import Likes from '../../../../components/Likes/Likes';
import React from 'react';
import s from './Post.module.css';

const Post = ({
    id,
    isOwner,
    text,
    isDeleting,
    onDeleteUserPost,
    likes,
    profileId,
}) => {
    const onDeletePost = () => {
        onDeleteUserPost(id);
    };

    return (
        <div className={s.item}>
            <div className={s.itemInfo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyQ3Ez7fGNDmuULcJxaGc3CxZ5ohwAoFeGQ&usqp=CAU"
                    alt="Ooops"
                />
                <div className={s.itemMessage}>{text}</div>
            </div>
            <Likes postId={id} profileId={profileId} likes={likes} />
            {isOwner ? (
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
