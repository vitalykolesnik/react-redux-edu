import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { setAvatar } from '../../../utils/setAvatar';
import { PhotoCamera } from '@mui/icons-material';

type PropsType ={
    name: string | null
    image: string  | null
    description: string | null
    isOwner: boolean
    updatePhoto: (file: File) => void
}

const ProfileInfo: React.FC<PropsType> = ({ name, image, description, isOwner, updatePhoto }) => {
    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            updatePhoto(e.target.files[0]);
        }
    };

    return (
        <Card sx={{height: 400}}>
            <CardHeader
                    title={name}
                    action={
                        <IconButton component='label'>
                            <input hidden accept='image/*' type='file' onChange={onMainPhotoSelected}/>
                            <PhotoCamera />
                        </IconButton>
                    }
            >
            </CardHeader>
            <CardMedia 
                    component='img' 
                    src={setAvatar(image)} 
                    alt="ooops"
                    height='100%' />
            <CardContent>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default ProfileInfo;
