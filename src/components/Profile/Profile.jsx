import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from 'components/other/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatusWithHooks';

const Profile = ({
    profileId,
    profile,
    status,
    updateStatus,
    isLoading,
    isOwner,
    updatePhoto,
}) => {
    return (
        <div className={s.profile}>
            <div>
                <h3>Profile</h3>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <div>
                        <ProfileInfo
                            {...profile}
                            isOwner={isOwner}
                            updatePhoto={updatePhoto}
                        />
                        <ProfileStatusWithHooks
                            status={status}
                            isOwner={isOwner}
                            updateStatus={updateStatus}
                        />
                        <MyPostsContainer
                            profileId={profileId}
                            isOwner={isOwner}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
