import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserStatus } from 'redux/profileReduser';
import s from './ProfileStatus.module.css';

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
        <div className={s.profileStatus}>
            {isOwner && editMode ? (
                <input
                    autoFocus={true}
                    onChange={onStatusChange}
                    onBlur={onDisableEditMode}
                    value={statusState}
                />
            ) : (
                <span className={s.statusText} onDoubleClick={onEnableEditMode}>
                    {statusState || 'No status'}
                </span>
            )}
        </div>
    );
};

