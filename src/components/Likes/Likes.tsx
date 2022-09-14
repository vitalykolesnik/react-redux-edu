import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLikePost } from '../../redux/profileReduser';
import { getIsAuth, getUserId } from '../../redux/authSelectors';
import { LikeType } from 'components/types/types';
import { AppStateType } from 'redux/reduxStore';
import { Dispatch } from 'redux';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

type PropsType = {
    postId: number
     profileId: number 
     likes: Array<LikeType>
}

const Likes: React.FC<PropsType> = ({ postId, profileId, likes }) => {
    const userId = useSelector((state: AppStateType) => getUserId(state));
    const isAuth = useSelector((state: AppStateType) => getIsAuth(state));
    const dispatch: Dispatch<any> = useDispatch();

    const init = () => {
        return likes.some((l) => l.profileId === userId);
    };

    const [isLiked, setIsLiked] = useState(init());

    const onLike = () => {
        if (isAuth) {
            dispatch(requestLikePost(postId, profileId));
            setIsLiked((isLiked) => !isLiked);
        }
    };

    return (
        <IconButton onClick={onLike} sx={{m: 1}}>
            <FavoriteIcon  color={isLiked? "error": "primary"} />
        </IconButton>
    );
};

export default Likes;
