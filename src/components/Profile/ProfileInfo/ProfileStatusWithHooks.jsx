import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = ({ status, updateStatus, isOwner }) => {
    const [editMode, setEditMode] = useState(false);
    const [statusState, setStatusState] = useState(status);

    useEffect(() => {
        setStatusState(status);
    }, [status]);

    const onEnableEditMode = () => {
        setEditMode(true);
    };

    const onDisableEditMode = () => {
        setEditMode(false);
        updateStatus(statusState);
    };

    const onStatusChange = (e) => {
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

export default ProfileStatusWithHooks;
