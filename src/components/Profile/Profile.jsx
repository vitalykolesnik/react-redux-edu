import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from 'components/other/Preloader/Preloader';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <h3>Profile</h3>
                {props.isLoading ? (
                    <Preloader />
                ) : (
                    <div>
                        <ProfileInfo {...props.profile} />
                        <MyPostsContainer profileID={props.profileID} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
