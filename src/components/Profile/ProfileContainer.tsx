import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    requestUserStatus,
    updateUserPhoto,
    requestUserProfile,
} from '../../redux/profileReduser';
import Profile from './Profile';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { withUriParameters } from '../hoc/withUriParameters';
import { withProfileId } from '../hoc/withProfileId';
import {
    getProfile,
    getStatus,
    getIsLoading,
} from '../../redux/profileSelectors';
import { getUserId } from '../../redux/authSelectors';
import { ProfileType } from 'components/types/types';
import { AppStateType } from 'redux/reduxStore';

type MapStatePropsType = {
    userId: number | null
    profile: ProfileType
    status: string
    isLoading: boolean
};

type MapDispatchPropsType = {
    requestUserProfile: (userId: number) => void
    requestUserStatus: (userId: number) => void
    updateUserPhoto: (file: File) => void
};

type OwnPropsType = {
    profileId: number | null
    isOwner: boolean
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
type StateType = {}

class ProfileContainer extends React.PureComponent<PropsType, StateType> {
    componentDidMount() {
        const { profileId, requestUserProfile, requestUserStatus } = this.props;
        if(profileId) {
            requestUserProfile(profileId);
            requestUserStatus(profileId);
        }
    }

    componentDidUpdate(prevProps: PropsType ) {
        const { profileId, requestUserProfile, requestUserStatus } = this.props;
        if (profileId && prevProps.profileId !== profileId) {
            requestUserProfile(profileId);
            requestUserStatus(profileId);
        }
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                profileId={this.props.profileId}
                status={this.props.status}
                isLoading={this.props.isLoading}
                isOwner={this.props.userId === this.props.profileId}
                updatePhoto={this.props.updateUserPhoto}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: getUserId(state),
        profile: getProfile(state),
        status: getStatus(state),
        isLoading: getIsLoading(state),
    };
};

export default compose(
    withUriParameters,
    withAuthRedirect,
    withProfileId,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        requestUserProfile,
        requestUserStatus,
        updateUserPhoto,
    })
)(ProfileContainer);
