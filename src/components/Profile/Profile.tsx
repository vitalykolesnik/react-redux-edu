import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from 'components/types/types';

import { ProfileStatusWithHooks } from './ProfileInfo/ProfileStatusWithHooks';
import { Container, Skeleton, Typography } from '@mui/material';
import { NewPostForm } from './MyPosts/NewPostForm';

type PropsType = { 
    profileId: number | null
    profile: ProfileType 
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
        <Container sx={{mt:'5rem', mb:'5rem'}} >
            <Typography variant="h4" component="h4">Profile</Typography>
            {isLoading ? 
                <Skeleton variant='rectangular' width={'100%'} height={400} />
            :
                profile ? 
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
                        {isOwner ? <NewPostForm /> : ''}
                        <MyPostsContainer
                            profileId={profileId}
                            isOwner={isOwner}
                        />
                    </> : <></>
            }
        </Container>
    );
};


export default Profile;
