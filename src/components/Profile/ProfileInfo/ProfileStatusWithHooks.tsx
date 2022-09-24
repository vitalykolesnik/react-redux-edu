import { Paper, TextField, Typography } from '@mui/material';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserStatus } from 'redux/profileReduser';

type PropsType = {
    status: string
    isOwner: boolean
}

export const ProfileStatusWithHooks: React.FC<PropsType> = ({ status, isOwner }) => {
    const [editMode, setEditMode] = useState(false);
    const [statusState, setStatusState] = useState(status);
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        setStatusState(status);
    }, [status]);

    const onEnableEditMode = () => {
        setEditMode(true);
    };

    const onDisableEditMode = () => {
        setEditMode(false);
        if(statusState !== status) dispatch(updateUserStatus(statusState));
    };

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatusState(e.currentTarget.value);
    };

    return (
        <Paper >
            {isOwner && editMode ? (
                <TextField
                    fullWidth
                    autoFocus={true}
                    onChange={onStatusChange}
                    onBlur={onDisableEditMode}
                    value={statusState}
                />
            ) : (
                <Typography onDoubleClick={onEnableEditMode} textAlign='center' sx={{paddingBlock: '1rem'}}> 
                    {statusState || 'No status'}
                </Typography>
            )}
        </Paper>
    );
};

