import React, { useState } from 'react';
import Likes from '../Likes/Likes';

import { NewsType } from 'components/types/types';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography, IconButton  } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Album: React.FC<any> = ({images}) => {
    const [index, setIndex] = useState(0)    

    const onPrev = () => {
        setIndex(index => index - 1)
    }

    const onNext = () => {
        setIndex(index => index + 1)
    }

    const selectedImage = images[index]

    return (
        <>
        {(images.length) ?      
        <Box width='100%' position='relative'>
            {(index !== 0) ?
            <Box position='absolute' left={3} top={75}>
                <IconButton color="warning" onClick={onPrev} >
                    <NavigateBefore />
                </IconButton>
            </Box> : <></>}
            {
                (selectedImage) ? 
                <CardMedia 
                    component='img'
                    src={selectedImage.image}
                    alt="Ooops" 
                    loading='lazy'
                    height={200}/> : <></>
            }
            {(index !== images.length - 1) ?
            <Box position='absolute' right={3} top={75}>
                <IconButton color="warning" onClick={onNext} >
                    <NavigateNext />
                </IconButton> 
            </Box> : <></>}
        </Box> : <></>
        }
    </>)   
}

const News: React.FC<NewsType> = ({ id, profile, text, images, likes, createdAt }) => {
    return (
            <Card elevation={3} sx={{ height: 'auto'}} > 
                <CardHeader
                    avatar={
                        <Avatar 
                            alt={profile.name} 
                            src={profile.image} 
                            component={NavLink} 
                            to={'/profile/' + profile.id}/>
                    }
                    title={profile.name}
                    subheader={createdAt}
                    action={
                        <Likes 
                            postId={id} 
                            likes={likes} 
                            profileId={profile.id}/>}
                />
                <CardContent sx={{ height: '4rem' }}>
                    <Typography variant="body1">{text}</Typography>
                </CardContent>
                <CardMedia sx={{ width: '100%'}}>
                    <Album images={images}/> 
                </CardMedia>  
            </Card>
    );
};

export default News;
