import React from 'react';

import s  from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status,
    };

    onEnableEditMode = () => {
        this.setState({ editMode: true });
    };

    onDisableEditMode = () => {
        this.props.updateStatus(this.state.status);
        this.setState({ editMode: false });
    };

    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: e.currentTarget.value });
    };

    componentDidUpdate(prevProps: PropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {this.state.editMode ? (
                    <input
                        autoFocus={true}
                        onChange={this.onStatusChange}
                        onBlur={this.onDisableEditMode}
                        value={this.state.status}
                    />
                ) : (
                    <span
                        className={s.statusText}
                        onDoubleClick={this.onEnableEditMode}
                    >
                        {this.props.status || 'No status'}
                    </span>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
