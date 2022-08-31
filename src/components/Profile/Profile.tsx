import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../other/Preloader/Preloader';
import { ProfileType } from 'components/types/types';

import s from './Profile.module.css'
import { ProfileStatusWithHooks } from './ProfileInfo/ProfileStatusWithHooks';

type PropsType = { 
    profileId: number | null
    profile: ProfileType | null
    status: string
    isLoading: boolean
    isOwner: boolean
    updatePhoto: (file: File) => void
}

const Profile : React.FC<PropsType> = ({
    profileId,
    profile,
    status,
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
                ) : profile ? (
                            <>
                                <ProfileInfo
                                    name={profile.name}
                                    image={profile.image}
                                    description={profile.description}
                                    updatePhoto={updatePhoto}
                                    isOwner={isOwner}
                                />
                                <ProfileStatusWithHooks
                                    status={status}
                                    isOwner={isOwner}
                                />
                                <MyPostsContainer
                                    profileId={profileId}
                                    isOwner={isOwner}
                                />
                            </>
                      )  : <></>
                }
            </div>
        </div>
    );
};

export default Profile;
