export const getUserId = (state) => {
    return state.auth.userId;
};

export const getValidateLoginMessage = (state) => {
    return state.auth.validateLoginMessage;
};

export const getValidatePasswordMessage = (state) => {
    return state.auth.validatePasswordMessage;
};

export const getLoginInput = (state) => {
    return state.auth.loginInput;
};

export const getPasswordInput = (state) => {
    return state.auth.passwordInput;
};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getUserName = (state) => {
    return state.auth.userName;
};
