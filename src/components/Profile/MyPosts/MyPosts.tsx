import React from 'react';
import Post from './Post/Post';
import { PostType } from 'components/types/types';

import { Typography } from '@mui/material';

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
        <>
            <Typography variant="h5">My posts</Typography>
            {postElements}
        </>
    );
};

export default React.memo(MyPosts);
