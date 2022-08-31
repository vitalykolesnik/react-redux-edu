import { profileAPI } from '../api/api';

const ADD_POST = 'PROFILE/ADD_POST';
const DELETE_POST = 'PROFILE/DELETE_POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_USER_POSTS = 'PROFILE/SET_USER_POSTS';
const SET_ALL_POSTS = 'PROFILE/SET_ALL_POSTS';
const SET_USER_STATUS = 'PROFILE/SET_USER_STATUS';
const SET_USER_PHOTO = 'PROFILE/SET_USER_PHOTO';
const TOGGLE_PRELOADER = 'PROFILE/TOGGLE_PRELOADER';
const TOGGLE_ADD_STATUS = 'PROFILE/TOGGLE_ADD_STATUS';
const TOGGLE_DELETE_STATUS = 'PROFILE/TOGGLE_DELETE_STATUS';

const initialState = {
    profileId: null,
    profile: null,
    allPosts: [],
    posts: [],
    isLoading: false,
    isAdding: false,
    isDeleting: [],
    status: '',
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            debugger;
            const post = action.post;
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
            return state;
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_USER_POSTS: {
            return { ...state, posts: action.posts };
        }
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: { ...profileAPI, image: action.image },
            };
        }
        case SET_ALL_POSTS: {
            return { ...state, allPosts: action.allPosts };
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

export const addPosts = (post, images) => ({
    type: ADD_POST,
    post,
    images,
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setUserPosts = (posts) => ({
    type: SET_USER_POSTS,
    posts,
});

export const setUserPhoto = (image) => ({
    type: SET_USER_PHOTO,
    image,
});

export const setAllPosts = (allPosts) => ({
    type: SET_ALL_POSTS,
    allPosts,
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

export const requestUserProfile = (userId) => {
    return async (dispatch) => {
        dispatch(togglePreloader(true));
        let response = await profileAPI.getProfile(userId);
        if (!response.errorCode) {
            const { profile } = response;
            dispatch(setUserProfile(profile));
        }
        dispatch(togglePreloader(false));
    };
};

export const requestUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        if (!response.errorCode) {
            const { status } = response;
            dispatch(setUserStatus(status));
        }
    };
};

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (!response.errorCode) {
            const { status } = response;
            dispatch(setUserStatus(status));
        }
    };
};

export const updateUserPhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.updatePhoto(file);
        debugger;
        if (!response.errorCode) {
            const { image } = response;
            dispatch(setUserPhoto(image));
        }
    };
};

export const requestUserPosts = (profileId) => {
    return async (dispatch) => {
        let response = await profileAPI.getPosts(profileId);
        if (!response.errorCode) {
            const { posts } = response;
            dispatch(setUserPosts(posts));
        }
    };
};

export const requestLikePost = (id, profileId) => {
    return async (dispatch) => {
        let response = await profileAPI.likePost(id);
        if (!response.errorCode) {
            dispatch(requestAllPosts());
            dispatch(requestUserPosts(profileId));
        }
    };
};

export const requestAllPosts = () => {
    return async (dispatch) => {
        let response = await profileAPI.getAllPosts();
        if (!response.errorCode) {
            const { posts } = response;
            dispatch(setAllPosts(posts));
        }
    };
};

export const addUserPost = (post) => {
    return async (dispatch) => {
        dispatch(toggleIsAdding(true));
        const { newPostText, img } = post;
        const payload = { text: newPostText, image: img };
        let response = await profileAPI.addPost(payload);
        if (!response.errorCode) {
            const { dataValues, image } = response;
            dispatch(addPosts(dataValues, image));
        }
        dispatch(toggleIsAdding(false));
    };
};

export const deleteUserPost = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsDeleting(true, id));
        let response = await profileAPI.deletePost(id);
        if (!response.errorCode) {
            dispatch(deletePost(id));
        }
        dispatch(toggleIsDeleting(false, id));
    };
};

export default profileReduser;
