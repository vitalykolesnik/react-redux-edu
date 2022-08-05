import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from 'components/other/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatusWithHooks';

const Profile = ({ profileId, profile, status, updateStatus, isLoading }) => {
    return (
        <div className={s.profile}>
            <div>
                <h3>Profile</h3>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <div>
                        <ProfileInfo {...profile} />
                        <ProfileStatusWithHooks
                            status={status}
                            updateStatus={updateStatus}
                        />
                        <MyPostsContainer profileId={profileId} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
