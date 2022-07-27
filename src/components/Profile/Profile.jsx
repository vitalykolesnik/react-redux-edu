import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileInfo/ProfileStatus';

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
                        <ProfileStatus
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                        <MyPostsContainer profileID={props.profileID} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
