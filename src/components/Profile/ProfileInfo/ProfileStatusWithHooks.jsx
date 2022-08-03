import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const onEnableEditMode = () => {
        setEditMode(true);
    };

    const onDisableEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={s.profileStatus}>
            {editMode ? (
                <input
                    autoFocus={true}
                    onChange={onStatusChange}
                    onBlur={onDisableEditMode}
                    value={status}
                />
            ) : (
                <span className={s.statusText} onDoubleClick={onEnableEditMode}>
                    {status || 'No status'}
                </span>
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
