import { authAPI, profileAPI } from 'api/api';

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const TYPE_LOGIN = 'AUTH/TYPE_LOGIN';
const TYPE_PASSWORD = 'AUTH/TYPE_PASSWORD';
const VALIDATE = 'AUTH/VALIDATE';

const STARTING_USER_NAME = 'Guest';

const initialState = {
    userId: null,
    userName: STARTING_USER_NAME,
    isAuth: false,
    loginInput: '',
    passwordInput: '',
    validateLoginMessage: '',
    validatePasswordMessage: '',
};

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.userId,
                userName: action.userName,
                isAuth: action.isAuth,
            };
        }
        case TYPE_LOGIN: {
            return {
                ...state,
                loginInput: action.login,
                validateLoginMessage: '',
            };
        }
        case TYPE_PASSWORD: {
            return {
                ...state,
                passwordInput: action.password,
                validatePasswordMessage: '',
            };
        }
        case VALIDATE: {
            return {
                ...state,
                validateLoginMessage: action.loginError,
                validatePasswordMessage: action.passwordError,
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (user) => ({
    type: SET_USER_DATA,
    userId: user.userId,
    userName: user.userName,
    isAuth: user.isAuth,
});

export const typeLogin = (login) => ({
    type: TYPE_LOGIN,
    login,
});

export const typePassword = (password) => ({
    type: TYPE_PASSWORD,
    password,
});

export const setValidateMessage = (errors) => ({
    type: VALIDATE,
    loginError: errors.login,
    passwordError: errors.password,
});

export const getAuthData = () => {
    return async (dispatch) => {
        try {
            let response = await profileAPI.getMe();
            if (!response.errorCode) {
                const { id, name } = response.dataValues;
                dispatch(
                    setAuthUserData({
                        userId: id,
                        userName: name,
                        isAuth: true,
                    })
                );
            }
        } catch (e) {
            console.log('Unautorized');
        }
    };
};

export const login = (login, password) => {
    return async (dispatch) => {
        try {
            let response = await authAPI.login(login, password);
            if (!response.errorCode) {
                dispatch(getAuthData());
            }
        } catch (e) {
            dispatch(setValidateMessage(e.response.data.errors));
        }
    };
};

export const signup = (login, password) => {
    return async (dispatch) => {
        try {
            let response = await authAPI.signup(login, password);
            if (!response.errorCode) {
                dispatch(getAuthData());
            }
        } catch (e) {
            dispatch(setValidateMessage(e.response.data.errors));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            let response = await authAPI.logout();
            if (!response.errorCode) {
                dispatch(
                    setAuthUserData({
                        userId: null,
                        userName: STARTING_USER_NAME,
                        isAuth: false,
                    })
                );
            }
        } catch (e) {
            console.log(e);
        }
    };
};

export default authReduser;
