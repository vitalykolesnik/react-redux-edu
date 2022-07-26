import { profileAPI } from 'api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const TYPE_TEXT = 'TYPE-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POSTS = 'SET_USER_POSTS';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

const initialState = {
    profile: null,
    posts: [],
    postMessage: '',
    isLoading: false,
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            // if (state.postMessage) {
            return {
                ...state,
                posts: [...state.posts, action.post],
                postMessage: '',
            };
            // }
            // return state;
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            };
        }
        case TYPE_TEXT: {
            return { ...state, postMessage: action.postMessage };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_USER_POSTS: {
            return { ...state, posts: action.posts };
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        default:
            return state;
    }
};

export const addPosts = (post) => ({
    type: ADD_POST,
    post,
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
});

export const typeText = (text) => ({
    type: TYPE_TEXT,
    postMessage: text,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setUserPosts = (posts) => ({
    type: SET_USER_POSTS,
    posts,
});

export const togglePreloader = (isLoading) => ({
    type: TOGGLE_PRELOADER,
    isLoading,
});

export const getUserPosts = (profileId) => {
    return (dispatch) => {
        profileAPI.getPosts(profileId).then((data) => {
            if (!data.errorCode) {
                dispatch(setUserPosts(data.posts));
            }
        });
    };
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        profileAPI.getProfile(userId).then((data) => {
            if (!data.errorCode) {
                dispatch(setUserProfile(data.user));
                dispatch(togglePreloader(false));
            }
        });
    };
};

export const addUserPost = (post) => {
    return (dispatch) => {
        profileAPI.addPost(post).then((data) => {
            if (!data.errorCode) {
                dispatch(addPosts(data.dataValues));
            }
        });
    };
};

export const deleteUserPost = (id) => {
    return (dispatch) => {
        profileAPI.deletePost(id).then((data) => {
            if (!data.errorCode) {
                dispatch(deletePost(id));
            }
        });
    };
};

export default profileReduser;
