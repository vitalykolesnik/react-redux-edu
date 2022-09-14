import React, { Dispatch, useCallback, useEffect } from 'react';
import User from './User/User';
import Preloader from '../other/Preloader/Preloader';
import Paginator from './Paginator';
import { ProfileType } from 'components/types/types';

import { useDispatch } from 'react-redux';
import { requestFriends } from 'redux/usersReduser';
import {  Container, Grid, Stack, TextField, Typography } from '@mui/material';

type PropsType = {
    users: Array<ProfileType>,
    friends: Array<ProfileType>,
    userId: number | null,
    isLoading: boolean
}

const Users
    : React.FC<PropsType> = ({
    users,
    friends,
    userId,
    isLoading,
}) => {
    const dispatch: Dispatch<any> = useDispatch()
    
    const loadFriends = useCallback(() => {
        dispatch(requestFriends())
    }, [dispatch])


    useEffect(() => {
        loadFriends()
    }, [loadFriends, friends])
    
    const usersList = users.map((u) => (
        <Grid item xs={6} sm={4} md={3} key={u.id}>
            <User
                {...u}
                key={u.id}
                friends={friends}
                isOwner={userId !== u.id}
            />
        </Grid>
    ));

    return (
        <Container sx={{mt:'5rem', alignItems : 'center'}}>
            <Typography variant="h4">Users</Typography>
            {isLoading ? (
                <Preloader />
            ) : (
                <Stack sx={{ mb: '3rem', alignItems : 'center'}}>
                    {/* //Search */}
                    <TextField
                        fullWidth
                        type='search'
                        variant='standard'
                        label='Search'
                        sx={{ marginBlock : 1}}
                        // value='Value'
                        // onChange={onTyping}
                    />
                    <Paginator />
                    <Grid container spacing={{xs: 1, sm: 2}}>
                        {usersList}
                    </Grid>
                </Stack>
            )}
        </Container>
    );
};

export default Users