import { ProfileType } from "../components/types/types";
import { AppStateType } from "./reduxStore";

export const getUsers = (state: AppStateType): Array<ProfileType> => {
    return state.usersPage.users;
};

export const getFriends = (state: AppStateType): Array<ProfileType>  => {
    return state.usersPage.friends;
};

export const getPageSize = (state: AppStateType): number=> {
    return state.usersPage.pageSize;
};

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage;
};

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount;
};

export const getIsLoading = (state: AppStateType): boolean => {
    return state.usersPage.isLoading;
};

export const getIsSubscribing = (state: AppStateType): Array<number> => {
    return state.usersPage.isSubscribing;
};
