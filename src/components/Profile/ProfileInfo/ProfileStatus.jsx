import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    onEnableEditMode = () => {
        this.setState({ editMode: true });
    };

    onDisableEditMode = () => {
        this.setState({ editMode: false });
    };

    onUpdateStatus = (e) => {
        this.props.updateStatus(e.target.value);
    };

    render() {
        return (
            <div className={s.profileStatus}>
                {this.state.editMode ? (
                    <input
                        autoFocus
                        onChange={this.onUpdateStatus}
                        onBlur={this.onDisableEditMode}
                        value={this.props.status}
                    />
                ) : (
                    <span
                        className={s.statusText}
                        onDoubleClick={this.onEnableEditMode}
                    >
                        {this.props.status}
                    </span>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
