import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <h3>Profile</h3>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
