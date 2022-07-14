import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfile } from 'redux/profileReduser';
import Profile from './Profile';
import { profileAPI } from 'api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.id;
        if (!id) id = this.props.profileId;
        profileAPI.getProfile(id).then((data) => {
            this.props.setUserProfile(data.profile);
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            profileAPI
                .getProfile(this.props.id)
                .then((data) => this.props.setUserProfile(data.profile));
        }
    }

    render() {
        return <Profile {...this.props.profile} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profileId: state.profilePage.profileId,
        profile: state.profilePage.profile,
    };
};

const WithUriProfilePageContainer = (props) => {
    let params = useParams();
    let paramId = parseInt(params.id) || props.profileId;
    return <ProfileContainer {...props} id={paramId} />;
};

const ProfilePageContainer = connect(mapStateToProps, {
    setUserProfile,
})(WithUriProfilePageContainer);

export default ProfilePageContainer;
