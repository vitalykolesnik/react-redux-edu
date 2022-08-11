export const getUserId = (state) => {
    return state.auth.userId;
};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getUserName = (state) => {
    return state.auth.userName;
};
