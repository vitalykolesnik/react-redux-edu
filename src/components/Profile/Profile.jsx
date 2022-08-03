import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from 'components/other/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileInfo/ProfileStatusWithHooks';

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
                        <ProfileStatusWithHooks
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                        <MyPostsContainer profileId={props.profileId} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
