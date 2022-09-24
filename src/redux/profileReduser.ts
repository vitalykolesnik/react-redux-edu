import { AppStateType, InferActionsTypes } from './reduxStore';
import { ImageType, NewsType } from './../components/types/types';
import { PostType, ProfileType } from '../components/types/types';
import { profileAPI, ResultCodeEnum } from './../api/api';
import { ThunkAction } from 'redux-thunk';

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

const initialState = {
    profile: {} as ProfileType,
    allPosts: [] as Array<NewsType>,
    posts: [] as Array<PostType>,
    isLoading: false,
    isAdding: false,
    isDeleting: [] as Array<number>,
    status: '',
};

const  actions = {
    addPosts: (post: PostType, images: Array<ImageType>) => ({
        type: 'PROFILE/ADD_POST',
        post,
        images,
    }) as const,
    
     deletePost : (postId: number) => ({
        type: 'PROFILE/DELETE_POST',
        postId,
    }) as const,
    
    setUserProfile : (profile: ProfileType)=> ({
        type: 'PROFILE/SET_USER_PROFILE',
        profile,
    }) as const,
    
    setUserPosts : (posts: Array<PostType>) => ({
        type: 'PROFILE/SET_USER_POSTS',
        posts,
    }) as const,
    
    setUserPhoto : (image: string)  => ({
        type: 'PROFILE/SET_USER_PHOTO',
        image,
    }) as const,
    
    setAllPosts : (allPosts: Array<NewsType>) => ({
        type: 'PROFILE/SET_ALL_POSTS',
        allPosts,
    }) as const,
    
    setUserStatus : (status: string) => ({
        type: 'PROFILE/SET_USER_STATUS',
        status,
    }) as const,
    
    togglePreloader : (process: boolean) => ({
        type: 'PROFILE/TOGGLE_PRELOADER',
        process,
    }) as const,
    
    toggleIsAdding : (process: boolean) => ({
        type: 'PROFILE/TOGGLE_ADD_STATUS',
        process,
    }) as const,
    
    toggleIsDeleting : (isDeleting: boolean, id: number) => ({
        type: 'PROFILE/TOGGLE_DELETE_STATUS',
        isDeleting,
        id,
    }) as const  
}

const profileReduser = (state = initialState, action: ActionTypes) : InitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD_POST': {
            const post: PostType = action.post;
            if (post) {
                post.likes = [];
                post.images = [];
                if (action.images) {
                    post.images = [...action.images];
                }
                return {
                    ...state,
                    posts: [...state.posts, post],
                };
            }
            return state
        }
        case 'PROFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            }
        }
        case 'PROFILE/SET_USER_PROFILE': {
            return { ...state, profile: action.profile }
        }
        case 'PROFILE/SET_USER_POSTS': {
            return { ...state, posts: action.posts }
        }
        case 'PROFILE/SET_USER_PHOTO': {
            return {
                ...state,
                profile: { ...profileAPI, image: action.image } as any,
            }
        }
        case 'PROFILE/SET_ALL_POSTS': {
            return { ...state, allPosts: action.allPosts }
        }
        case 'PROFILE/SET_USER_STATUS': {
            return { ...state, status: action.status }
        }
        case 'PROFILE/TOGGLE_PRELOADER': {
            return {...state, isLoading: action.process }
        }
        case 'PROFILE/TOGGLE_ADD_STATUS': {
            return {...state, isAdding: action.process }
        }
        case 'PROFILE/TOGGLE_DELETE_STATUS': {
            return {
                ...state,
                isDeleting: action.isDeleting
                    ? [...state.isDeleting, action.id]
                    : state.isDeleting.filter((id: number) => id !== action.id),
            }
        }
        default:
            return state
    }
};

export const requestUserProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.togglePreloader(true));
        let data = await profileAPI.getProfile(userId);
        if (data.errorCode === ResultCodeEnum.Success) {
            const { profile } = data;
            dispatch(actions.setUserProfile(profile));
        }
        dispatch(actions.togglePreloader(false));
    };
};

export const requestUserStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);
        if (data.errorCode === ResultCodeEnum.Success) {
            const { status } = data;
            dispatch(actions.setUserStatus(status));
        }
    };
};

export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status);
        if (data.errorCode === ResultCodeEnum.Success) {
            const { status } = data;
            dispatch(actions.setUserStatus(status));
        }
    };
};

export const updateUserPhoto = (file: File): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.updatePhoto(file);
        if (data.errorCode === ResultCodeEnum.Success) {
            const { image } = data;
            dispatch(actions.setUserPhoto(image));
        }
    };
};

export const requestUserPosts = (profileId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getPosts(profileId);
        if (data.errorCode === ResultCodeEnum.Success) {
            const { posts } = data;
            dispatch(actions.setUserPosts(posts));
        }
    };
};

export const requestLikePost = (id: number, profileId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.likePost(id);
        if (data.errorCode === ResultCodeEnum.Success) {
            dispatch(requestAllPosts());
            dispatch(requestUserPosts(profileId));
        }
    };
};

export const requestAllPosts = (): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getAllPosts();
        if (data.errorCode === ResultCodeEnum.Success) {
            const { posts } = data;
            dispatch(actions.setAllPosts(posts));
        }
    };
};

export const addUserPost = (payload: any): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsAdding(true));
        let data = await profileAPI.addPost(payload);
        if (data.errorCode === ResultCodeEnum.Success) {
            const { dataValues, image } = data;
            dispatch(actions.addPosts(dataValues, image));
        }
        dispatch(actions.toggleIsAdding(false));
    };
};

export const deleteUserPost = (id: number) : ThunkType=> {
    return async (dispatch) => {
        dispatch(actions.toggleIsDeleting(true, id));
        let data = await profileAPI.deletePost(id);
        if (data.errorCode === ResultCodeEnum.Success) {
            dispatch(actions.deletePost(id));
        }
        dispatch(actions.toggleIsDeleting(false, id));
    };
};

export default profileReduser;
