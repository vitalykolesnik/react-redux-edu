export const getProfile = (state) => {
    return state.profilePage.profile;
};

export const getPosts = (state) => {
    return state.profilePage.posts;
};

export const getAllPosts = (state) => {
    return state.profilePage.allPosts;
};

export const getPostMessage = (state) => {
    return state.profilePage.postMessage;
};

export const getStatus = (state) => {
    return state.profilePage.status;
};

export const getIsLoading = (state) => {
    return state.profilePage.isLoading;
};

export const getIsAdding = (state) => {
    return state.profilePage.isAdding;
};

export const getIsDeleting = (state) => {
    return state.profilePage.isDeleting;
};
