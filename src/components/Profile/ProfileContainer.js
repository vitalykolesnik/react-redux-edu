import React from 'react';
import { withUriParameters } from 'components/hoc/withUriParameters';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
} from './../../redux/profileReduser';
import Profile from './Profile';
import { withAuthRedirect } from 'components/hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.profileID || this.props.userID);
        this.props.getUserStatus(this.props.profileID || this.props.userID);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profileID !== this.props.profileID) {
            this.props.getUserProfile(
                this.props.profileID || this.props.userID
            );
            this.props.getUserStatus(this.props.profileID || this.props.userID);
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus}
                profileID={this.props.profileID || this.props.userID}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.auth.userId,
        isLoading: state.profilePage.isLoading,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
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
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    }),
    withUriParameters,
    withAuthRedirect
)(ProfileContainer);
