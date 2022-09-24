import { ProfileType, PostType, NewsType } from './../components/types/types';
import { AppStateType } from "./reduxStore";

export const getProfile = (state: AppStateType): ProfileType => {
    return state.profilePage.profile;
};

export const getPosts = (state: AppStateType): Array<PostType> => {
    return state.profilePage.posts;
};

export const getAllPosts = (state: AppStateType): Array<NewsType> => {
    return state.profilePage.allPosts;
};

export const getStatus = (state: AppStateType): string=> {
    return state.profilePage.status;
};

export const getIsLoading = (state: AppStateType): boolean => {
    return state.profilePage.isLoading;
};

export const getIsAdding = (state: AppStateType): boolean => {
    return state.profilePage.isAdding;
};

export const getIsDeleting = (state: AppStateType): Array<number> => {
    return state.profilePage.isDeleting;
};
