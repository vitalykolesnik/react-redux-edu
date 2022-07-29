import { profileAPI } from 'api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const TYPE_TEXT = 'TYPE-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POSTS = 'SET_USER_POSTS';
const SET_USER_STATUS = 'SET_USER_STATUS';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_ADD_STATUS = 'TOGGLE_ADD_STATUS';
const TOGGLE_DELETE_STATUS = 'TOGGLE_DELETE_STATUS';

const initialState = {
    profileId: null,
    profile: null,
    posts: [],
    isLoading: false,
    isAdding: false,
    isDeleting: [],
    postMessage: '',
    status: '',
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.postMessage) {
                return {
                    ...state,
                    posts: [...state.posts, action.post],
                    postMessage: '',
                };
            }
            return state;
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
        case SET_USER_STATUS: {
            return { ...state, status: action.status };
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        case TOGGLE_ADD_STATUS: {
            return {
                ...state,
                isAdding: action.isAdding,
            };
        }
        case TOGGLE_DELETE_STATUS: {
            return {
                ...state,
                isDeleting: action.isDeleting
                    ? [...state.isDeleting, action.id]
                    : [state.isDeleting.filter((id) => id !== action.id)],
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

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status,
});

export const togglePreloader = (isLoading) => ({
    type: TOGGLE_PRELOADER,
    isLoading,
});

export const toggleIsAdding = (isAdding) => ({
    type: TOGGLE_ADD_STATUS,
    isAdding,
});

export const toggleIsDeleting = (isDeleting, id) => ({
    type: TOGGLE_DELETE_STATUS,
    isDeleting,
    id,
});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        profileAPI.getProfile(userId).then((data) => {
            if (!data.errorCode) {
                const { user } = data;
                dispatch(setUserProfile(user));
                dispatch(togglePreloader(false));
            }
        });
    };
};

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((data) => {
            if (!data.errorCode) {
                const { status } = data;
                dispatch(setUserStatus(status));
            }
        });
    };
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((data) => {
            if (!data.errorCode) {
                const { status } = data;
                dispatch(setUserStatus(status));
            }
        });
    };
};

export const getUserPosts = (profileId) => {
    return (dispatch) => {
        profileAPI.getPosts(profileId).then((data) => {
            if (!data.errorCode) {
                const { posts } = data;
                dispatch(setUserPosts(posts));
            }
        });
    };
};

export const addUserPost = (post) => {
    return (dispatch) => {
        dispatch(toggleIsAdding(true));
        profileAPI.addPost(post).then((data) => {
            if (!data.errorCode) {
                const { dataValues: posts } = data;
                dispatch(addPosts(posts));
            }
            dispatch(toggleIsAdding(false));
        });
    };
};

export const deleteUserPost = (id) => {
    return (dispatch) => {
        dispatch(toggleIsDeleting(true, id));
        profileAPI.deletePost(id).then((data) => {
            if (!data.errorCode) {
                dispatch(deletePost(id));
            }
            dispatch(toggleIsDeleting(false, id));
        });
    };
};

export default profileReduser;
