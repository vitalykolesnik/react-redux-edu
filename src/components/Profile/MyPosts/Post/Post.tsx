import { ImageType, LikeType } from 'components/types/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteUserPost } from 'redux/profileReduser';
import Likes from '../../../Likes/Likes';
import s from './Post.module.css';

type PropsType = {
    id: number
    profileId:number 
    text:string 
    likes: Array<LikeType>
    images: Array<ImageType> 
    isDeleting: Array<number>
    isOwner:boolean
}

const Post: React.FC<PropsType> = ({ id, text, images, isDeleting, likes, isOwner, profileId }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const onDeletePost = () => {
        dispatch(deleteUserPost(id));
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
