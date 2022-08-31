import React from 'react';
import Post from './Post/Post';
import { PostType } from 'components/types/types';

import s from './MyPosts.module.css';
import { NewPostForm } from './NewPostForm';

type PropsType = {
    posts: Array<PostType>
    isDeleting: Array<number>
    isOwner: boolean
}

const MyPosts: React.FC<PropsType> = ({ posts, isOwner, isDeleting }) => {
    const postElements = posts.map((p) => (
        <Post
            {...p}
            key={p.id}
            likes={p.likes}
            images={p.images}
            isDeleting={isDeleting}
            isOwner={isOwner}
        />
    ));

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            {isOwner ? <NewPostForm /> : ''}
            <div className={s.posts}>{postElements}</div>
        </div>
    );
};

export default React.memo(MyPosts);
