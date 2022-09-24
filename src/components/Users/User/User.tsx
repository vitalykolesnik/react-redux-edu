import React, { Dispatch } from 'react';
import { NavLink } from 'react-router-dom';
import { setAvatar } from '../../../utils/setAvatar';
import { ProfileType } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import {  requestSubscribe, requestUnsubscribe } from 'redux/usersReduser';

import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { getIsSubscribing } from 'redux/usersSelectors';
import { AppStateType } from 'redux/reduxStore';

type PropsType = {
    id: number
    name: string
    status: string
    description: string
    image: string
    isOwner: boolean
    friends: Array<ProfileType>
}

const User: React.FC<PropsType>  = (props) => {
    const dispatch: Dispatch<any>= useDispatch()

    const onSubscribe = () => {
        dispatch(requestSubscribe(props.id))
    };

    const onUnsubscribe = () => {
        dispatch(requestUnsubscribe(props.id))
    };


    return (
        <Card sx={{ maxWidth: 300}}>
            <Box component={NavLink} to={'/profile/' + props.id}>
                <CardMedia 
                    component="img" 
                    height="300" 
                    image={setAvatar(props.image)} 
                    alt="oops"
                    title={props.name} />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h6">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ height:50 }}>
                    Status: {props.status}
                </Typography>
            </CardContent>
            <CardActions>
                {props.friends.some((f: ProfileType) => f.id === props.id) ? 
                    (<ButtonWrapper id={props.id} title="Unsubscribe" action={onUnsubscribe}/>) :
                    (<ButtonWrapper id={props.id} title="Subscribe" action={onSubscribe}/>)
                }
            </CardActions>
        </Card>
    )
};

type ByttonType = {
    id: number
    title: string
    action: () => void
}

const ButtonWrapper: React.FC<ByttonType> = ({id, title, action}) => {
    const isSubscribing = useSelector((state: AppStateType)=> getIsSubscribing(state))

    const subscribingProcess = isSubscribing.some((i) => i === id)

    return (
        <LoadingButton 
            size='small'
            variant='outlined'
            title={`Click to ${title.toLowerCase()} user...`}
            onClick={action} 
            loading={subscribingProcess} 
        >{title}</LoadingButton>
    )
}

export default User;
