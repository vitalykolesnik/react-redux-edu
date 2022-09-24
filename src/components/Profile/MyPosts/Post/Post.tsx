import {  DeleteForever} from '@mui/icons-material';
import {  Box, Card, CardActions, CardContent, CardMedia, IconButton, ImageList, Typography } from '@mui/material';
import { ImageType, LikeType } from 'components/types/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteUserPost } from 'redux/profileReduser';
import Likes from '../../../Likes/Likes';

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

    const imagesAlbum = images.map((i) => {
        return <Box 
            component='img' 
            key={i.id} 
            src={i.image} 
            alt="Ooops" 
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}/>;
    });

    return (
            <Card sx={{marginBlock: 1}}>
                <CardMedia>
                    <ImageList sx={{width: '100%'}} cols={images.length} rowHeight={100}>
                        {imagesAlbum}
                    </ImageList>
                </CardMedia>
                <CardContent>
                    <Typography variant="body1">{text}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'space-between' }} >
                    <Likes postId={id} profileId={profileId} likes={likes} />
                    {isOwner ? (
                        <IconButton
                            onClick={onDeletePost}
                            disabled={isDeleting.some((i) => i === id)}
                            sx={{m: 1}}
                        >
                            <DeleteForever />
                        </IconButton>
                    ) : (
                        ''
                    )}
                </CardActions>
            </Card>
    );
};

export default Post;
