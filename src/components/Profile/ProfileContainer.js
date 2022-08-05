import React from 'react';
import { withUriParameters } from 'components/hoc/withUriParameters';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    requestUserPosts,
    requestUserProfile,
    requestUserStatus,
    updateUserStatus,
} from './../../redux/profileReduser';
import Profile from './Profile';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';
import { withProfileId } from 'components/hoc/withProfileId';
import {
    getProfile,
    getStatus,
    getIsLoading,
} from './../../redux/profileSelectors';

class ProfileContainer extends React.Component {
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
                isLoading={this.props.isLoading}
                profileId={this.props.profileId}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        isLoading: getIsLoading(state),
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
    })
)(ProfileContainer);
