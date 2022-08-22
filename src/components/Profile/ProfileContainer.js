import React from 'react';
import { withUriParameters } from 'components/hoc/withUriParameters';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    requestUserPosts,
    requestUserProfile,
    requestUserStatus,
    updateUserStatus,
    updateUserPhoto,
} from './../../redux/profileReduser';
import Profile from './Profile';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { withProfileId } from 'components/hoc/withProfileId';
import {
    getProfile,
    getStatus,
    getIsLoading,
} from './../../redux/profileSelectors';
import { getUserId } from 'redux/authSelectors';

class ProfileContainer extends React.PureComponent {
    componentDidMount() {
        const { profileId, requestUserProfile, requestUserStatus } = this.props;
        requestUserProfile(profileId);
        requestUserStatus(profileId);
    }

    componentDidUpdate(prevProps) {
        const { profileId, requestUserProfile, requestUserStatus } = this.props;
        if (prevProps.profileId !== profileId) {
            requestUserProfile(profileId);
            requestUserStatus(profileId);
        }
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                profileId={this.props.profileId}
                isLoading={this.props.isLoading}
                isOwner={this.props.userId === this.props.profileId}
                updateStatus={this.props.updateUserStatus}
                updatePhoto={this.props.updateUserPhoto}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        isLoading: getIsLoading(state),
        userId: getUserId(state),
    };
};

// const ProfilePageContainer = connect(mapStateToProps, {
//     setUserId,
//     getUserProfile,
// })(ProfileContainer);

// const AuthRedirectComponent = withAuthRedirect(ProfilePageContainer); // Executed in HOC

// const WithUriProfilePageContainer = withUriParameters(AuthRedirectComponent); // Executed in HOC

// export default WithUriProfilePageContainer;

export default compose(
    withUriParameters,
    withAuthRedirect,
    withProfileId,
    connect(mapStateToProps, {
        requestUserProfile,
        requestUserStatus,
        requestUserPosts,
        updateUserStatus,
        updateUserPhoto,
    })
)(ProfileContainer);
