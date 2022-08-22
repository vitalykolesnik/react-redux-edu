import Likes from '../../../../components/Likes/Likes';
import React from 'react';
import s from './Post.module.css';

const Post = ({
    id,
    text,
    images,
    isDeleting,
    onDeleteUserPost,
    likes,
    isOwner,
    profileId,
}) => {
    const onDeletePost = () => {
        onDeleteUserPost(id);
    };

    const imagesAlbum = () => {
        return images ? (
            images.map((i) => {
                return <img key={i.id} src={i.image} alt="Ooops" />;
            })
        ) : (
            <></>
        );
    };

    return (
        <div className={s.item}>
            <div className={s.itemInfo}>
                <div className={s.imagesAlbum}>{imagesAlbum()}</div>
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
