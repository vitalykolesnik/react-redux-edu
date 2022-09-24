import { AppStateType } from "./reduxStore";

export const getUserId = (state: AppStateType): number | null => {
    return state.auth.userId;
};

export const getIsAuth = (state: AppStateType): boolean => {
    return state.auth.isAuth;
};

export const getUserName = (state: AppStateType): string => {
    return state.auth.userName;
};
