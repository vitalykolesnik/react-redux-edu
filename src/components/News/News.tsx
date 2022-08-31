import React from 'react';
import Likes from '../Likes/Likes';
import { setAvatar } from '../../utils/setAvatar';

import s from './News.module.css';
import { NewsType } from 'components/types/types';

const News: React.FC<NewsType> = ({ id, profile, text, images, likes }) => {
    const imagesAlbum = images.map((i) => {
        return <img key={i.id} src={i.image} alt="Ooops" />;
    });

    return (
        <div className={s.item}>
            <div className={s.itemInfo}>
                <div className={s.itemAuthor}>
                    <div className={s.avatar}>
                        <img src={setAvatar(profile.image)} alt="Ooops" />
                    </div>
                    <div>{profile.name}</div>
                </div>
                <div className={s.itemMessage}>{text}</div>
                <div className={s.imagesAlbum}>
                    {images.length ? imagesAlbum : <></>}
                </div>
            </div>
            <Likes postId={id} likes={likes} profileId={profile.id} />
        </div>
    );
};

export default News;
