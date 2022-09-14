import React from 'react';
import { ProfileType } from 'components/types/types';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { setAvatar } from '../../../utils/setAvatar';
import { NavLink } from 'react-router-dom';

const DialogItem : React.FC<ProfileType> = ({ id, name, image}) => {
    let path = '/dialogs/' + id;
    return (
        <Box sx={{ justifyContent: 'center'}} >
            <Stack component={NavLink} to={path} sx={{m: 1, textDecoration: 'none', textAlign: 'center' }}>
                <Avatar alt={name} src={setAvatar(image)} sx={{ width: 70, height: 70 }}/>   
                <Typography variant='caption' color='Black'>{name}</Typography>  
            </Stack>
        </Box>
    )   
};

export default DialogItem;
